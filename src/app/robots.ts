import type { MetadataRoute } from 'next'

const base = process.env.NEXT_SITE_URL ?? 'http://localhost:3000'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The Studio lands here in phase 3; keep it out of the index from day one.
      disallow: ['/studio', '/api/', '/styleguide'],
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
