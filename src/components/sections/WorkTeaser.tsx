import { Reveal } from '@/components/motion/Reveal'
import { SectionHead } from '@/components/sections/SectionHead'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { products } from '@/lib/content'

/** The proof that used to be buried on /work, surfaced on the homepage. */
export function WorkTeaser() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-18 lg:py-28">
        <SectionHead
          chapter="04"
          label="Work"
          title={<>Products in production — ours, and our clients&apos;.</>}
          intro="The clearest evidence of how we work is what's live. Our own products, and client work published with permission."
        />

        <div className="mt-14 flex flex-col border-t border-rule">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1} y={22}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal y={16}>
          <div className="mt-10">
            <Button href="/work" variant="secondary" arrow>
              See all work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
