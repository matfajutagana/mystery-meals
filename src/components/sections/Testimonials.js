'use client'
import { useInView } from '@/lib/useInView'
import { LD, serif, DB, fade } from '@/lib/siteConfig'

// ✏️ EASY EDIT — add/remove testimonials freely
const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    text: 'Mystery Meals made our wedding absolutely perfect. The food was incredible and the service was flawless!',
  },
  {
    name: 'James T.',
    text: "Best corporate catering we've ever had. Our clients were thoroughly impressed. Will book again!",
  },
  {
    name: 'Priya K.',
    text: 'They catered our family reunion and everyone is still talking about the food. Highly recommend!',
  },
  {
    name: 'Marcus L.',
    text: 'Professional, punctual, and the food was outstanding. Mystery Meals exceeded every expectation.',
  },
  {
    name: 'Linda R.',
    text: 'From the first consultation to the last bite, everything was perfect. True professionals!',
  },
  {
    name: 'David C.',
    text: "The attention to detail was next level. Our guests couldn't stop complimenting the meal.",
  },
  {
    name: 'Aisha K.',
    text: 'Loved that they had halal options. Everything was fresh and beautifully presented.',
  },
  {
    name: 'Tom W.',
    text: 'Chef Roven and the team went above and beyond. Our corporate event was a huge hit.',
  },
]

function Card({ t, style }) {
  return (
    <div
      className='flex flex-col flex-shrink-0'
      style={{
        width: '280px',
        padding: '20px 24px',
        borderRadius: '12px',
        background: 'transparent',
        border:
          style === 'dim'
            ? '1px solid rgba(245,230,200,0.05)'
            : '1px solid rgba(245,230,200,0.08)',
      }}
    >
      {/* Text wraps naturally inside the fixed-width card */}
      <p
        className='text-xs leading-relaxed mb-3 flex-1'
        style={{
          color:
            style === 'dim'
              ? 'rgba(245,230,200,0.55)'
              : 'rgba(245,230,200,0.70)',
        }}
      >
        "{t.text}"
      </p>
      <div className='flex items-center gap-3 mt-auto'>
        <div
          className='w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium text-[#F5E6C8] flex-shrink-0'
          style={{ background: '#6B0F1A' }}
        >
          {t.name[0]}
        </div>
        <div>
          <div
            className='text-sm font-medium'
            style={{
              color:
                style === 'dim'
                  ? 'rgba(245,230,200,0.70)'
                  : 'rgba(245,230,200,0.90)',
            }}
          >
            {t.name}
          </div>
          <div
            className='text-xs mt-0.5'
            style={{
              color:
                style === 'dim'
                  ? 'rgba(234,179,8,0.50)'
                  : 'rgba(234,179,8,0.70)',
            }}
          >
            ★★★★★
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [ref, inView] = useInView()
  const reversed = [...TESTIMONIALS].reverse()

  return (
    <section
      ref={ref}
      className='py-28'
      style={{ background: '#140308', ...DB }}
    >
      <div className='px-6 md:px-16 mb-12'>
        <p className={`${LD} mb-4 ${fade(inView, 0)}`}>Testimonials</p>
        <h2
          className={`text-3xl md:text-4xl font-light text-white tracking-tight ${fade(inView, 120)}`}
        >
          What our <em style={serif}>clients say.</em>
        </h2>
      </div>

      {/* ── Row 1: mobile = swipeable, desktop = auto-scroll left ── */}
      <div className={`mb-4 ${fade(inView, 200)}`}>
        {/* Mobile: horizontal scroll with touch */}
        <div
          className='flex gap-4 overflow-x-auto no-scrollbar pb-2 md:hidden px-6'
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} t={t} style='bright' />
          ))}
        </div>
        {/* Desktop: infinite auto-scroll left */}
        <div className='hidden md:block overflow-hidden'>
          <div
            className='flex gap-4 pl-16 animate-marquee-left'
            style={{ width: 'max-content' }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <Card key={i} t={t} style='bright' />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
