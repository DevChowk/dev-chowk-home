import { Button } from '@/components/ui/Button'

/**
 * The honest empty state. The old site filled these sections with invented
 * case studies and testimonials; this says plainly that there is nothing
 * here yet. Phase 4 replaces these with Sanity content, and the sections
 * hide themselves entirely on the home page when the dataset is empty.
 */
export function EmptyState({
  title,
  body,
  cta,
}: {
  title: string
  body: string
  cta?: { label: string; href: string }
}) {
  return (
    <div className="flex flex-col items-start gap-5 border-t border-b border-rule py-16 lg:py-20">
      <p className="chapter-label">In progress</p>
      <h2 className="max-w-[20ch] font-display text-[28px] leading-[1.14] font-normal lg:text-[34px]">
        {title}
      </h2>
      <p className="max-w-[52ch] text-[16px] leading-[1.68] text-ink-muted">{body}</p>
      {cta && (
        <Button href={cta.href} variant="secondary" className="mt-2">
          {cta.label}
        </Button>
      )}
    </div>
  )
}
