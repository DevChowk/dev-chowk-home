import { Reveal } from '@/components/motion/Reveal'
import { SectionHead } from '@/components/sections/SectionHead'
import { client } from '@/sanity/client'
import { cms } from '@/sanity/fetch'
import { FAQS_QUERY } from '@/sanity/queries'

/**
 * Objection handling before the first call. Native <details>, so it works
 * without JS and is keyboard-accessible by default.
 */
export async function Faq() {
  const faqs = await client.fetch(FAQS_QUERY, {}, cms)
  if (faqs.length === 0) return null

  return (
    <section id="faq" className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <SectionHead
          chapter="06"
          label="FAQ"
          title={<>Questions we get before the first call.</>}
        />

        <div className="mt-14 border-t border-rule lg:max-w-[880px]">
          {faqs.map((item, i) => (
            <Reveal key={item._id} delay={Math.min(i, 5) * 0.05} y={14}>
              <details className="group border-b border-rule">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[22px] leading-[1.25] lg:text-[24px]">
                    {item.question}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    className="shrink-0 text-brass transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </summary>
                <p className="max-w-[62ch] pb-7 text-[16px] leading-[1.68] text-ink-muted">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
