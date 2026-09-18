/**
 * Second root layout.
 *
 * This is the whole reason the app uses route groups: the Studio gets its own
 * <html>/<body> and, critically, does NOT import globals.css. Tailwind's
 * Preflight — especially `border-color: currentColor` and the base resets —
 * otherwise leaks into the Studio's own chrome and breaks its layout.
 *
 * Because of this there must be no `src/app/layout.tsx`. Multiple root layouts
 * only work when every top-level route group owns its own document.
 */
export const metadata = {
  title: 'Dev Chowk Studio',
  robots: { index: false, follow: false },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
  interactiveWidget: 'resizes-content' as const,
}

export default function StudioRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
