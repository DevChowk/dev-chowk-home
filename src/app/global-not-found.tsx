import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { Button } from '@/components/ui/Button'
import { RowLink } from '@/components/ui/RowLink'
import { fontVariables } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'This page does not exist.',
}

const elsewhere = [
  { label: 'Services', href: '/services', note: 'What we do' },
  { label: 'Writing', href: '/blog', note: 'Articles' },
  { label: 'Contact', href: '/contact', note: 'Book a call' },
]

/**
 * `global-not-found` bypasses the layout tree, so this file owns the whole
 * document: <html>, fonts, global styles and the theme provider. Without it
 * a 404 renders Next's unstyled default, outside the design system entirely.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body className="bg-paper text-ink antialiased">
        <ThemeProvider>
          <main className="flex min-h-screen flex-col justify-center px-6 py-20 lg:px-18">
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="flex max-w-[640px] flex-col gap-7">
                <p className="flex items-center gap-4">
                  <span className="font-mono text-xs tracking-[0.2em] text-brass">404</span>
                  <span className="h-px w-10 bg-brass" aria-hidden="true" />
                  <span className="chapter-label">Page not found</span>
                </p>

                <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] leading-[1.02] font-normal tracking-[-0.025em] text-pretty">
                  This page doesn&apos;t exist.
                </h1>

                <p className="text-[17px] leading-[1.62] text-ink-muted">
                  The address may have changed, or the page was never published.
                </p>

                <ul className="mt-2 flex flex-col border-t border-rule">
                  {elsewhere.map((item) => (
                    <li key={item.href}>
                      <RowLink href={item.href} label={item.label} note={item.note} />
                    </li>
                  ))}
                </ul>

                <Button href="/" className="mt-4">
                  Back to home
                </Button>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
