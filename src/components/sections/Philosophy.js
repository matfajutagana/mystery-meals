'use client'
import { useInView } from '@/lib/useInView'
import { LL, serif, fade } from '@/lib/siteConfig'

// ✏️ EASY EDIT
const QUOTE =
  '"Every event deserves a meal worth remembering. We don\'t do shortcuts, templates, or rushed prep."'
const AUTHOR = '— Mystery Meals'

export default function Philosophy() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className='px-6 md:px-16 py-28'
      style={{ background: '#F5E6C8' }}
    >
      <div className='max-w-2xl'>
        <p className={`${LL} mb-8 ${fade(inView, 0)}`}>Our philosophy</p>
        <blockquote
          className={`border-l-2 border-[#6B0F1A] pl-8 ${fade(inView, 150)}`}
        >
          <p
            className='text-2xl md:text-3xl font-light leading-relaxed text-[#1a0408] mb-6'
            style={{ ...serif, fontStyle: 'italic' }}
          >
            {QUOTE}
          </p>
          <cite className={`${LL} not-italic ${fade(inView, 300)}`}>
            {AUTHOR}
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
