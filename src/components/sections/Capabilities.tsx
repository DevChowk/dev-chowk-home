import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHead } from '@/components/sections/SectionHead'
import { client } from '@/sanity/client'
import { cms, nth } from '@/sanity/fetch'
import { CAPABILITIES_QUERY } from '@/sanity/queries'

export async function Capabilities() {
  const capabilities = await client.fetch(CAPABILITIES_QUERY, {}, cms)
  if (capabilities.length === 0) return null

  return (
    <section className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <SectionHead
          chapter="02"
          label="What we do"
          title={<>Everything a product needs to reach production — and stay there.</>}
          intro="Seven capabilities, one accountable team. Most engagements start with one."
        />

        <ul className="mt-14 flex flex-col border-t border-rule">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c._id} delay={Math.min(i, 4) * 0.06} y={20}>
              <Link
                href="/services"
                className="group rule-draw grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 lg:grid-cols-[56px_300px_minmax(0,1fr)_24px] lg:py-9"
              >
                <span className="font-mono text-[13px] tracking-[0.1em] text-brass lg:pt-2.5">
                  {nth(i)}
                </span>
                <h3 className="font-display text-[28px] leading-[1.12] font-normal tracking-[-0.01em] lg:text-[32px]">
                  {c.title}
                </h3>
                <div>
                  <p className="text-[16px] leading-[1.62] text-ink-muted">{c.body}</p>
                  <ul className="mt-3.5 flex flex-wrap gap-2">
                    {(c.tags ?? []).map((t) => (
                      <li
                        key={t}
                        className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-ink-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  className="hidden arrow-nudge text-brass lg:mt-2.5 lg:block"
                  aria-hidden="true"
                >
                  <path d="M3 13L13 3M6 3h7v7" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
