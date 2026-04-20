'use client'
import Image from 'next/image'
import { useInView } from '@/lib/useInView'
import { LD, serif, DB, fade } from '@/lib/siteConfig'

// ✏️ EASY EDIT — add/remove/swap services
const SERVICES = [
  {
    image: '/event.jpg', // 📸 swap image
    number: '01',
    tag: 'Weddings & Events',
    title: 'Wedding catering.',
    desc: 'Elegant, customised menus for your special day — from intimate ceremonies to grand receptions.',
    price: 'From $45 / person',
  },
  {
    image: '/corporate.jpg', // 📸 swap image
    number: '02',
    tag: 'Corporate',
    title: 'Corporate events.',
    desc: 'Professional catering for boardroom lunches, galas, and everything in between.',
    price: 'From $35 / person',
  },
  {
    image: '/chef.jpg', // 📸 swap image
    number: '03',
    tag: 'Private Chef',
    title: 'Private chef.',
    desc: 'Restaurant-quality dining in the comfort of your own home.',
    price: 'Custom pricing',
  },
  {
    image: '/menu.jpg', // 📸 swap image
    number: '04',
    tag: 'Meal Prep',
    title: 'Weekly meal prep.',
    desc: 'Fresh, nutritious meals prepared weekly so you can focus on what matters most.',
    price: 'From $15 / meal',
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section
      id='services'
      ref={ref}
      className='px-6 md:px-16 py-28'
      style={{ background: '#140308', ...DB }}
    >
      <div className='mb-12'>
        <p className={`${LD} mb-4 ${fade(inView, 0)}`}>What we offer</p>
        <h2
          className={`text-3xl md:text-4xl font-light text-white tracking-tight ${fade(inView, 100)}`}
        >
          Our <em style={serif}>services.</em>
        </h2>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div
        className={`flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-x-visible no-scrollbar pb-2 ${fade(inView, 200)}`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {SERVICES.map((svc, i) => (
          <div
            key={i}
            className='group relative rounded-2xl overflow-hidden flex-shrink-0 md:flex-shrink cursor-pointer'
            style={{ width: 'min(280px, 75vw)', height: '420px' }}
          >
            <Image
              src={svc.image}
              alt={svc.title}
              fill
              className='object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#140308]/95 via-[#140308]/25 to-transparent' />
            <div className='absolute inset-0 p-6 flex flex-col justify-between'>
              <div className='flex items-center justify-between'>
                <span className={LD}>{svc.tag}</span>
                <span className='text-[10px] text-[#F5E6C8]/30'>
                  {svc.number}
                </span>
              </div>
              <div>
                <h3
                  className='text-lg font-light text-white mb-2'
                  style={serif}
                >
                  {svc.title}
                </h3>
                <p className='text-xs text-[#F5E6C8]/65 mb-3 leading-relaxed'>
                  {svc.desc}
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-xs text-[#F5E6C8]/50'>{svc.price}</span>
                  <a
                    href='#contact'
                    className='text-xs text-[#F5E6C8]/60 hover:text-[#F5E6C8] transition-colors'
                  >
                    Quote →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
