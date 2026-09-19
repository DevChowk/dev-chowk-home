import { defineArrayMember, defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons/Cog'
import { DocumentIcon } from '@sanity/icons/Document'
import { HelpCircleIcon } from '@sanity/icons/HelpCircle'
import { RocketIcon } from '@sanity/icons/Rocket'
import { StackCompactIcon } from '@sanity/icons/StackCompact'
import { CaseIcon } from '@sanity/icons/Case'
import { UsersIcon } from '@sanity/icons/Users'
import { BulbOutlineIcon } from '@sanity/icons/BulbOutline'

/** Singleton — enforced by Structure with a fixed document id, not by schema. */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'brand', title: 'Brand' },
    { name: 'contact', title: 'Contact' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'name', type: 'string', group: 'brand', initialValue: 'Dev Chowk' }),
    defineField({ name: 'tagline', type: 'text', rows: 2, group: 'brand' }),
    defineField({
      name: 'email',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Phone (displayed)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phoneHref',
      title: 'Phone (tel: link)',
      type: 'string',
      group: 'contact',
    }),
    defineField({ name: 'location', type: 'string', group: 'contact' }),
    defineField({ name: 'locationNote', type: 'text', rows: 2, group: 'contact' }),
    defineField({
      name: 'bookingLabel',
      title: 'Booking button label',
      type: 'string',
      group: 'contact',
      initialValue: 'Book a 30-minute call',
    }),
    defineField({
      name: 'bookingHref',
      title: 'Booking link',
      type: 'string',
      group: 'contact',
      description:
        'Where “Book a call” leads — /contact#enquiry (the contact form) or a Cal.com / Calendly URL.',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      group: 'contact',
      of: [defineArrayMember({ type: 'link' })],
    }),
    defineField({ name: 'defaultSeo', title: 'Default SEO', type: 'seo', group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
})

export const service = defineType({
  name: 'service',
  title: 'Capability',
  type: 'document',
  icon: StackCompactIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'body', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Lower numbers appear first.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  orderings: [
    { title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'body' } },
})

export const situation = defineType({
  name: 'situation',
  title: 'When to call us',
  type: 'document',
  icon: BulbOutlineIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'body', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'order', type: 'number', validation: (rule) => rule.required() }),
  ],
  orderings: [
    { title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'body' } },
})

export const engagementStep = defineType({
  name: 'engagementStep',
  title: 'How we work — step',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'meta',
      title: 'Duration',
      type: 'string',
      description: 'For example "30 minutes · free".',
    }),
    defineField({ name: 'body', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'order', type: 'number', validation: (rule) => rule.required() }),
  ],
  orderings: [
    { title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'meta' } },
})

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: 'question', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'answer', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'order', type: 'number', validation: (rule) => rule.required() }),
  ],
  orderings: [
    { title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'question', subtitle: 'answer' } },
})

/**
 * Testimonials carry two required gates. The previous site shipped five
 * invented quotes, one attributed to a real company — these fields are the
 * structural fix for that, not decoration.
 */
export const testimonial = defineType({
  name: 'testimonial',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'name',
      title: 'Client name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'company', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'source',
      type: 'string',
      description: 'Where the quote came from — email, LinkedIn, a call — so it can be checked.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'sourceUrl', type: 'url' }),
    defineField({
      name: 'permissionGranted',
      title: 'Client has given permission to publish',
      type: 'boolean',
      initialValue: false,
      description: 'Public queries only return testimonials with this ticked.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'order', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'company' } },
})

export const product = defineType({
  name: 'product',
  title: 'Work',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'url', title: 'Display URL', type: 'string' }),
    defineField({ name: 'href', title: 'Link', type: 'url' }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'body', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'detail', type: 'text', rows: 4 }),
    defineField({
      name: 'kind',
      type: 'string',
      options: {
        list: [
          { title: 'Our own product', value: 'own' },
          { title: 'Client work', value: 'client' },
        ],
        layout: 'radio',
      },
      initialValue: 'own',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientName',
      type: 'string',
      hidden: ({ parent }) => parent?.kind !== 'client',
    }),
    defineField({
      name: 'clientRole',
      type: 'string',
      hidden: ({ parent }) => parent?.kind !== 'client',
    }),
    defineField({
      name: 'clientApproved',
      title: 'Client has approved being named',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }) => parent?.kind !== 'client',
    }),
    defineField({
      name: 'scope',
      description: 'Role, platform, status — shown as a small table on the card.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'value', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        }),
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'order', type: 'number' }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  preview: { select: { title: 'name', subtitle: 'tagline' } },
})

export const trackRecordItem = defineType({
  name: 'trackRecordItem',
  title: 'Track record',
  type: 'document',
  icon: StackCompactIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'body', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'client',
      type: 'string',
      description: 'Only fill this in if you have permission to name them.',
    }),
    defineField({ name: 'order', type: 'number', validation: (rule) => rule.required() }),
  ],
  orderings: [
    { title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'body' } },
})

/** Generic page for privacy, terms and anything else editorial. */
export const page = defineType({
  name: 'page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'intro', type: 'text', rows: 3 }),
    defineField({ name: 'body', type: 'richText' }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  preview: { select: { title: 'title', subtitle: 'slug.current' } },
})

export const marketingDocuments = [
  siteSettings,
  service,
  situation,
  engagementStep,
  faq,
  testimonial,
  product,
  trackRecordItem,
  page,
]
