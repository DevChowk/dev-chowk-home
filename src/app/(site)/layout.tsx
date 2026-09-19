import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { PointerGlow } from '@/components/motion/PointerGlow'
import { fontVariables } from '@/lib/fonts'
import '@/styles/globals.css'

const siteUrl = process.env.NEXT_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dev Chowk — End-to-end technology partner',
    template: '%s · Dev Chowk',
  },
  description:
    'Dev Chowk is an end-to-end technology partner: strategy, architecture, product engineering, AI and cloud infrastructure, delivered and run by one accountable senior team.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Dev Chowk',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // Next 16 stopped forcing scroll-behavior:auto during navigation; without
      // this attribute every route change would smooth-scroll to the top.
      data-scroll-behavior="smooth"
      // next-themes writes `class` on <html> before paint, which the server
      // cannot predict.
      suppressHydrationWarning
      className={fontVariables}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <script
          // Applied before paint so a reduced-motion visitor never sees the
          // first animation fire before the preference loads.
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('motion')==='reduced')document.documentElement.dataset.motion='reduced'}catch(e){}",
          }}
        />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only bg-ink text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <MotionProvider>
            <PointerGlow />
            <Navbar />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
