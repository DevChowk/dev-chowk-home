import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/** The chowk mark: a brass diamond crossroads on ink. */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#12110f',
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        stroke="#d9a441"
        strokeWidth="1.6"
      >
        <path d="M10 1 L19 10 L10 19 L1 10 Z" />
        <path d="M10 6 L14 10 L10 14 L6 10 Z" />
      </svg>
    </div>,
    size
  )
}
