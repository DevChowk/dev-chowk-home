import { Reveal } from '@/components/motion/Reveal'
import { aiOffers, aiTags } from '@/lib/content'

/** The AI capability, expanded into the six things we actually build. */
export function AiEngineering() {
  return (
    <section id="ai" className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="chapter-label">AI engineering — what we actually build</p>
            <Reveal y={18}>
              <h2 className="max-w-[18ch] font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] font-normal tracking-[-0.02em] text-pretty">
                AI that ships as a product feature, not a demo.
              </h2>
            </Reveal>
          </div>
          <Reveal y={18} delay={0.08}>
            <p className="max-w-[440px] text-[16px] leading-[1.68] text-ink-muted lg:pb-3">
              Grounded in your data, scoped by your permissions, and evaluated, monitored and
              maintained like any other production system.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-x-12 border-t border-rule md:grid-cols-2">
          {aiOffers.map((o, i) => (
            <Reveal as="li" key={o.n} delay={Math.min(i, 3) * 0.06} y={18}>
              <div className="flex h-full flex-col gap-3 border-b border-rule py-8">
                <span className="font-mono text-[13px] tracking-[0.1em] text-brass">{o.n}</span>
                <h3 className="font-display text-[26px] leading-[1.14] font-normal">{o.title}</h3>
                <p className="text-[16px] leading-[1.68] text-ink-muted">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal y={10} delay={0.15}>
          <ul className="mt-8 flex flex-wrap gap-2">
            {aiTags.map((t) => (
              <li
                key={t}
                className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-ink-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
