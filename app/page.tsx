import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import WhyDevChowk from '@/components/WhyDevChowk'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyDevChowk />
      <Stats />
      <Testimonials />
      <Process />
      <CTASection />
      <Footer />
    </main>
  )
}
