import { SectionHead } from '@/components/sections/SectionHead'

/** Page-level header: the same component as section heads, at level 1. */
export function PageHeader(props: {
  chapter: string
  label: string
  title: React.ReactNode
  intro?: string
}) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-10 lg:px-18 lg:pt-24 lg:pb-14">
      <SectionHead {...props} level={1} />
    </div>
  )
}
