'use client'
import { useInView } from '@/lib/useInView'
import { LD, DT, fade } from '@/lib/siteConfig'

// ✏️ EASY EDIT
const STATS = [
  { number: '500+', label: 'Events catered' },
  { number: '5+', label: 'Years experience' },
  { number: '98%', label: 'Happy clients' },
  { number: '4.9', label: 'Average rating' },
]

export default function Stats() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} style={{ background: '#140308', ...DT }}>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {STATS.map((s, i) => (
          <div
            key={i}
            className={`px-8 py-12 ${fade(inView, i * 80)}`}
            style={{
              borderRight: '1px solid rgba(245,230,200,0.07)',
              borderBottom: i < 2 ? '1px solid rgba(245,230,200,0.07)' : 'none',
            }}
          >
            <div
              className={`text-4xl font-light text-[#F5E6C8] mb-2 tracking-tight ${fade(inView, i * 80)}`}
            >
              {s.number}
            </div>
            <div className={`${LD} ${fade(inView, i * 80 + 100)}`}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
