import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Destinations from '@/components/Destinations'
import VideoExcursions from '@/components/VideoExcursions'
import Gallery from '@/components/Gallery'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatButtons from '@/components/FloatButtons'
import MusicPlayer from '@/components/MusicPlayer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <VideoExcursions />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatButtons />
      <MusicPlayer />
    </main>
  )
}
