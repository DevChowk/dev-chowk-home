import Link from 'next/link'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md'

const base =
  'btn-drop btn-glow group inline-flex items-center justify-center gap-2.5 font-medium transition-colors duration-300'

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-4 text-[15px]',
}

/**
 * The single source of truth for a call to action.
 *
 * Every CTA in the app routes through here — the nav, the empty states and the
 * 404 included — so the drop fill cannot drift into a one-off `hover:opacity`
 * somewhere. On hover a panel slides down from above and the label inverts
 * under it: primary drops to brass, secondary drops to ink.
 *
 * Plain CSS transitions, so this stays a server component and ships no JS.
 */
const variants: Record<Variant, string> = {
  primary: 'glow-light bg-ink text-paper before:bg-brass hover:text-ink focus-visible:text-ink',
  secondary:
    'glow-brass border-ink text-ink border before:bg-ink hover:text-paper focus-visible:text-paper',
}

const Arrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
    className="transition-transform duration-350 ease-out group-hover:translate-x-1"
  >
    <path d="M2 8h11M9 4l4 4-4 4" />
  </svg>
)

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  arrow?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      data-glow
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <Arrow />}
    </Link>
  )
}
