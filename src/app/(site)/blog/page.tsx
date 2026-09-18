import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { EmptyState } from '@/components/layout/EmptyState'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on architecture, delivery and AI, from the people doing the work.',
}

export default function BlogPage() {
  return (
    <div id="main">
      <PageHeader
        chapter="—"
        label="Writing"
        title={<>Writing.</>}
        intro="Notes on architecture, delivery and AI, from the people doing the work."
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <Reveal y={22}>
          <EmptyState
            title="First articles are in progress."
            body="New pieces are published here as they're written."
          />
        </Reveal>
      </div>
    </div>
  )
}
