import { Reveal } from '@/components/motion/Reveal'
import { SectionHead } from '@/components/sections/SectionHead'
import { Button } from '@/components/ui/Button'
import { client } from '@/sanity/client'
import { cms, nth } from '@/sanity/fetch'
import { ENGAGEMENT_QUERY } from '@/sanity/queries'
import { site } from '@/lib/site'

/**
 * The engagement model. For a firm without client logos this is the section
 * that does the trust work — a defined next step, a free two-week trial to
 * jump-start the work, and written deliverables the client keeps.
 *
 * Deliberately no prices: rates are discussed on the call, not published.
 */
export async function HowWeWork({ chapter = '03' }: { chapter?: string }) {
  const engagement = await client.fetch(ENGAGEMENT_QUERY, {}, cms)
  if (engagement.steps.length === 0) return null

  return (
    <section id="how-we-work" className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <SectionHead
          chapter={chapter}
          label="How we work"
          title={<>A defined path from first call to production.</>}
          intro="You always know what the next step is, and what you keep."
        />

        <ol className="mt-14 flex flex-col border-t border-rule">
          {engagement.steps.map((step, i) => (
            <Reveal as="li" key={step._id} delay={i * 0.07} y={20}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 lg:grid-cols-[56px_300px_minmax(0,1fr)] lg:py-9">
                <span className="font-mono text-[13px] tracking-[0.1em] text-brass lg:pt-2">
                  {nth(i)}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-[28px] leading-[1.12] font-normal tracking-[-0.01em] lg:text-[32px]">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
                    {step.meta}
                  </span>
                </div>
                <p className="text-[16px] leading-[1.68] text-ink-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal y={18} delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-brass bg-brass-soft p-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-9">
            <div className="flex flex-col gap-3">
              <p className="chapter-label">Start with a free trial</p>
              <p className="max-w-[62ch] text-[16px] leading-[1.68]">
                Two weeks of real work on your product, at no charge, to jump-start it. If it
                isn&apos;t the right fit, you keep everything we built.
              </p>
            </div>
            <Button href={site.booking.href} arrow className="shrink-0">
              {site.booking.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
