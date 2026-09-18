import type { LeadField } from '@/lib/validation/lead'

/**
 * Shared shape for the contact form's action state.
 *
 * This lives outside the `'use server'` module on purpose: a "use server" file
 * may only export async functions, so exporting the initial-state object from
 * there makes every submission fail with a 500 at runtime.
 */
export type LeadState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<LeadField, string>>
  /** Echoed back on error so the form does not clear what the person typed. */
  values?: Record<string, string>
}

export const initialLeadState: LeadState = { status: 'idle' }
