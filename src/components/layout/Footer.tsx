import Link from 'next/link'
import { site } from '@/lib/site'
import { MotionToggle } from '@/components/motion/MotionToggle'

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Writing', href: '/blog' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: site.booking.label, href: site.booking.href },
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone.display, href: site.phone.href },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 lg:px-18 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
          <div className="flex max-w-[400px] flex-col gap-4">
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="text-brass"
                aria-hidden="true"
              >
                <path d="M10 1 L19 10 L10 19 L1 10 Z" />
                <path d="M10 6 L14 10 L10 14 L6 10 Z" />
              </svg>
              <span className="font-mono text-[13px] font-medium tracking-[0.16em] uppercase">
                Dev Chowk
              </span>
            </div>
            <p className="text-[15px] leading-[1.62] text-ink-muted">{site.tagline}</p>
          </div>

          <div className="flex gap-16 sm:gap-24">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-4">
                <h2 className="chapter-label">{col.heading}</h2>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 font-mono text-xs tracking-[0.1em] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DEV CHOWK</p>
          <div className="flex items-center gap-5">
            <p>{site.locationNote}</p>
            <MotionToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
