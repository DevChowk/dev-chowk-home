'use client'

// The 'use client' directive above is required. Without it the embedded Studio
// renders a blank page with a hydration error.

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/env'
import { schemaTypes } from '@/sanity/schemaTypes'
import { structure } from '@/sanity/structure'

export default defineConfig({
  name: 'dev-chowk',
  title: 'Dev Chowk',
  basePath: studioUrl,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  document: {
    // Singletons must not be duplicated or deleted from the Studio UI.
    actions: (prev, { schemaType }) =>
      schemaType === 'siteSettings'
        ? prev.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
        : prev,
  },
})
