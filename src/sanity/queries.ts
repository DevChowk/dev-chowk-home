import { defineQuery } from 'next-sanity'

/**
 * Every query is a named `defineQuery` const so TypeGen can generate its
 * result type. Names must be globally unique — TypeGen silently overwrites
 * duplicates — and inline `groq` strings produce no types at all.
 *
 * The publishing gates live here, in the query, not in component logic:
 * a testimonial without permission, or client work the client has not
 * approved, cannot reach the site even if someone creates the document.
 */

export const SITUATIONS_QUERY = defineQuery(
  `*[_type == "situation"] | order(order asc){ _id, title, body }`
)

export const CAPABILITIES_QUERY = defineQuery(
  `*[_type == "service"] | order(order asc){ _id, title, body, tags }`
)

export const ENGAGEMENT_QUERY = defineQuery(`{
  "steps": *[_type == "engagementStep"] | order(order asc){ _id, title, meta, body }
}`)

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && (kind != "client" || clientApproved == true)] | order(order asc){
    _id, name, url, href, tagline, body, detail, kind, clientName, clientRole,
    scope[]{ _key, label, value },
    tags
  }
`)

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial" && permissionGranted == true] | order(order asc){
    _id, quote, name, role, company, source
  }
`)

export const FAQS_QUERY = defineQuery(
  `*[_type == "faq"] | order(order asc){ _id, question, answer }`
)

export const TRACK_RECORD_QUERY = defineQuery(
  `*[_type == "trackRecordItem"] | order(order asc){ _id, title, body }`
)
