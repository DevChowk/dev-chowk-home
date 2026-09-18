import { z } from 'zod'

/**
 * One schema for the contact form, used on the client for instant feedback
 * and on the server as the authority. Server-side is the one that counts.
 */
export const leadSchema = z.object({
  name: z.string().trim().min(2, 'Please tell us your name.').max(120, 'That name is too long.'),
  email: z.email('Please enter a valid email address.').max(200),
  company: z
    .string()
    .trim()
    .max(120, 'That company name is too long.')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, 'A couple of sentences is enough — what are you building, and where is it now?')
    .max(4000, 'Please keep it under 4,000 characters.'),
})

export type LeadInput = z.infer<typeof leadSchema>
export type LeadField = keyof LeadInput
