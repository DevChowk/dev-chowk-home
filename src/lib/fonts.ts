import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
  Tiro_Devanagari_Hindi,
} from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const tiroDevanagari = Tiro_Devanagari_Hindi({
  subsets: ['devanagari'],
  weight: ['400'],
  variable: '--font-tiro-devanagari',
  display: 'swap',
})

/**
 * Every root layout needs these, and `global-not-found` bypasses layouts
 * entirely — so the variable list lives here rather than being duplicated.
 */
export const fontVariables = [
  instrumentSerif.variable,
  instrumentSans.variable,
  jetbrainsMono.variable,
  tiroDevanagari.variable,
].join(' ')
