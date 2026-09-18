import Link from 'next/link'

/**
 * The list-row link: a large label, a quiet note, and an arrow that steps
 * forward while a brass hairline draws itself underneath.
 *
 * Shared so that every row list in the app — the chowk stalls, the 404's way
 * out — gets identical feedback, instead of each one declaring `group` and
 * then forgetting to use it.
 */
export function RowLink({
  href,
  label,
  note,
}: {
  href: string
  label: React.ReactNode
  note: string
}) {
  return (
    <Link
      href={href}
      className="group rule-draw flex items-center justify-between gap-6 border-b border-rule py-6"
    >
      <span className="font-display text-[26px] leading-tight lg:text-[30px]">{label}</span>
      <span className="flex shrink-0 items-center gap-5 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
        {note}
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          className="arrow-nudge text-brass"
          aria-hidden="true"
        >
          <path d="M3 13L13 3M6 3h7v7" />
        </svg>
      </span>
    </Link>
  )
}
