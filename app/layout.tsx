import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dev Chowk | IT Services & Consultancy | Custom Software Development',
  description:
    'Dev Chowk is a premium IT consultancy offering custom software development, web development, mobile apps, SaaS, UI/UX design, cloud & DevOps, and AI solutions for startups and enterprises.',
  keywords:
    'IT consulting services, custom software development company, best web development agency, mobile app development, SaaS development, cloud solutions, AI development India',
  authors: [{ name: 'Dev Chowk' }],
  creator: 'Dev Chowk',
  openGraph: {
    title: 'Dev Chowk | IT Services & Consultancy',
    description:
      'Building Digital Solutions That Scale. Premium IT consulting and development for startups & enterprises.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dev Chowk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Chowk | IT Services & Consultancy',
    description: 'Building Digital Solutions That Scale.',
    creator: '@devchowk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dev Chowk',
  url: 'https://devchowk.com',
  logo: 'https://devchowk.com/logo.png',
  description:
    'Premium IT consultancy and custom software development company specializing in web, mobile, SaaS, cloud, and AI solutions.',
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@devchowk.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://linkedin.com/company/devchowk',
    'https://twitter.com/devchowk',
    'https://github.com/devchowk',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud & DevOps' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Solutions' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-[#09090b] text-white antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
