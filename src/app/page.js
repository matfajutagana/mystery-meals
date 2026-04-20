import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Philosophy from '@/components/sections/Philosophy'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Menu from '@/components/sections/Menu'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'Mystery Meals — Catering Services in Milton, Ontario',
  description:
    'Premium catering for weddings, corporate events, and special occasions across Milton and the GTA.',
}

export default function Home() {
  return (
    <div className='overflow-x-hidden' style={{ background: '#140308' }}>
      <Hero />
      <Stats />
      <Philosophy />
      <About />
      <Services />
      <Menu />
      <Testimonials />
      <Contact />
    </div>
  )
}
