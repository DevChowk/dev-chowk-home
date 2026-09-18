import { defineCliConfig } from 'sanity/cli'

/**
 * TypeGen note: `typegen.enabled` only runs during `sanity dev` / `sanity build`,
 * which an embedded Studio never invokes. The generation is therefore wired to
 * npm lifecycle scripts (`predev` / `prebuild`) instead.
 */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  typegen: {
    path: './src/**/*.{ts,tsx}',
    schema: './schema.json',
    generates: './src/sanity.types.ts',
    overloadClientMethods: true,
  },
})
