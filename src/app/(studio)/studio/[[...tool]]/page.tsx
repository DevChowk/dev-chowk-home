import { NextStudio } from 'next-sanity/studio'
import config from '../../../../../sanity.config'

/** The Studio shell is identical for every visitor, so it can be static. */
export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}
