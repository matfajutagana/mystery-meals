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
    image: '/menu.jpg', // 📸 swap image — ideally a food/meal prep photo
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
      className='px-6 md:px-16 py-20'
      style={{ background: '#140308', ...DB }}
    >
      {/* Header */}
      <div className='mb-8'>
        <p className={`${LD} mb-4 ${fade(inView, 0)}`}>What we offer</p>
        <h2
          className={`text-3xl md:text-4xl font-light text-white tracking-tight ${fade(inView, 100)}`}
        >
          Our <em style={serif}>services.</em>
        </h2>
      </div>

      {/* Cards — horizontal scroll on mobile, 4-col grid on desktop */}
      <div
        className={`flex md:grid md:grid-cols-4 gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible no-scrollbar pb-4 ${fade(inView, 200)}`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {SERVICES.map((svc, i) => (
          <div
            key={i}
            className='group relative rounded-2xl overflow-hidden flex-shrink-0 md:flex-shrink-0 cursor-pointer'
            style={{
              width: 'min(260px, 70vw)',
              height: 'clamp(420px, 52vh, 540px)',
            }}
          >
            <Image
              src={svc.image}
              alt={svc.title}
              fill
              className='object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700'
            />

            {/* Gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#140308] via-[#140308]/50 to-transparent' />

            <div className='absolute inset-0 p-6 flex flex-col justify-between'>
              {/* Top — tag pill + number */}
              <div className='flex items-center justify-between'>
                <span
                  className='text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-md'
                  style={{
                    color: 'rgba(245,230,200,0.90)',
                    background: 'rgba(10,1,3,0.50)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {svc.tag}
                </span>
                <span
                  className='text-[10px]'
                  style={{ color: 'rgba(245,230,200,0.30)' }}
                >
                  {svc.number}
                </span>
              </div>

              {/* Bottom — title, desc, price */}
              <div>
                {/* Inter font — clean and readable on small cards */}
                <h3 className='text-base font-medium text-white mb-2 leading-snug'>
                  {svc.title}
                </h3>
                <p
                  className='text-xs leading-relaxed mb-4'
                  style={{ color: 'rgba(245,230,200,0.80)' }}
                >
                  {svc.desc}
                </p>
                <div
                  className='flex items-center justify-between pt-3'
                  style={{ borderTop: '1px solid rgba(245,230,200,0.12)' }}
                >
                  <span
                    className='text-xs'
                    style={{ color: 'rgba(245,230,200,0.60)' }}
                  >
                    {svc.price}
                  </span>
                  <a
                    href='#contact'
                    className='text-xs font-medium hover:text-[#F5E6C8] transition-colors'
                    style={{ color: 'rgba(245,230,200,0.55)' }}
                  >
                    Get a quote →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile — dot indicators */}
      <div className='md:hidden flex justify-center items-center gap-2 mt-5'>
        {SERVICES.map((_, i) => (
          <div
            key={i}
            className='rounded-full'
            style={{
              width: '6px',
              height: '6px',
              background: 'rgba(245,230,200,0.30)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
