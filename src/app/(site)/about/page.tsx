import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { Reveal } from '@/components/motion/Reveal'
import { TrackRecord } from '@/components/sections/TrackRecord'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dev Chowk is a senior, fully remote technology partner built to be accountable for the systems a business depends on.',
}

const principles = [
  {
    n: '01',
    title: 'Straight answers on scope and effort',
    body: 'Including the parts that are slow, unglamorous, or that we think you shouldn’t build.',
  },
  {
    n: '02',
    title: 'Senior people do the work',
    body: 'The people on the first call are the people writing the code. No handover to a team you haven’t met.',
  },
  {
    n: '03',
    title: 'We respect your time',
    body: 'Short calls, written decisions, and a clear no when the answer is no.',
  },
  {
    n: '04',
    title: 'You own everything',
    body: 'Code, infrastructure, accounts and decisions — documented so any team can pick them up.',
  },
  {
    n: '05',
    title: 'Remote, without the trade-off',
    body: 'We work remotely because we respect our people’s time and the flexibility it gives them. It has never meant a looser standard — the conviction, the rigour and the delivery are the same. Only the commute is missing.',
  },
]

export default function AboutPage() {
  return (
    <div id="main">
      <PageHeader
        chapter="—"
        label="About"
        title={<>A senior technology partner, built to be accountable.</>}
        intro="Chowk is Hindi for a town's central square — the place where the roads meet. It's a fair description of the job."
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <Reveal y={20}>
          <div className="flex measure flex-col gap-6">
            <p className="text-[17px] leading-[1.78] lg:text-[18px]">
              We take on the systems a business depends on — strategy, architecture, engineering, AI
              and infrastructure — and stay accountable for how they run.
            </p>
            <p className="text-[17px] leading-[1.78] text-ink-muted">
              Dev Chowk started as freelance work. The clients we worked with were happy with what
              we shipped, so we built a studio around it — the same people and the same standard,
              able to own a product end to end instead of a feature at a time.
            </p>
            <p className="text-[17px] leading-[1.78] text-ink-muted">
              The team is small on purpose, and every person in it is a specialist in their own
              domain. The people you meet on the first call are the people who build the product and
              shape the vision behind it.
            </p>
            <p className="text-[17px] leading-[1.78] lg:text-[18px]">
              We have no ambition to be the largest firm you could hire. We would rather be the one
              you hire again.
            </p>
          </div>
        </Reveal>

        <div className="mt-16">
          <TrackRecord />
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <Reveal y={14}>
            <p className="chapter-label">How we operate</p>
          </Reveal>
          <ul className="flex flex-col border-t border-rule">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.n}
                delay={i * 0.08}
                y={20}
                className="rule-draw grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 lg:grid-cols-[56px_360px_minmax(0,1fr)]"
              >
                <span className="font-mono text-[13px] tracking-[0.1em] text-brass lg:pt-2">
                  {p.n}
                </span>
                <h2 className="font-display text-[26px] leading-[1.14] font-normal">{p.title}</h2>
                <p className="text-[16px] leading-[1.62] text-ink-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
