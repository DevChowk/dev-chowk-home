import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, studioUrl } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Stega embeds invisible source markers for click-to-edit. Metadata and any
  // string that drives logic must be fetched with `stega: false`.
  stega: { studioUrl },
})
