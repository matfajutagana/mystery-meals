'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const menuSections = [
  {
    category: 'Artisan Welcome',
    icon: '🍞',
    items: [
      {
        name: 'Signature Bread Selection',
        desc: "Accompanied by the chef's selection of dipping oils & house-made spreads",
      },
    ],
  },
  {
    category: 'Seasonal Starter',
    icon: '🥗',
    items: [
      {
        name: "Chef's Garden Salad",
        desc: 'Served with house-crafted red wine vinaigrette & white balsamic vinaigrette',
      },
    ],
  },
  {
    category: 'Pasta Selection',
    icon: '🍝',
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
    icon: '🌿',
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
    icon: '🍗',
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
    icon: '🥩',
    items: [
      {
        name: 'Homemade Beef Lasagna',
        desc: 'Layered with savoury meat sauce & cheese',
      },
    ],
  },
  {
    category: 'Accompaniments',
    icon: '🍠',
    items: [
      {
        name: 'Roasted Sweet Potatoes',
        desc: 'Seasoned and oven roasted to perfection',
      },
    ],
  },
]

export default function Menu() {
  const [menuRef, menuInView] = useInView()
  const [noteRef, noteInView] = useInView()

  return (
    <div className='bg-[#FAFAF8]'>
      {/* Hero */}
      <section className='bg-[#6B0F1A] py-24 px-4 text-center'>
        <p className='uppercase tracking-widest text-[#F5E6C8]/60 text-sm mb-4'>
          What We Serve
        </p>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          Our Menu
        </h1>
        <p className='text-[#F5E6C8]/80 text-xl max-w-2xl mx-auto'>
          Fresh, delicious, and beautifully presented. Every dish is prepared
          with locally sourced ingredients on the day of your event.
        </p>
      </section>

      {/* Menu Note */}
      <section
        ref={noteRef}
        className={`py-12 px-4 transition-all duration-700 ${
          noteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className='max-w-3xl mx-auto bg-[#6B0F1A]/5 rounded-3xl p-8 text-center'>
          <p className='text-[#6B0F1A] font-medium text-lg'>
            🍽️ All menus are fully customizable to suit your event, dietary
            requirements, and preferences.
            <Link href='/contact' className='underline font-bold ml-1'>
              Contact us
            </Link>{' '}
            to create your perfect menu.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section ref={menuRef} className='py-16 px-4'>
        <div className='max-w-4xl mx-auto flex flex-col gap-12'>
          {menuSections.map((section, i) => (
            <div
              key={i}
              className={`transition-all duration-700 delay-${i * 100} ${
                menuInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Section Header */}
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-4xl'>{section.icon}</span>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-[#6B0F1A]'>
                    {section.category}
                  </h2>
                </div>
                <div className='flex-1 h-px bg-[#6B0F1A]/20 ml-4' />
              </div>

              {/* Items */}
              <div className='flex flex-col gap-4 pl-4'>
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex items-start justify-between gap-4'
                  >
                    <div>
                      <div className='flex items-center gap-3 mb-1'>
                        <h3 className='text-lg font-bold text-gray-800'>
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full ${
                              item.tag === 'Halal'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-[#6B0F1A]/10 text-[#6B0F1A]'
                            }`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className='text-gray-500'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Item */}
      <section className='py-16 px-4 bg-[#6B0F1A]/5'>
        <div className='max-w-4xl mx-auto text-center'>
          <span className='text-5xl mb-6 block'>🥟</span>
          <h2 className='text-3xl md:text-4xl font-bold text-[#6B0F1A] mb-4'>
            Our Signature Samosas
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-8'>
            Handcrafted with love, our signature samosas are a crowd favourite
            at every event. Available in various fillings, perfectly crispy on
            the outside and bursting with flavour inside.
          </p>
          <Link
            href='/contact'
            className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-10 py-4 rounded-full hover:bg-[#8B1A2A] transition inline-block'
          >
            Order for Your Event
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#6B0F1A] py-24 px-4 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Want a Custom Menu?
          </h2>
          <p className='text-[#F5E6C8]/80 text-xl mb-10'>
            We work with you to create a menu that perfectly fits your event,
            budget, and dietary needs.
          </p>
          <Link
            href='/contact'
            className='bg-[#F5E6C8] text-[#6B0F1A] font-bold px-12 py-5 rounded-full hover:bg-white transition text-xl inline-block'
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
