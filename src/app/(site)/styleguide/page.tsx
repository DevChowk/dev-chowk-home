import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/Button'
import { RowLink } from '@/components/ui/RowLink'

export const metadata: Metadata = {
  title: 'Styleguide',
  description: 'Design tokens and components.',
  robots: { index: false, follow: false },
}

const tokens = [
  { name: 'paper', cls: 'bg-paper' },
  { name: 'paper-raised', cls: 'bg-paper-raised' },
  { name: 'ink', cls: 'bg-ink' },
  { name: 'ink-muted', cls: 'bg-ink-muted' },
  { name: 'rule', cls: 'bg-rule' },
  { name: 'brass', cls: 'bg-brass' },
  { name: 'brass-soft', cls: 'bg-brass-soft' },
  { name: 'indigo', cls: 'bg-indigo' },
  { name: 'terracotta', cls: 'bg-terracotta' },
]

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6 border-t border-rule py-10">
      <h2 className="chapter-label">{title}</h2>
      {children}
    </section>
  )
}

export default function StyleguidePage() {
  return (
    <div id="main">
      <PageHeader
        chapter="—"
        label="Styleguide"
        title={<>Ink &amp; Brass.</>}
        intro="Every token and control in one place. Flip the theme in the nav — nothing here declares a colour of its own, so both modes come from the same markup."
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <Block title="Colour tokens">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {tokens.map((t) => (
              <li key={t.name} className="flex flex-col gap-2">
                <span className={`block h-20 border border-rule ${t.cls}`} />
                <span className="font-mono text-[11px] tracking-[0.08em]">{t.name}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Type scale">
          <div className="flex flex-col gap-5">
            <p className="font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.98] tracking-[-0.025em]">
              Display — Instrument Serif
            </p>
            <p className="font-display text-[38px] italic">Display italic, 38px</p>
            <p className="text-[19px] leading-[1.62]">
              Body — Instrument Sans, 19px. The quick brown fox jumps over the lazy dog.
            </p>
            <p className="text-[16px] leading-[1.68] text-ink-muted">Body muted, 16px.</p>
            <p className="chapter-label">Chapter label — JetBrains Mono</p>
            <p className="font-devanagari text-[38px] text-brass">चौक — Tiro Devanagari Hindi</p>
          </div>
        </Block>

        <Block title="Buttons — hover to see the drop fill and the pointer light">
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/styleguide" arrow>
              Primary
            </Button>
            <Button href="/styleguide" variant="secondary">
              Secondary
            </Button>
            <Button href="/styleguide" size="sm">
              Primary small
            </Button>
            <Button href="/styleguide" size="sm" variant="secondary">
              Secondary small
            </Button>
          </div>
        </Block>

        <Block title="Row links — hover for the rule draw and arrow nudge">
          <ul className="flex flex-col border-t border-rule">
            <RowLink href="/styleguide" label="A row link" note="Note" />
            <RowLink href="/styleguide" label="Another one" note="Note" />
          </ul>
        </Block>
      </div>
    </div>
  )
}
