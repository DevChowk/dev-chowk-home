'use server'

import { createHash } from 'node:crypto'
import { headers } from 'next/headers'
import { sendLeadEmail } from '@/lib/leads/sendLeadEmail'
import type { LeadState } from '@/lib/leads/state'
import { leadSchema, type LeadField } from '@/lib/validation/lead'
import { site } from '@/lib/site'

/* ---------------------------------------------------------------------------
   Spam controls, cheapest first. All three are silent to bots: a rejected
   submission returns the same shape as a validation error.
   --------------------------------------------------------------------------- */

const MIN_FILL_MS = 1_500
const RATE_WINDOW_MS = 10 * 60_000
const RATE_MAX = 5

/**
 * In-memory and therefore per-instance — on serverless it resets with each
 * cold start, which makes it a speed bump rather than a wall. Good enough
 * for a form with single-digit daily volume; the plan swaps this for a
 * Sanity-backed counter once the CMS lands.
 */
const hits = new Map<string, number[]>()

function rateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(key, recent)
  return recent.length > RATE_MAX
}

function hashIp(ip: string): string {
  const secret = process.env.LEAD_IP_HASH_SECRET ?? 'dev-chowk-lead'
  return createHash('sha256').update(`${secret}:${ip}`).digest('hex').slice(0, 24)
}

const str = (v: FormDataEntryValue | null) => (typeof v === 'string' ? v : '')

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const values = {
    name: str(formData.get('name')),
    email: str(formData.get('email')),
    company: str(formData.get('company')),
    message: str(formData.get('message')),
  }

  // 1. Honeypot — a field no human sees. Filled means bot.
  if (str(formData.get('website')).length > 0) {
    return { status: 'error', message: 'Something went wrong. Please try again.', values }
  }

  // 2. Validate before the bot heuristics, so a real person who types quickly
  //    or uses autofill is told exactly what is wrong rather than being met
  //    with a generic failure. Field errors leak nothing useful to a bot.
  const parsed = leadSchema.safeParse(values)
  if (!parsed.success) {
    const errors: LeadState['errors'] = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as LeadField | undefined
      if (field && !errors[field]) errors[field] = issue.message
    }
    return { status: 'error', errors, values }
  }

  // 3. Timing — a valid-looking form completed almost instantly was not
  //    completed by a person. Skipped when the field is absent (no-JS).
  const startedAt = Number(str(formData.get('ts')))
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS) {
    return { status: 'error', message: 'Something went wrong. Please try again.', values }
  }

  // 4. Rate limit per hashed IP.
  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || 'unknown'
  if (rateLimited(hashIp(ip))) {
    return {
      status: 'error',
      message: 'Too many messages from this connection. Please try again in a few minutes.',
      values,
    }
  }

  // 5. Deliver. Never report success unless the email actually went.
  const pageUrl = h.get('referer') ?? undefined
  const result = await sendLeadEmail(parsed.data, { pageUrl })

  if (!result.ok) {
    return {
      status: 'error',
      message:
        result.reason === 'unconfigured'
          ? `Email delivery isn't set up on this deployment yet. Please write to ${site.email} directly — sorry for the detour.`
          : `We couldn't send that just now. Please try again, or email ${site.email} directly.`,
      values,
    }
  }

  return {
    status: 'success',
    message: `Sent. We'll reply to ${parsed.data.email} — usually within two business days.`,
  }
}
