import { defineCliConfig } from 'sanity/cli'
import { dataset, projectId } from './src/sanity/env'

/**
 * TypeGen note: `typegen.enabled` only runs during `sanity dev` / `sanity build`,
 * which an embedded Studio never invokes. The generation is therefore wired to
 * npm lifecycle scripts (`predev` / `prebuild`) instead.
 */
export default defineCliConfig({
  api: { projectId, dataset },
  typegen: {
    path: './src/**/*.{ts,tsx}',
    schema: './schema.json',
    generates: './src/sanity.types.ts',
    overloadClientMethods: true,
  },
})
