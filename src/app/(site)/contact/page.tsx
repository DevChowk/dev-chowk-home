import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { Reveal } from '@/components/motion/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell Dev Chowk what you are building, or book a 30-minute call.',
}

const next = [
  'A reply from a person, usually within two business days.',
  'A 30-minute call to establish fit and scope.',
  'A written summary of what we heard and what we’d propose — then a free two-week trial sprint to jump-start the work, if we both want to go further.',
]

export default function ContactPage() {
  return (
    <div id="main">
      <PageHeader
        chapter="07"
        label="Contact"
        title={<>Tell us what you&apos;re building.</>}
        intro="Bring a brief or a rough idea. You'll get a reply from a person, and by the end of the first call you'll know whether we're the right firm — and we can start with a free two-week trial."
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-24">
          <Reveal y={18}>
            <div id="enquiry">
              <ContactForm />
            </div>
          </Reveal>

          <aside className="flex flex-col gap-10">
            <Reveal y={16} delay={0.08}>
              <div className="flex flex-col gap-4">
                <p className="chapter-label">Prefer to talk?</p>
                <a
                  href={site.phone.href}
                  className="rule-draw w-fit font-display text-[22px] leading-tight"
                >
                  {site.phone.display}
                </a>
                <p className="text-[14px] leading-[1.6] text-ink-muted">
                  Or send the form and we&apos;ll set up a 30-minute call.
                </p>
              </div>
            </Reveal>

            <Reveal y={16} delay={0.14}>
              <dl className="flex flex-col border-t border-rule">
                <div className="flex flex-col gap-1 border-b border-rule py-5">
                  <dt className="chapter-label">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="rule-draw text-[16px]">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-rule py-5">
                  <dt className="chapter-label">Where</dt>
                  <dd className="flex flex-col gap-1">
                    <span className="text-[16px]">{site.location}</span>
                    <span className="text-[14px] text-ink-muted">{site.locationNote}</span>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal y={16} delay={0.2}>
              <div className="border-t border-brass bg-brass-soft p-6">
                <p className="mb-4 chapter-label">What happens next</p>
                <ol className="flex flex-col gap-3">
                  {next.map((step, i) => (
                    <li key={step} className="flex gap-4 text-[15px] leading-[1.6]">
                      <span className="font-mono text-[12px] tracking-[0.1em] text-brass">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  )
}
