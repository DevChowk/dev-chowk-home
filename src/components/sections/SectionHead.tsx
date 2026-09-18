import { Reveal } from '@/components/motion/Reveal'
import { ScrollLine } from '@/components/motion/ScrollLine'

/**
 * One header for the whole app — page headings (level 1) and section headings
 * (level 2) — so a sub-page header can't end up static while the homepage's
 * animates.
 *
 * The one place they differ is deliberate: a level-1 title is the page's
 * Largest Contentful Paint element, so it is never wrapped in a Reveal. Fading
 * the biggest text on the page in from opacity 0 is what delays LCP. A level-2
 * title is below the fold by definition and animates normally.
 */
export function SectionHead({
  chapter,
  label,
  title,
  intro,
  level = 2,
}: {
  chapter: string
  label: string
  title: React.ReactNode
  intro?: string
  level?: 1 | 2
}) {
  const Heading = level === 1 ? 'h1' : 'h2'
  const headingClass =
    'font-display max-w-[18ch] text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] font-normal tracking-[-0.02em] text-pretty'

  const heading = <Heading className={headingClass}>{title}</Heading>

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
      <div className="flex flex-col gap-6">
        <p className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-brass">{chapter}</span>
          <ScrollLine className="block h-px w-10 bg-brass" />
          <span className="chapter-label">{label}</span>
        </p>
        {level === 1 ? heading : <Reveal y={18}>{heading}</Reveal>}
      </div>
      {intro && (
        <Reveal y={18} delay={0.08}>
          <p className="max-w-[440px] text-[16px] leading-[1.68] text-ink-muted lg:pb-3">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
