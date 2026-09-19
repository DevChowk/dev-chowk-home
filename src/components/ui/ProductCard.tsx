import type { PRODUCTS_QUERY_RESULT } from '@/sanity.types'

type Product = PRODUCTS_QUERY_RESULT[number]

/**
 * One product, as shown on `/work` and in the homepage teaser.
 *
 * `headingLevel` exists because the same card sits at two depths: under the
 * teaser's own h2 on the homepage, and directly under the page h1 on /work,
 * where an h3 would skip a level and break the document outline.
 */
export function ProductCard({
  product: p,
  headingLevel = 3,
}: {
  product: Product
  headingLevel?: 2 | 3
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const label =
    p.kind === 'client' && p.clientName
      ? `Client · ${p.clientName}${p.clientRole ? `, ${p.clientRole}` : ''}`
      : 'Our product'

  return (
    <article className="grid grid-cols-1 gap-x-14 gap-y-5 border-b border-rule py-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:py-14">
      <div className="flex flex-col gap-3">
        <span className="w-fit border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] text-ink-muted uppercase">
          {label}
        </span>
        <Heading className="font-display text-[32px] leading-[1.08] font-normal tracking-[-0.01em] lg:text-[38px]">
          {p.name}
        </Heading>
        {p.href && p.url && (
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex w-fit items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-brass uppercase"
          >
            {p.url}
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              className="arrow-nudge"
              aria-hidden="true"
            >
              <path d="M3 13L13 3M6 3h7v7" />
            </svg>
          </a>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {p.tagline && (
          <p className="font-display text-[22px] leading-[1.3] italic lg:text-[24px]">
            {p.tagline}
          </p>
        )}
        <p className="text-[16px] leading-[1.68] text-ink-muted">{p.body}</p>
        {p.detail && <p className="text-[16px] leading-[1.68] text-ink-muted">{p.detail}</p>}
        {p.scope && p.scope.length > 0 && (
          <dl className="mt-1 grid grid-cols-1 gap-x-8 gap-y-2 border-t border-rule pt-4 sm:grid-cols-2">
            {p.scope.map((row) => (
              <div key={row._key} className="flex gap-3 text-[14px]">
                <dt className="w-24 shrink-0 font-mono text-[11px] tracking-[0.1em] text-ink-muted uppercase">
                  {row.label}
                </dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {p.tags && p.tags.length > 0 && (
          <ul className="mt-1 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li
                key={t}
                className="border border-rule px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-ink-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
