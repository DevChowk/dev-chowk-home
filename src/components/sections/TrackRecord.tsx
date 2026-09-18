import { Reveal } from '@/components/motion/Reveal'
import { client } from '@/sanity/client'
import { cms, nth } from '@/sanity/fetch'
import { TRACK_RECORD_QUERY } from '@/sanity/queries'

/**
 * On /about. Every row is drawn from work the team delivered before Dev Chowk
 * and is attributed that way — the strength is in the specifics, not in
 * implying they were Dev Chowk clients.
 *
 * `rule-draw` gives each row the brass hairline that wipes in from the left on
 * hover and retracts to the left again when the pointer leaves.
 */
export async function TrackRecord() {
  const trackRecord = await client.fetch(TRACK_RECORD_QUERY, {}, cms)
  if (trackRecord.length === 0) return null

  return (
    <div className="flex flex-col gap-8">
      <Reveal y={14}>
        <div className="flex flex-col gap-3">
          <p className="chapter-label">Track record</p>
          <p className="max-w-[60ch] text-[16px] leading-[1.68] text-ink-muted">
            Systems our engineers designed, built and ran before founding Dev Chowk. The scale and
            the outcomes are as delivered.
          </p>
        </div>
      </Reveal>

      <ol className="flex flex-col border-t border-rule">
        {trackRecord.map((row, i) => (
          <Reveal as="li" key={row._id} delay={i * 0.07} y={20}>
            <div className="rule-draw grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 lg:grid-cols-[56px_340px_minmax(0,1fr)]">
              <span className="font-mono text-[13px] tracking-[0.1em] text-brass lg:pt-2">
                {nth(i)}
              </span>
              <h3 className="font-display text-[26px] leading-[1.14] font-normal">{row.title}</h3>
              <p className="text-[16px] leading-[1.68] text-ink-muted">{row.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
