'use client'

import { useTheme } from 'next-themes'

/**
 * No mount guard and no client state: the server can't know the viewer's
 * theme, so instead of branching in JS we render both icons and let the
 * `dark:` variant decide which one paints. That removes the hydration
 * mismatch and the icon flash in one move.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle light and dark theme"
      className="flex size-11 cursor-pointer items-center justify-center text-ink-muted transition-colors hover:text-ink"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="dark:hidden"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="4" />
        <path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.6 3.6l1.4 1.4M15 15l1.4 1.4M16.4 3.6L15 5M5 15l-1.4 1.4" />
      </svg>
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="hidden dark:block"
        aria-hidden="true"
      >
        <path d="M16 11.5A7 7 0 0 1 8.5 4a7 7 0 1 0 7.5 7.5Z" />
      </svg>
    </button>
  )
}
