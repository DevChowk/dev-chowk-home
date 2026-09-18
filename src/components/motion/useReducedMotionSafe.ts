'use client'

import { useReducedMotion } from 'motion/react'
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
 * Layer 3 of the reduced-motion stack, for imperative code that `MotionConfig`
 * and the CSS block cannot reach — pointer loops, canvases, counters.
 *
 * Reads both sources of truth: the OS setting, and the in-page override that
 * writes data-motion="reduced" onto <html>. useSyncExternalStore rather than
 * useEffect + setState, so it stays correct across hydration without the
 * cascading render React 19 rightly complains about.
 */
export function useReducedMotionSafe() {
  const prefersReduced = useReducedMotion()
  const pageReduced = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return Boolean(prefersReduced) || pageReduced
}
