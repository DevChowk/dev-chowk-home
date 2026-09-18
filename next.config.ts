import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // `images.domains` is deprecated in Next 16 — remotePatterns replaces it.
    // Sanity's CDN is the only remote source once the CMS lands in phase 3.
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  experimental: {
    // This app has multiple root layouts — (site) now, (studio) in phase 3 —
    // so there is no single layout for a `not-found.tsx` to compose against.
    // The docs point at global-not-found for exactly this case.
    globalNotFound: true,
  },
}

export default nextConfig
