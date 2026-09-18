import 'server-only'

/**
 * Cache policy for CMS reads.
 *
 * Pages are statically generated and revalidated at most once a minute, so an
 * edit published in /studio appears on the live site within ~60 seconds with
 * no redeploy. A webhook → `revalidateTag` (or `defineLive`) can make that
 * instant later; this is the simplest thing that is correct today.
 *
 * `stega: false` because visual editing is not set up yet — without it, the
 * client may embed invisible source markers in strings, which leak into
 * `<title>` and break any string comparison.
 */
export const cms = { next: { revalidate: 60 }, stega: false } as const

/** Zero-padded row number from a list index: 0 -> "01". */
export const nth = (i: number) => String(i + 1).padStart(2, '0')
