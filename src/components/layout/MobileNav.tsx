'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { site } from '@/lib/site'

type NavLink = { label: string; href: string }

/**
 * The phone menu.
 *
 * Built on the native <dialog> with showModal(), which hands us focus
 * trapping, an inert background and Esc-to-close from the platform — all the
 * parts a hand-rolled drawer usually gets subtly wrong. Enter/exit is CSS
 * (`@starting-style` + `allow-discrete`), so no animation JS ships for it and
 * the reduced-motion block already neutralises it.
 */
export function MobileNav({ links }: { links: NavLink[] }) {
  const ref = useRef<HTMLDialogElement>(null)
  const pathname = usePathname()

  // Tapping a link navigates without unmounting the dialog, so close it here.
  useEffect(() => {
    ref.current?.close()
  }, [pathname])

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-label="Open menu"
        className="flex size-11 cursor-pointer items-center justify-center text-ink lg:hidden"
      >
        <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
          <rect width="22" height="1.5" y="0" fill="currentColor" />
          <rect width="14" height="1.5" y="6.25" fill="currentColor" />
          <rect width="18" height="1.5" y="12.5" fill="currentColor" />
        </svg>
      </button>

      <dialog ref={ref} className="nav-drawer" aria-label="Site menu">
        <div className="flex h-full flex-col">
          <div className="flex h-21 shrink-0 items-center justify-between border-b border-rule px-6">
            <span className="font-mono text-[13px] font-medium tracking-[0.16em] uppercase">
              Dev Chowk
            </span>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close menu"
              className="flex size-11 cursor-pointer items-center justify-center text-ink"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>

          <nav aria-label="Site" className="flex flex-1 flex-col justify-center px-6">
            <ul className="flex flex-col border-t border-rule">
              {links.map((link) => (
                <li key={link.href} className="border-b border-rule">
                  <Link
                    href={link.href}
                    className="block py-5 font-display text-[30px] leading-tight"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 flex-col gap-3 p-6">
            <Link
              href={site.booking.href}
              onClick={() => ref.current?.close()}
              className="flex items-center justify-center bg-ink py-4 text-[15px] font-medium text-paper"
            >
              {site.booking.label}
            </Link>
          </div>
        </div>
      </dialog>
    </>
  )
}
