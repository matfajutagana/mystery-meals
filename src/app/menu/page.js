'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ── easy edit — add/remove/rename sections and items ──────
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
// ──────────────────────────────────────────────────────────

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const tagStyle = (tag) =>
  tag === 'Halal'
    ? 'bg-green-50 text-green-700 border border-green-200'
    : 'bg-[#6B0F1A]/5 text-[#6B0F1A] border border-[#6B0F1A]/15'

export default function Menu() {
  const [menuRef, menuInView] = useInView()

  return (
    <div className='bg-[#FAFAF8] pt-20'>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'>
        <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
          What we serve
        </p>
        <h1 className='text-4xl md:text-6xl font-light text-[#1a0408] leading-tight tracking-tight max-w-xl'>
          Our <em style={{ fontFamily: 'Georgia, serif' }}>menu.</em>
        </h1>
        <p className='text-base text-[#6B0F1A]/50 mt-6 max-w-xl leading-relaxed'>
          Fresh, delicious, and beautifully presented. Every dish is prepared
          with locally sourced ingredients on the day of your event.
        </p>
      </section>

      {/* ── Customise note ───────────────────────────────── */}
      <section className='px-6 md:px-16 py-8 border-b border-[#6B0F1A]/10 bg-[#6B0F1A]/[0.03]'>
        <p className='text-sm text-[#6B0F1A]/60 leading-relaxed'>
          All menus are fully customisable to suit your event, dietary
          requirements, and preferences.{' '}
          <Link
            href='/contact'
            className='text-[#6B0F1A] underline underline-offset-2 hover:opacity-70 transition-opacity'
          >
            Contact us
          </Link>{' '}
          to create your perfect menu.
        </p>
      </section>

      {/* ── Menu sections ────────────────────────────────── */}
      <section
        ref={menuRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div className='max-w-3xl mx-auto flex flex-col divide-y divide-[#6B0F1A]/10'>
          {MENU_SECTIONS.map((section, i) => (
            <div
              key={i}
              className={`py-10 transition-all duration-700 delay-${Math.min(i, 5) * 100} ${
                menuInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/30 mb-6'>
                {section.category}
              </p>
              <div className='flex flex-col gap-4'>
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className='flex items-start justify-between gap-6'
                  >
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-1 flex-wrap'>
                        <h3 className='text-base font-medium text-[#1a0408]'>
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span
                            className={`text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full ${tagStyle(item.tag)}`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className='text-sm text-[#6B0F1A]/50 leading-relaxed'>
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

      {/* ── Signature samosas ────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'>
        <div className='max-w-xl'>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
            Signature item
          </p>
          <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] mb-6 tracking-tight'>
            <em style={{ fontFamily: 'Georgia, serif' }}>
              {SIGNATURE.heading}
            </em>
          </h2>
          <p className='text-sm text-[#6B0F1A]/60 leading-relaxed mb-8'>
            {SIGNATURE.desc}
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 text-sm text-[#6B0F1A] font-medium border-b border-[#6B0F1A]/30 pb-0.5 hover:border-[#6B0F1A] transition-colors'
          >
            Order for your event →
          </Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 bg-[#6B0F1A]'>
        <div className='max-w-2xl'>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#F5E6C8]/40 mb-6'>
            Custom menus
          </p>
          <h2 className='text-4xl md:text-5xl font-light text-white leading-tight mb-6 tracking-tight'>
            Want a{' '}
            <em style={{ fontFamily: 'Georgia, serif' }}>custom menu?</em>
          </h2>
          <p className='text-[#F5E6C8]/60 text-sm leading-relaxed mb-10 max-w-md'>
            We work with you to create a menu that perfectly fits your event,
            budget, and dietary needs.
          </p>
          <Link
            href='/contact'
            className='bg-[#F5E6C8] text-[#6B0F1A] text-sm font-medium px-10 py-4 rounded-full hover:bg-white transition-colors inline-block'
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  )
}
