import { Button } from '@/components/ui/Button'
import { Jaali } from '@/components/ornament/Jaali'
import { LampFollow } from '@/components/motion/LampFollow'
import { Reveal } from '@/components/motion/Reveal'
import { SkillsStrip } from '@/components/sections/SkillsStrip'
import { WhenToCallUs } from '@/components/sections/WhenToCallUs'
import { Capabilities } from '@/components/sections/Capabilities'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { WorkTeaser } from '@/components/sections/WorkTeaser'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { site } from '@/lib/site'

const disciplines = ['Consulting', 'Engineering', 'AI', 'Cloud', 'Operations']

export default function HomePage() {
  return (
    <>
      <section className="relative flex hero-full flex-col overflow-hidden">
        {/* dim lattice at rest */}
        <Jaali
          id="hero"
          className="pointer-events-none absolute -top-16 -right-40 hidden text-brass select-none md:block"
        />

        {/*
          The lit copy is server-rendered and passed as children, so the SVG
          never enters the client bundle — only the pointer wrapper does.
        */}
        <LampFollow>
          <Jaali
            id="hero-lit"
            opacity={0.95}
            className="absolute -top-16 -right-40 text-brass select-none"
          />
        </LampFollow>

        <div id="main" className="relative z-10 flex min-h-0 flex-1 items-center">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-12 lg:px-18 lg:py-16">
            <div className="flex max-w-[900px] flex-col gap-7 lg:gap-8">
              <p className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-brass">00</span>
                <span className="h-px w-10 bg-brass" aria-hidden="true" />
                <span className="chapter-label">End-to-end technology partner</span>
              </p>

              {/*
                Deliberately not wrapped in a Reveal: fading the h1 in from
                opacity 0 is exactly what delays LCP. It paints immediately.
              */}
              <h1 className="font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.98] font-normal tracking-[-0.025em] text-pretty">
                We build the business,
                <br className="hidden sm:block" /> <em className="italic">not just</em> the
                software.
              </h1>

              <Reveal y={16} delay={0.1}>
                <p className="max-w-[640px] text-[17px] leading-[1.62] text-ink-muted lg:text-[19px]">
                  Dev Chowk is an end-to-end technology partner. Strategy, architecture, design,
                  engineering, AI and infrastructure — and the years of running it afterwards. One
                  senior team, accountable for the outcome.
                </p>
              </Reveal>

              <Reveal y={16} delay={0.18}>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
                  <Button href={site.booking.href} arrow>
                    {site.booking.label}
                  </Button>
                  <Button href="#how-we-work" variant="secondary">
                    How we work
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-rule font-mono text-xs tracking-[0.1em] text-ink-muted">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:px-18">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 uppercase">
              {disciplines.map((d, i) => (
                <li key={d} className="flex items-center gap-5">
                  {i > 0 && (
                    <span className="text-rule" aria-hidden="true">
                      /
                    </span>
                  )}
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SkillsStrip />
      <WhenToCallUs />
      <Capabilities />
      <HowWeWork />
      <WorkTeaser />
      <Testimonials />
      <Faq />
      <ClosingCta />
    </>
  )
}
