import { defineArrayMember, defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons/Image'
import { LinkIcon } from '@sanity/icons/Link'

/**
 * Reusable field sets and objects.
 *
 * Note the import style: each icon comes from its own subpath. Root named
 * exports were removed in @sanity/icons v5 — they type-check clean and then
 * fail at bundle time.
 */

/** SEO is document-specific, never shared, so it is an object not a reference. */
export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Overrides the page title in search results and browser tabs.',
      validation: (rule) => rule.max(60).warning('Titles over 60 characters get truncated.'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning('Descriptions over 160 characters get truncated.'),
    }),
    defineField({ name: 'ogImage', title: 'Social share image', type: 'image' }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})

export const link = defineType({
  name: 'link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalPath',
      title: 'Path',
      type: 'string',
      description: 'For example /services',
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      title: 'URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    }),
  ],
  preview: { select: { title: 'label', subtitle: 'internalPath' } },
})

/** A number we are willing to publish. `verified` gates it into public queries. */
export const metric = defineType({
  name: 'metric',
  type: 'object',
  fields: [
    defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'source',
      type: 'string',
      description: 'Where this number comes from, so it can be checked later.',
    }),
    defineField({
      name: 'verified',
      title: 'Verified — safe to publish',
      type: 'boolean',
      initialValue: false,
      description: 'Unverified metrics are never queried into the public site.',
    }),
  ],
  preview: { select: { title: 'value', subtitle: 'label' } },
})

/** One numbered row: the pattern used by capabilities, situations, principles. */
export const numberedItem = defineType({
  name: 'numberedItem',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'body', type: 'text', rows: 4, validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'body' } },
})

export const richText = defineType({
  name: 'richText',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading', value: 'h2' },
        { title: 'Subheading', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                name: 'href',
                type: 'url',
                validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
              }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          description: 'Describe the image for screen readers.',
          validation: (rule) => rule.required(),
        }),
        defineField({ name: 'caption', type: 'string' }),
      ],
    }),
    defineArrayMember({
      name: 'codeBlock',
      type: 'object',
      title: 'Code',
      fields: [
        defineField({ name: 'language', type: 'string', initialValue: 'typescript' }),
        defineField({ name: 'filename', type: 'string' }),
        defineField({ name: 'code', type: 'text', rows: 12 }),
      ],
      preview: { select: { title: 'filename', subtitle: 'language' } },
    }),
  ],
})

export const sharedObjects = [seo, link, metric, numberedItem, richText]
