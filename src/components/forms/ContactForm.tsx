'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitLead } from '@/app/actions/lead'
import { initialLeadState } from '@/lib/leads/state'

const inputClass =
  'w-full border border-rule bg-transparent px-4 py-3.5 text-[16px] text-ink placeholder:text-ink-muted/70 focus-visible:border-brass focus-visible:outline-none transition-colors'

const labelClass = 'chapter-label mb-2 block'

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[14px] text-terracotta">
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * Progressive: the form posts to the Server Action with or without JS.
 * With JS, useActionState gives pending/error/success without a reload,
 * and typed values survive a validation error.
 */
export function ContactForm() {
  const [state, action, pending] = useActionState(submitLead, initialLeadState)
  const tsRef = useRef<HTMLInputElement>(null)

  // Stamp when the form became visible, so the server can reject instant
  // (bot) submissions. Set after mount so the value is real, not the render time.
  useEffect(() => {
    if (tsRef.current) tsRef.current.value = String(Date.now())
  }, [])

  if (state.status === 'success') {
    return (
      <div className="border-t border-brass bg-brass-soft p-6" role="status">
        <p className="mb-2 chapter-label">Sent</p>
        <p className="text-[17px] leading-[1.6]">{state.message}</p>
      </div>
    )
  }

  const v = state.values ?? {}
  const e = state.errors ?? {}

  return (
    <form action={action} noValidate className="flex flex-col gap-6">
      {/* Honeypot: invisible to people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={tsRef} type="hidden" name="ts" defaultValue="" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={e.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={v.name}
            aria-invalid={Boolean(e.name)}
            aria-describedby={e.name ? 'name-error' : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Work email" error={e.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={Boolean(e.email)}
            aria-describedby={e.email ? 'email-error' : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="company" label="Company (optional)" error={e.company}>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          defaultValue={v.company}
          className={inputClass}
        />
      </Field>

      <Field id="message" label="What are you building, and where is it now?" error={e.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          defaultValue={v.message}
          aria-invalid={Boolean(e.message)}
          aria-describedby={e.message ? 'message-error' : undefined}
          placeholder="A rough idea is fine. If something already exists, tell us what it is and what's getting in the way."
          className={`${inputClass} resize-y`}
        />
      </Field>

      {state.status === 'error' && state.message && (
        <p
          role="alert"
          className="border-t border-terracotta bg-brass-soft p-4 text-[15px] leading-[1.6]"
        >
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          data-glow
          className="group btn-glow btn-drop inline-flex cursor-pointer items-center justify-center gap-2.5 bg-ink px-7 py-4 text-[15px] font-medium text-paper transition-colors duration-300 glow-light before:bg-brass hover:text-ink focus-visible:text-ink disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? 'Sending…' : 'Send message'}
        </button>
        <p className="text-[13px] text-ink-muted">
          No newsletter, no follow-up sequence. One reply, from a person.{' '}
          <a href="/privacy" className="rule-draw whitespace-nowrap">
            What we do with it
          </a>
          .
        </p>
      </div>
    </form>
  )
}
