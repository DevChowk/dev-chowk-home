import { ImageResponse } from 'next/og'

export const alt = 'Dev Chowk — end-to-end technology partner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * The share card. Ink ground, brass jaali lattice, the wordmark and the
 * positioning line — the same composition as the hero so a shared link looks
 * like the site it opens.
 *
 * The display face is fetched at render and falls back silently: a missing
 * font must degrade the card, never fail the route.
 */
async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    ).then((r) => r.text())
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype)'\)/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function OpengraphImage() {
  const font = await loadFont()

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#12110f',
        color: '#f5f0e8',
        padding: 72,
        position: 'relative',
      }}
    >
      <svg
        width="620"
        height="620"
        viewBox="0 0 620 620"
        style={{ position: 'absolute', top: -80, right: -120, opacity: 0.32 }}
      >
        <defs>
          <pattern id="og-jaali" width="124" height="124" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#d9a441" strokeWidth="1">
              <rect x="0" y="0" width="124" height="124" />
              <path d="M62 0 L124 62 L62 124 L0 62 Z" />
              <path d="M0 0 L124 124 M124 0 L0 124" />
              <circle cx="62" cy="62" r="31" />
            </g>
          </pattern>
        </defs>
        <rect width="620" height="620" fill="url(#og-jaali)" />
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          stroke="#d9a441"
          strokeWidth="1.5"
        >
          <path d="M10 1 L19 10 L10 19 L1 10 Z" />
          <path d="M10 6 L14 10 L10 14 L6 10 Z" />
        </svg>
        <div style={{ fontSize: 22, letterSpacing: 4, color: '#a49c90' }}>DEV CHOWK</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 26,
          fontFamily: font ? 'Instrument Serif' : undefined,
        }}
      >
        <div style={{ fontSize: 76, lineHeight: 1.06, letterSpacing: -2, maxWidth: 920 }}>
          We build the business, not just the software.
        </div>
        <div style={{ fontSize: 26, color: '#a49c90', maxWidth: 820, lineHeight: 1.4 }}>
          Consulting, engineering, AI and infrastructure — one accountable senior team.
        </div>
      </div>

      <div
        style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 19, color: '#a49c90' }}
      >
        <span style={{ width: 40, height: 1, background: '#d9a441' }} />
        <span>CONSULTING · ENGINEERING · AI · CLOUD</span>
      </div>
    </div>,
    {
      ...size,
      fonts: font
        ? [{ name: 'Instrument Serif', data: font, style: 'normal' as const, weight: 400 as const }]
        : undefined,
    }
  )
}
