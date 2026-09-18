import type { StructureResolver } from 'sanity/structure'
import { CogIcon } from '@sanity/icons/Cog'

/**
 * Singletons are enforced here, not in the schema — there is no
 * `singleton: true` option. A fixed documentId locks the document, and the
 * type is filtered out of the generic list so it cannot be duplicated.
 */
const SINGLETONS = ['siteSettings']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Dev Chowk')
    .items([
      S.listItem()
        .title('Site settings')
        .icon(CogIcon)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings').title('Site settings')
        ),

      S.divider(),

      S.listItem()
        .title('Homepage')
        .child(
          S.list()
            .title('Homepage sections')
            .items([
              S.documentTypeListItem('situation').title('When to call us'),
              S.documentTypeListItem('service').title('Capabilities'),
              S.documentTypeListItem('engagementStep').title('How we work'),
              S.documentTypeListItem('product').title('Work'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
              S.documentTypeListItem('faq').title('FAQ'),
            ])
        ),

      S.listItem()
        .title('Writing')
        .child(
          S.list()
            .title('Writing')
            .items([
              S.documentTypeListItem('blogPost').title('Articles'),
              S.documentTypeListItem('author').title('Authors'),
              S.documentTypeListItem('category').title('Categories'),
            ])
        ),

      S.divider(),

      S.documentTypeListItem('trackRecordItem').title('Track record'),
      S.documentTypeListItem('page').title('Pages'),

      S.divider(),

      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return (
          !!id &&
          !SINGLETONS.includes(id) &&
          ![
            'situation',
            'service',
            'engagementStep',
            'product',
            'testimonial',
            'faq',
            'blogPost',
            'author',
            'category',
            'trackRecordItem',
            'page',
          ].includes(id)
        )
      }),
    ])
