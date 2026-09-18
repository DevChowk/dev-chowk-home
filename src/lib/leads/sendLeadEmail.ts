import 'server-only'

import { Resend } from 'resend'
import type { LeadInput } from '@/lib/validation/lead'
import { site } from '@/lib/site'

/**
 * Delivers a lead by email. This module is the only thing that touches the
 * API key, and `server-only` turns any accidental client import into a build
 * error.
 *
 * Environment:
 *   RESEND_API_KEY    required — without it the form reports an honest error
 *                     rather than pretending the message was sent.
 *   LEAD_TO_EMAIL     where leads land (defaults to the site contact email)
 *   LEAD_FROM_EMAIL   verified sender. Until a domain is verified in Resend,
 *                     `onboarding@resend.dev` can only deliver to the address
 *                     that owns the Resend account.
 */
export type SendResult =
  { ok: true; id: string | null } | { ok: false; reason: 'unconfigured' | 'failed' }

export async function sendLeadEmail(
  lead: LeadInput,
  meta: { pageUrl?: string }
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false, reason: 'unconfigured' }

  const to = process.env.LEAD_TO_EMAIL ?? site.email
  const from = process.env.LEAD_FROM_EMAIL ?? 'Dev Chowk <onboarding@resend.dev>'

  const company = lead.company ? lead.company : '—'
  const text = [
    `New enquiry from ${lead.name}`,
    '',
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
    `Company:  ${company}`,
    meta.pageUrl ? `Page:     ${meta.pageUrl}` : null,
    '',
    'What they are building:',
    '',
    lead.message,
    '',
    '—',
    'Reply to this email to answer them directly.',
  ]
    .filter((line) => line !== null)
    .join('\n')

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: `Enquiry — ${lead.name}${lead.company ? ` (${lead.company})` : ''}`,
      text,
    })
    if (error) {
      console.error('[lead] Resend error', error)
      return { ok: false, reason: 'failed' }
    }
    return { ok: true, id: data?.id ?? null }
  } catch (err) {
    console.error('[lead] send failed', err)
    return { ok: false, reason: 'failed' }
  }
}
