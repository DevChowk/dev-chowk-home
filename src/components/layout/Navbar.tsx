import Link from 'next/link'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { MobileNav } from '@/components/layout/MobileNav'
import { site } from '@/lib/site'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/blog' },
  // People scan a menu for the word "Contact"; the CTA button alone is not
  // enough of a signal that there is a way to reach us.
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  return (
    <header className="relative z-20 border-b border-rule">
      <nav
        aria-label="Main"
        className="mx-auto flex h-21 max-w-[1440px] items-center justify-between gap-6 px-6 lg:h-25 lg:px-18"
      >
        <Link href="/" className="flex h-11 items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="shrink-0 text-brass"
            aria-hidden="true"
          >
            <path d="M10 1 L19 10 L10 19 L1 10 Z" />
            <path d="M10 6 L14 10 L10 14 L6 10 Z" />
          </svg>
          <span className="font-mono text-[13px] font-medium tracking-[0.16em] uppercase">
            Dev Chowk
          </span>
        </Link>

        <ul className="hidden items-center gap-9 text-[15px] text-ink-muted lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 lg:gap-5">
          <ThemeToggle />

          <Button href={site.booking.href} size="sm" className="hidden sm:inline-flex">
            Book a call
          </Button>

          <MobileNav links={navLinks} />
        </div>
      </nav>
    </header>
  )
}
