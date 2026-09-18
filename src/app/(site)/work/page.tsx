import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { client } from '@/sanity/client'
import { cms } from '@/sanity/fetch'
import { PRODUCTS_QUERY } from '@/sanity/queries'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Products Dev Chowk has built and runs — KundaliPro, an AI assistant on WhatsApp, and Bumpp, a real-time random-chat web platform built for Vinayak Sharma.',
}

export default async function WorkPage() {
  const products = await client.fetch(PRODUCTS_QUERY, {}, cms)

  return (
    <div id="main">
      <PageHeader
        chapter="04"
        label="Work"
        title={<>Products in production — ours, and our clients&apos;.</>}
        intro="The clearest evidence of how we work is what's live. Our own products, and client work published with permission."
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-18 lg:pb-28">
        <div className="flex flex-col border-t border-rule">
          {products.map((p, i) => (
            <Reveal key={p._id} delay={i * 0.1} y={22}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal y={20}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <p className="max-w-[30ch] font-display text-[24px] italic lg:text-[26px]">
              Want to see client work we can&apos;t publish yet? Ask on the call.
            </p>
            <Button href={site.booking.href} arrow className="shrink-0">
              {site.booking.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
