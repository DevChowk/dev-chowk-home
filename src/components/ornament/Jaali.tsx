/**
 * Jaali — the Indian geometric lattice screen that replaces the old site's
 * blurred gradient blobs. Hairline strokes, masked to fade at the edges.
 * Server component: it is pure markup, so it costs no client JS.
 */
export function Jaali({
  size = 900,
  cell = 120,
  opacity = 0.28,
  className,
  id = 'jaali',
}: {
  size?: number
  cell?: number
  opacity?: number
  className?: string
  id?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={`${id}-p`} width={cell} height={cell} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity={opacity}>
            <rect x="0" y="0" width={cell} height={cell} />
            <path d={`M${cell / 2} 0 L${cell} ${cell / 2} L${cell / 2} ${cell} L0 ${cell / 2} Z`} />
            <path d={`M0 0 L${cell} ${cell} M${cell} 0 L0 ${cell}`} />
            <circle cx={cell / 2} cy={cell / 2} r={cell / 4} />
            <circle cx="0" cy="0" r={cell * 0.15} />
            <circle cx={cell} cy="0" r={cell * 0.15} />
            <circle cx="0" cy={cell} r={cell * 0.15} />
            <circle cx={cell} cy={cell} r={cell * 0.15} />
          </g>
        </pattern>
        <radialGradient id={`${id}-f`} cx="50%" cy="42%" r="52%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="70%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={`${id}-m`}>
          <rect width={size} height={size} fill={`url(#${id}-f)`} />
        </mask>
      </defs>
      <rect width={size} height={size} fill={`url(#${id}-p)`} mask={`url(#${id}-m)`} />
    </svg>
  )
}
