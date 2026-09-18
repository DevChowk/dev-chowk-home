/**
 * Seeds Sanity from src/lib/content.ts and src/lib/site.ts, so the Studio
 * starts with exactly what is on the site today.
 *
 *   node --experimental-strip-types --env-file=.env.local scripts/seed.mts
 *
 * Idempotent: a type that already has documents is skipped, so re-running
 * never duplicates. Sanity assigns every _id except the siteSettings
 * singleton, which Structure locks to a fixed id.
 *
 * Testimonials are deliberately NOT seeded. The ones in content.ts are
 * [BRACKETED] placeholders, and a real CMS would publish them. The section
 * hides itself until a real, permission-granted quote exists.
 */
import { createClient } from '@sanity/client'
import {
  capabilities,
  engagement,
  faqs,
  products,
  situations,
  trackRecord,
} from '../src/lib/content.ts'
import { site } from '../src/lib/site.ts'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-09-18',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const key = () => Math.random().toString(36).slice(2, 10)

async function seedType<T>(type: string, rows: T[], toDoc: (row: T, i: number) => object) {
  const existing = await client.fetch<number>(`count(*[_type == $type])`, { type })
  if (existing > 0) {
    console.log(`  – ${type.padEnd(16)} skipped (${existing} already exist)`)
    return
  }
  const tx = client.transaction()
  rows.forEach((row, i) => tx.create({ _type: type, ...toDoc(row, i) }))
  await tx.commit()
  console.log(`  ✔ ${type.padEnd(16)} ${rows.length} created`)
}

console.log(`Seeding ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}\n`)

// Singleton — the one place an explicit id is correct.
await client.createIfNotExists({
  _id: 'siteSettings',
  _type: 'siteSettings',
  name: site.name,
  tagline: site.tagline,
  email: site.email,
  phoneDisplay: site.phone.display,
  phoneHref: site.phone.href,
  location: site.location,
  locationNote: site.locationNote,
  bookingLabel: site.booking.label,
  bookingHref: site.booking.href,
})
console.log(`  ✔ ${'siteSettings'.padEnd(16)} ensured`)

await seedType('service', capabilities, (c, i) => ({
  title: c.title,
  slug: { _type: 'slug', current: slugify(c.title) },
  body: c.body,
  tags: c.tags,
  order: i + 1,
}))

await seedType('situation', situations, (s, i) => ({ title: s.title, body: s.body, order: i + 1 }))

await seedType('engagementStep', engagement.steps, (s, i) => ({
  title: s.title,
  meta: s.meta,
  body: s.body,
  order: i + 1,
}))

await seedType('faq', faqs, (f, i) => ({ question: f.q, answer: f.a, order: i + 1 }))

await seedType('trackRecordItem', trackRecord, (t, i) => ({
  title: t.title,
  body: t.body,
  order: i + 1,
}))

await seedType('product', products, (p, i) => ({
  name: p.name,
  url: p.url,
  href: p.href,
  tagline: p.tagline,
  body: p.body,
  detail: p.detail,
  kind: p.kind,
  clientName: p.client?.name,
  clientRole: p.client?.role,
  // Vinayak Sharma is already named on the live site with your go-ahead.
  clientApproved: p.kind === 'client' ? true : undefined,
  scope: p.scope?.map((s) => ({ _key: key(), label: s.label, value: s.value })),
  tags: p.tags,
  order: i + 1,
}))

console.log('\n  – testimonial      skipped on purpose (placeholders only — add real ones in /studio)')
console.log('\nDone.')
