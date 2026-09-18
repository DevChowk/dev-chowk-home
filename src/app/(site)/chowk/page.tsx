import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { Reveal } from '@/components/motion/Reveal'
import { RowLink } from '@/components/ui/RowLink'

export const metadata: Metadata = {
  title: 'Interactive',
  description: 'An interactive version of this site is in development.',
  robots: { index: false, follow: true },
}

/**
 * The accessible list is a permanent part of the interactive version, not a
 * placeholder for it: when the canvas ships it mounts alongside this list, so
 * screen readers, crawlers and reduced-motion visitors always have a route to
 * every page.
 */
const pages = [
  { href: '/services', label: 'Services', note: 'What we do' },
  { href: '/work', label: 'Work', note: 'Products we operate' },
  { href: '/about', label: 'About', note: 'Who we are' },
  { href: '/blog', label: 'Writing', note: 'Articles' },
  { href: '/contact', label: 'Contact', note: 'Book a call' },
]

export default function ChowkPage() {
  return (
    <div id="main">
      <PageHeader
        chapter="—"
        label="Interactive"
        title={<>An interactive version of this site is in development.</>}
        intro="Every page it links to is available below."
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <ul className="flex flex-col border-t border-rule">
          {pages.map((p, i) => (
            <Reveal as="li" key={p.href} delay={i * 0.06} y={18}>
              <RowLink href={p.href} label={p.label} note={p.note} />
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  )
}
