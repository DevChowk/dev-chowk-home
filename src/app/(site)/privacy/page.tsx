import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/layout/PageHeader'
import { Reveal } from '@/components/motion/Reveal'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What Dev Chowk collects when you contact us, why, where it goes, and how to have it deleted.',
}

const sections = [
  {
    n: '01',
    title: 'What we collect',
    body: 'Only what you type into the contact form: your name, email address, company if you give one, and your message. Nothing else. There are no analytics, no advertising pixels and no third-party trackers on this site.',
  },
  {
    n: '02',
    title: 'Why we collect it',
    body: 'To reply to you. That is the entire purpose. We do not add you to a mailing list, a newsletter or a follow-up sequence, and we will not contact you about anything other than the enquiry you sent.',
  },
  {
    n: '03',
    title: 'Where it goes',
    body: 'Your message is delivered by email through Resend, our email provider, and lands in our inbox. It is not stored in a database, a CRM or any marketing tool. Resend processes it only to deliver the message.',
  },
  {
    n: '04',
    title: 'Your IP address',
    body: 'To stop automated spam we count recent submissions per visitor. We never store your IP address. It is passed through a one-way hash, so the stored value cannot be turned back into an address, and it is held only in memory — it disappears when the server restarts.',
  },
  {
    n: '05',
    title: 'How long we keep it',
    body: 'Your message stays in our email inbox for as long as the conversation is useful, and no longer than [RETENTION PERIOD]. We do not archive enquiries anywhere else.',
  },
  {
    n: '06',
    title: 'Who else sees it',
    body: 'Nobody. We do not sell, rent or share your details with anyone, and we do not pass them to partners or advertisers. The only third party involved is Resend, which carries the email.',
  },
  {
    n: '07',
    title: 'Cookies',
    body: 'This site sets no cookies. Your theme and motion preferences are stored in your own browser using local storage, never sent to us, and cleared whenever you clear your browser data.',
  },
]

export default function PrivacyPage() {
  return (
    <div id="main">
      <PageHeader
        chapter="—"
        label="Privacy"
        title={<>What we collect, and what we do with it.</>}
        intro="Short, because there is not much to say: we collect what you send us, we use it to reply, and we keep it to ourselves."
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <ol className="flex flex-col border-t border-rule">
          {sections.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={Math.min(i, 4) * 0.05}
              y={18}
              className="rule-draw grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 lg:grid-cols-[56px_340px_minmax(0,1fr)]"
            >
              <span className="font-mono text-[13px] tracking-[0.1em] text-brass lg:pt-2">
                {s.n}
              </span>
              <h2 className="font-display text-[26px] leading-[1.14] font-normal">{s.title}</h2>
              <p className="text-[16px] leading-[1.68] text-ink-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal y={18}>
          <div className="mt-12 border-t border-brass bg-brass-soft p-6">
            <p className="mb-3 chapter-label">Getting your data removed</p>
            <p className="max-w-[62ch] text-[16px] leading-[1.68]">
              Email{' '}
              <a href={`mailto:${site.email}`} className="rule-draw">
                {site.email}
              </a>{' '}
              and ask. We will delete your message and confirm that we have. You do not need to give
              a reason, and there is no form to fill in.
            </p>
            <p className="mt-4 font-mono text-[12px] tracking-[0.08em] text-ink-muted">
              DEV CHOWK · [LEGAL ENTITY NAME] · LAST UPDATED [DATE]
            </p>
          </div>
        </Reveal>

        <Reveal y={16}>
          <div className="mt-10">
            <Link href="/contact" className="rule-draw text-[15px] font-medium">
              Back to contact
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
