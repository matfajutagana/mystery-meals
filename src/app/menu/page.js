'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }
const LABEL_DARK = 'text-[11px] uppercase tracking-[0.22em] text-[#F5E6C8]/30'
const LABEL_LIGHT = 'text-[11px] uppercase tracking-[0.22em] text-[#6B0F1A]/35'
const border = { borderBottom: '1px solid rgba(245,230,200,0.07)' }

const MENU_SECTIONS = [
  {
    category: 'Artisan Welcome',
    items: [
      {
        name: 'Signature Bread Selection',
        desc: "Accompanied by the chef's selection of dipping oils & house-made spreads",
      },
    ],
  },
  {
    category: 'Seasonal Starter',
    items: [
      {
        name: "Chef's Garden Salad",
        desc: 'Served with house-crafted red wine vinaigrette & white balsamic vinaigrette',
      },
    ],
  },
  {
    category: 'Pasta Selection',
    items: [
      {
        name: 'Vegetable Penne Pasta',
        desc: 'Classic roasted tomato sauce',
        tag: 'Vegetarian',
      },
      {
        name: 'Chicken Ravioli',
        desc: 'Creamy rosé sauce, finished with grated parmesan',
      },
    ],
  },
  {
    category: 'Vegetarian Feature',
    items: [
      {
        name: 'Eggplant Parmesan',
        desc: 'Baked with classic roasted tomato sauce & melted mozzarella',
        tag: 'Vegetarian',
      },
    ],
  },
  {
    category: 'Chicken Feature',
    items: [
      {
        name: 'Chicken Parmesan',
        desc: 'Classic roasted tomato sauce & melted mozzarella',
        tag: 'Halal',
      },
    ],
  },
  {
    category: 'Beef Feature',
    items: [
      {
        name: 'Homemade Beef Lasagna',
        desc: 'Layered with savoury meat sauce & cheese',
      },
    ],
  },
  {
    category: 'Accompaniments',
    items: [
      {
        name: 'Roasted Sweet Potatoes',
        desc: 'Seasoned and oven roasted to perfection',
      },
    ],
  },
]

const SIGNATURE = {
  heading: 'Our signature samosas.',
  desc: 'Handcrafted with love, our signature samosas are a crowd favourite at every event. Available in various fillings, perfectly crispy on the outside and bursting with flavour inside.',
}

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold: 0.08 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const tagStyle = (tag) =>
  tag === 'Halal'
    ? 'text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full bg-green-900/40 text-green-400 border border-green-800/50'
    : 'text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full border'

export default function Menu() {
  const [menuRef, menuInView] = useInView()

  return (
    <div className='pt-20' style={{ background: '#140308' }}>
      {/* Hero */}
      <section className='px-6 md:px-16 py-24' style={border}>
        <p className={`${LABEL_DARK} mb-5`}>What we serve</p>
        <h1 className='text-4xl md:text-6xl font-light text-[#F5E6C8] leading-tight tracking-tight max-w-xl'>
          Our <em style={serif}>menu.</em>
        </h1>
        <p className='text-base text-[#F5E6C8]/40 mt-6 max-w-xl leading-relaxed'>
          Fresh, delicious, and beautifully presented. Every dish is prepared
          with locally sourced ingredients on the day of your event.
        </p>
      </section>

      {/* Customise note */}
      <section
        className='px-6 md:px-16 py-6'
        style={{ ...border, background: 'rgba(245,230,200,0.03)' }}
      >
        <p className='text-sm text-[#F5E6C8]/35 leading-relaxed'>
          All menus are fully customisable.{' '}
          <Link
            href='/contact'
            className='text-[#F5E6C8]/60 underline underline-offset-2 hover:text-[#F5E6C8]/80 transition-opacity'
          >
            Contact us
          </Link>{' '}
          to create your perfect menu.
        </p>
      </section>

      {/* Menu sections */}
      <section
        ref={menuRef}
        className='px-6 md:px-16 py-24'
        style={{ ...border, background: '#180306' }}
      >
        <div
          className='max-w-3xl mx-auto flex flex-col'
          style={{ divide: 'rgba(245,230,200,0.07)' }}
        >
          {MENU_SECTIONS.map((section, i) => (
            <div
              key={i}
              className={`py-10 transition-all duration-700 delay-${Math.min(i, 5) * 100} ${menuInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ borderBottom: '1px solid rgba(245,230,200,0.07)' }}
            >
              <p className={`${LABEL_DARK} mb-6`}>{section.category}</p>
              <div className='flex flex-col gap-5'>
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className='flex items-start justify-between gap-6'
                  >
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-1.5 flex-wrap'>
                        <h3 className='text-base font-light text-[#F5E6C8]/90'>
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span
                            className={tagStyle(item.tag)}
                            style={
                              item.tag !== 'Halal'
                                ? {
                                    borderColor: 'rgba(245,230,200,0.15)',
                                    color: 'rgba(245,230,200,0.4)',
                                  }
                                : {}
                            }
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className='text-sm text-[#F5E6C8]/30 leading-relaxed'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature samosas */}
      <section className='px-6 md:px-16 py-24' style={border}>
        <div className='max-w-xl'>
          <p className={`${LABEL_DARK} mb-5`}>Signature item</p>
          <h2 className='text-3xl md:text-4xl font-light text-[#F5E6C8] mb-6 tracking-tight'>
            <em style={serif}>{SIGNATURE.heading}</em>
          </h2>
          <p className='text-sm text-[#F5E6C8]/40 leading-relaxed mb-8'>
            {SIGNATURE.desc}
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 text-sm text-[#F5E6C8]/60 font-medium border-b border-[#F5E6C8]/20 pb-0.5 hover:text-[#F5E6C8] hover:border-[#F5E6C8]/50 transition-colors'
          >
            Order for your event →
          </Link>
        </div>
      </section>

      {/* CTA — cream accent */}
      <section
        className='px-6 md:px-16 py-24'
        style={{ background: '#F5E6C8' }}
      >
        <div className='max-w-2xl'>
          <p className={`${LABEL_LIGHT} mb-6`}>Custom menus</p>
          <h2 className='text-4xl md:text-5xl font-light text-[#1a0408] leading-tight mb-6 tracking-tight'>
            Want a <em style={serif}>custom menu?</em>
          </h2>
          <p className='text-[#3a0508]/50 text-sm leading-relaxed mb-10 max-w-md'>
            We work with you to create a menu that perfectly fits your event,
            budget, and dietary needs.
          </p>
          <Link
            href='/contact'
            className='text-sm font-medium px-10 py-4 rounded-full transition-colors inline-block text-[#F5E6C8]'
            style={{ background: '#6B0F1A' }}
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  )
}
