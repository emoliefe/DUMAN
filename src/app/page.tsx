import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import BeforeAfter from '@/components/sections/BeforeAfter'
import ProblemSection from '@/components/sections/ProblemSection'
import Packages from '@/components/sections/Packages'
import Process from '@/components/sections/Process'
import InstagramFeed from '@/components/sections/InstagramFeed'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <BeforeAfter />
      <div className="section-divider" />
      <ProblemSection />
      <div className="section-divider" />
      <Packages />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <InstagramFeed />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <FAQ />
      <div className="section-divider" />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
