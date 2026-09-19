/**
 * The site's own origin — canonical URLs, sitemap, robots, OG images.
 *
 * Reading the variable inline used to be one line, until a dashboard typo
 * ("asd") failed a deploy with a bare ERR_INVALID_URL and no mention of which
 * variable held it. This names the variable and the value, accepts a host
 * typed without a scheme, and falls back to the deployment's own URL so a
 * missing variable still produces a working, correctly-linked site.
 */
function resolveSiteUrl(): string {
  const configured = process.env.NEXT_SITE_URL?.trim()
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  const raw = configured || (vercel ? `https://${vercel}` : '') || 'http://localhost:3000'
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`

  const invalid = (why: string) =>
    new Error(
      `NEXT_SITE_URL is ${why}: ${JSON.stringify(raw)}. ` +
        `Set it to the site's address, for example https://devchowk.com`
    )

  let url: URL
  try {
    url = new URL(withScheme)
  } catch {
    throw invalid('not a valid URL')
  }
  // Catches a placeholder that happens to parse once a scheme is bolted on.
  if (url.hostname !== 'localhost' && !url.hostname.includes('.')) {
    throw invalid('not a real hostname')
  }
  return url.origin
}

export const siteUrl = resolveSiteUrl()
