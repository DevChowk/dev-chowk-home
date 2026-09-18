'use client'

import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-motion'],
  })
  return () => observer.disconnect()
}

const getSnapshot = () => document.documentElement.dataset.motion === 'reduced'
const getServerSnapshot = () => false

/**
 * An in-page way to turn the animation off.
 *
 * The OS setting is a blunt instrument — plenty of people leave it alone and
 * still don't want a page that moves this much. This writes data-motion onto
 * <html>, which all three motion layers already read, and persists it so the
 * choice survives a reload.
 */
export function MotionToggle() {
  const reduced = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = () => {
    const el = document.documentElement
    try {
      if (reduced) {
        delete el.dataset.motion
        localStorage.removeItem('motion')
      } else {
        el.dataset.motion = 'reduced'
        localStorage.setItem('motion', 'reduced')
      }
    } catch {
      // Private mode can throw on localStorage; the attribute still applies.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={reduced}
      suppressHydrationWarning
      className="cursor-pointer font-mono text-xs tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
    >
      {reduced ? 'MOTION: OFF' : 'MOTION: ON'}
    </button>
  )
}
