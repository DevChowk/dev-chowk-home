import type { MetadataRoute } from 'next'

const base = process.env.NEXT_SITE_URL ?? 'http://localhost:3000'

/**
 * Static routes for now. Phase 4 appends the CMS-driven ones (blog posts,
 * case studies) by querying Sanity here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/work', priority: 0.9 },
    { path: '/blog', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    // /chowk is noindex until the game ships, and a noindex page in the
    // sitemap asks search engines to index what the page then forbids.
    { path: '/privacy', priority: 0.3 },
  ]

  const lastModified = new Date()

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
