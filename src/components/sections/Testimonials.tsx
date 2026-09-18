import { Reveal } from '@/components/motion/Reveal'
import { SectionHead } from '@/components/sections/SectionHead'
import { client } from '@/sanity/client'
import { cms } from '@/sanity/fetch'
import { TESTIMONIALS_QUERY } from '@/sanity/queries'

export async function Testimonials() {
  // Only permission-granted quotes are queried. With none, the section removes
  // itself rather than leaving a hole or showing placeholders.
  const testimonials = await client.fetch(TESTIMONIALS_QUERY, {}, cms)
  if (testimonials.length === 0) return null

  return (
    <section className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <SectionHead
          chapter="05"
          label="Clients"
          title={<>What clients say.</>}
          intro="Published with permission and attributable. Ask and we'll put you in touch with any of them."
        />

        <ul className="mt-14 grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t._id} delay={i * 0.08} y={22}>
              <figure className="flex h-full flex-col justify-between gap-8 border-t border-rule pt-8">
                <blockquote className="font-display text-[22px] leading-[1.34] text-pretty lg:text-[25px]">
                  <span className="text-brass" aria-hidden="true">
                    &ldquo;
                  </span>
                  {t.quote}
                  <span className="text-brass" aria-hidden="true">
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="flex flex-col gap-1.5">
                  <span className="text-[15px] font-medium">{t.name}</span>
                  <span className="text-[14px] text-ink-muted">
                    {t.role}, {t.company}
                  </span>
                  <span className="mt-2 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
                    {t.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
