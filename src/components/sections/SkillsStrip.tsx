import { Reveal } from '@/components/motion/Reveal'
import { skillGroups } from '@/lib/content'

/**
 * The breadth strip under the hero: everything we build with, grouped by
 * area so it scans instead of reading as a keyword dump.
 */
export function SkillsStrip() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 lg:px-18 lg:py-14">
        <Reveal y={14}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="chapter-label">What we build with</p>
            <p className="text-[14px] text-ink-muted">
              From consulting to code to keeping it running.
            </p>
          </div>
        </Reveal>

        <dl className="mt-6 flex flex-col border-t border-rule">
          {skillGroups.map((group, i) => (
            <Reveal key={group.area} delay={Math.min(i, 4) * 0.05} y={12}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-rule py-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-5">
                <dt className="font-mono text-[11px] tracking-[0.12em] text-brass uppercase lg:pt-1.5">
                  {group.area}
                </dt>
                <dd className="flex flex-wrap gap-x-1.5 gap-y-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
