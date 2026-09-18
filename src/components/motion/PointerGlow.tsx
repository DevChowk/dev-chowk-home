'use client'

import { useEffect } from 'react'
import { useReducedMotionSafe } from './useReducedMotionSafe'

/**
 * Carries the lamp onto every button.
 *
 * Mounted once in the layout: a single delegated pointermove listener finds the
 * nearest `[data-glow]` ancestor and writes --mx/--my onto it, which the
 * `btn-glow` utility reads as the centre of a radial highlight. That keeps
 * <Button> a server component — it stays plain markup with an attribute —
 * instead of turning every CTA on the site into its own client island with its
 * own listener.
 *
 * Writes are batched into one rAF, so a fast pointer sweep costs one style
 * update per frame rather than one per event.
 */
export function PointerGlow() {
  const reduced = useReducedMotionSafe()

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches) return

    let frame = 0
    let active: HTMLElement | null = null
    let pending: { el: HTMLElement; x: number; y: number } | null = null

    const clear = (el: HTMLElement | null) => {
      if (!el) return
      el.style.setProperty('--glow-o', '0')
    }

    const flush = () => {
      frame = 0
      if (!pending) return
      const { el, x, y } = pending
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${x - rect.left}px`)
      el.style.setProperty('--my', `${y - rect.top}px`)
      el.style.setProperty('--glow-o', '1')
      pending = null
    }

    const onMove = (event: PointerEvent) => {
      const target = event.target
      const el =
        target instanceof Element ? (target.closest('[data-glow]') as HTMLElement | null) : null

      if (el !== active) {
        clear(active)
        active = el
      }
      if (!el) return

      pending = { el, x: event.clientX, y: event.clientY }
      if (!frame) frame = requestAnimationFrame(flush)
    }

    const onLeave = () => {
      clear(active)
      active = null
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      clear(active)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
    }
  }, [reduced])

  return null
}
