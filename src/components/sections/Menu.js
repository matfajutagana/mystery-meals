'use client'
import { useInView } from '@/lib/useInView'
import { LD, serif, DB, fade } from '@/lib/siteConfig'

// ✏️ EASY EDIT — add/remove categories and items freely
const MENU = [
  {
    category: 'Artisan Welcome',
    items: [
      {
        name: 'Signature Bread Selection',
        desc: "Chef's dipping oils & house-made spreads",
      },
    ],
  },
  {
    category: 'Seasonal Starter',
    items: [
      {
        name: "Chef's Garden Salad",
        desc: 'Red wine vinaigrette & white balsamic',
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
      { name: 'Chicken Ravioli', desc: 'Creamy rosé sauce, grated parmesan' },
    ],
  },
  {
    category: 'Chicken Feature',
    items: [
      {
        name: 'Chicken Parmesan',
        desc: 'Roasted tomato sauce & melted mozzarella',
        tag: 'Halal',
      },
    ],
  },
  {
    category: 'Beef Feature',
    items: [
      { name: 'Homemade Beef Lasagna', desc: 'Savoury meat sauce & cheese' },
    ],
  },
  {
    category: 'Signature Item',
    items: [
      {
        name: 'Handcrafted Samosas',
        desc: 'Crowd favourite — various fillings available',
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

const tagPill = (tag) =>
  tag === 'Halal'
    ? 'text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full bg-green-900/40 text-green-400 border border-green-800/50'
    : 'text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full border border-[#F5E6C8]/15 text-[#F5E6C8]/40'

export default function Menu() {
  const [ref, inView] = useInView()

  return (
    <section
      id='menu'
      ref={ref}
      className='px-6 md:px-16 py-28'
      style={{ background: '#180306', ...DB }}
    >
      <div className='mb-12'>
        <p className={`${LD} mb-4 ${fade(inView, 0)}`}>What we serve</p>
        <h2
          className={`text-3xl md:text-4xl font-light text-white tracking-tight ${fade(inView, 100)}`}
        >
          Our <em style={serif}>menu.</em>
        </h2>
        <p
          className={`text-sm text-[#F5E6C8]/50 mt-4 max-w-lg leading-relaxed ${fade(inView, 180)}`}
        >
          All menus are fully customisable.{' '}
          <a
            href='#contact'
            className='text-[#F5E6C8]/70 underline underline-offset-2 hover:text-[#F5E6C8] transition-colors'
          >
            Contact us
          </a>{' '}
          to build your perfect menu.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16'>
        {MENU.map((section, i) => (
          <div
            key={i}
            className={`py-8 ${fade(inView, 250 + i * 70)}`}
            style={DB}
          >
            <p className={`${LD} mb-4`}>{section.category}</p>
            <div className='flex flex-col gap-4'>
              {section.items.map((item, j) => (
                <div key={j}>
                  <div className='flex items-center gap-3 mb-1 flex-wrap'>
                    <h3 className='text-base font-light text-[#F5E6C8]/90'>
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className={tagPill(item.tag)}>{item.tag}</span>
                    )}
                  </div>
                  <p className='text-sm text-[#F5E6C8]/55 leading-relaxed'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
