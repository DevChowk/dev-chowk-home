import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { site } from '@/lib/site'

export function ClosingCta() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <Reveal y={22}>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-5">
              <p className="chapter-label">07 — Contact</p>
              <h2 className="max-w-[16ch] font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] font-normal tracking-[-0.02em] text-pretty">
                Start with a 30-minute call.
              </h2>
              <p className="max-w-[52ch] text-[16px] leading-[1.68] text-ink-muted">
                Bring a brief or a rough idea. By the end of the call you&apos;ll know whether
                we&apos;re the right firm and what the first step costs — usually nothing.
              </p>
            </div>
            <Button href={site.booking.href} arrow className="shrink-0">
              {site.booking.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
