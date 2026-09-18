import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { Reveal } from '@/components/motion/Reveal'
import { AiEngineering } from '@/components/sections/AiEngineering'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { TechStack } from '@/components/sections/TechStack'
import { Button } from '@/components/ui/Button'
import { capabilities } from '@/lib/content'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Technology consulting and architecture, product engineering, modernisation, scalability, dedicated teams, AI engineering, and cloud infrastructure — delivered end to end by one accountable team.',
}

export default function ServicesPage() {
  return (
    <div id="main">
      <PageHeader
        chapter="02"
        label="What we do"
        title={<>Everything a product needs to reach production — and stay there.</>}
        intro="Seven capabilities, one accountable team. Most engagements start with one and grow from there."
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <ul className="flex flex-col border-t border-rule">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.n} delay={Math.min(i, 4) * 0.06} y={20}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 lg:grid-cols-[56px_300px_minmax(0,1fr)] lg:py-9">
                <span className="font-mono text-[13px] tracking-[0.1em] text-brass lg:pt-2.5">
                  {c.n}
                </span>
                <h2 className="font-display text-[28px] leading-[1.12] font-normal tracking-[-0.01em] lg:text-[32px]">
                  {c.title}
                </h2>
                <div>
                  <p className="text-[16px] leading-[1.62] text-ink-muted">{c.body}</p>
                  <ul className="mt-3.5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-ink-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <AiEngineering />
      <HowWeWork />
      <TechStack />

      <div className="border-t border-rule">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-6 px-6 py-16 lg:flex-row lg:items-center lg:px-18 lg:py-20">
          <p className="max-w-[24ch] font-display text-[24px] italic lg:text-[26px]">
            Not sure where to start? That&apos;s what the first call is for.
          </p>
          <Button href={site.booking.href} arrow className="shrink-0">
            {site.booking.label}
          </Button>
        </div>
      </div>
    </div>
  )
}
