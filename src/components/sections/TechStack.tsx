import { Reveal } from '@/components/motion/Reveal'
import { stack } from '@/lib/content'

/**
 * Two tiers, one grid: `core` is shipped in production (bold); `extended` is
 * adjacent, in-demand technology the team builds with. The visual difference
 * is deliberate — it keeps the list honest without making it look hedged.
 */
export function TechStack() {
  return (
    <section id="stack" className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="chapter-label">Technology</p>
            <Reveal y={18}>
              <h2 className="max-w-[18ch] font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] font-normal tracking-[-0.02em] text-pretty">
                The stack we build and run.
              </h2>
            </Reveal>
          </div>
          <Reveal y={18} delay={0.08}>
            <p className="max-w-[440px] text-[16px] leading-[1.68] text-ink-muted lg:pb-3">
              Chosen for what the market is hiring for and what survives in production — not for
              novelty.
            </p>
          </Reveal>
        </div>

        <dl className="mt-14 flex flex-col border-t border-rule">
          {stack.map((row, i) => (
            <Reveal key={row.area} delay={Math.min(i, 4) * 0.05} y={14}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-rule py-6 lg:grid-cols-[260px_minmax(0,1fr)]">
                <dt className="chapter-label lg:pt-1">{row.area}</dt>
                <dd className="flex flex-wrap gap-x-2 gap-y-2">
                  {row.core.map((t) => (
                    <span
                      key={t}
                      className="border border-ink px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-ink"
                    >
                      {t}
                    </span>
                  ))}
                  {row.extended.map((t) => (
                    <span
                      key={t}
                      className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className="mt-6 font-mono text-[11px] tracking-[0.1em] text-ink-muted uppercase">
          <span className="mr-2 inline-block border border-ink px-1.5 py-px text-ink">Ink</span>
          shipped in production ·
          <span className="mx-2 inline-block border border-rule px-1.5 py-px">Rule</span>
          technologies we build with
        </p>
      </div>
    </section>
  )
}
