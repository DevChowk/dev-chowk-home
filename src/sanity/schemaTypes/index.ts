import type { SchemaTypeDefinition } from 'sanity'
import { sharedObjects } from './objects/shared'
import { marketingDocuments } from './documents/marketing'
import { blogDocuments } from './documents/blog'

/**
 * Only types listed here are part of the Studio schema. Creating the file is
 * not enough — a type missing from this array is invisible to the Studio and
 * to schema deployment.
 */
export const schemaTypes: SchemaTypeDefinition[] = [
  ...sharedObjects,
  ...marketingDocuments,
  ...blogDocuments,
]
