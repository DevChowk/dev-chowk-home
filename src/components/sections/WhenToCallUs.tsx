import { Reveal } from '@/components/motion/Reveal'
import { SectionHead } from '@/components/sections/SectionHead'
import { client } from '@/sanity/client'
import { cms, nth } from '@/sanity/fetch'
import { SITUATIONS_QUERY } from '@/sanity/queries'

/** Problem-led entry point: the buyer recognises their own situation. */
export async function WhenToCallUs() {
  const situations = await client.fetch(SITUATIONS_QUERY, {}, cms)
  if (situations.length === 0) return null

  return (
    <section className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <SectionHead
          chapter="01"
          label="When to call us"
          title={<>Three situations we&apos;re built for.</>}
          intro="Most firms are good at one stage of a product's life. We're set up for all of them, and we'll tell you which one you're in."
        />

        <ol className="mt-14 flex flex-col border-t border-rule">
          {situations.map((s, i) => (
            <Reveal as="li" key={s._id} delay={i * 0.1} y={22}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-9 lg:grid-cols-[56px_320px_minmax(0,1fr)]">
                <span className="font-mono text-[13px] tracking-[0.1em] text-brass lg:pt-2">
                  {nth(i)}
                </span>
                <h3 className="font-display text-[28px] leading-[1.12] font-normal tracking-[-0.01em] lg:text-[32px]">
                  {s.title}
                </h3>
                <p className="text-[16px] leading-[1.68] text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
