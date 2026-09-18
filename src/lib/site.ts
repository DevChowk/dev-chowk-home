/**
 * Real, confirmed details. Phase 3 moves this into Sanity as the
 * `siteSettings` singleton so it is editable without a deploy.
 *
 * Nothing in here is a placeholder except where it is bracketed.
 */
export const site = {
  name: 'Dev Chowk',
  tagline:
    'An end-to-end technology partner. Consulting, engineering, AI and infrastructure — one accountable team.',

  email: 'vaibhavr325@gmail.com',

  phone: {
    display: '+91 87552 92531',
    href: 'tel:+918755292531',
  },

  /**
   * The one call to action on the site. It lands on the contact form rather
   * than a `mailto:`, which silently does nothing on devices without a mail
   * app. Swap in a Cal.com / Calendly URL here if one is ever set up.
   */
  booking: {
    label: 'Book a 30-minute call',
    href: '/contact#enquiry',
  },

  /** No office — deliberate, and worth saying plainly rather than hiding. */
  location: 'Fully remote',
  locationNote: 'No office. The whole team works remotely, across time zones.',

  /** Confirmed: none yet. Add as they exist rather than linking dead profiles. */
  socials: [] as { label: string; href: string }[],
}
