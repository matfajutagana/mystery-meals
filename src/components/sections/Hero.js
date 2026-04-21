'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LD, serif } from '@/lib/siteConfig'

// ✏️ EASY EDIT — swap/add hero images
const SLIDES = [
  { image: '/hero-1.jpg' },
  { image: '/hero-2.jpg' },
  { image: '/hero-3.jpg' },
  { image: '/hero-4.jpg' },
]
const DISPLAY_TIME = 4000 // was 5000
const FADE_DURATION = 1000 // was 1200

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, DISPLAY_TIME) // was DISPLAY_TIME + FADE_DURATION
    return () => clearInterval(t)
  }, [])
  const goTo = (i) => setCurrent(i)

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden'
    >
      {/* All slides stacked — only the active one is visible */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className='absolute inset-0'
          style={{
            zIndex: 1,
            opacity: i === current ? 1 : 0,
            transition:
              i === 0 && current === 0
                ? 'none'
                : `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        >
          <Image
            src={slide.image}
            alt=''
            fill
            className='object-cover'
            style={{ opacity: 0.5 }}
            priority={true} // preload all images
          />
        </div>
      ))}

      {/* Gradient */}
      <div
        className='absolute inset-0 bg-gradient-to-t from-[#140308] via-[#140308]/40 to-transparent'
        style={{ zIndex: 2 }}
      />

      {/* Dot indicators */}
      <div className='absolute bottom-8 left-6 md:left-16 flex items-center gap-2 z-20'>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className='transition-all duration-500 rounded-full'
            style={{
              width: i === current ? '24px' : '6px',
              height: '2px',
              background:
                i === current
                  ? 'rgba(245,230,200,0.8)'
                  : 'rgba(245,230,200,0.25)',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className='absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 text-[#F5E6C8]/30 z-20 hero-animate'
        style={{ animationDelay: '900ms' }}
      >
        <span
          className='text-[10px] uppercase tracking-widest'
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className='w-px h-12 bg-[#F5E6C8]/25 animate-pulse' />
      </div>

      {/* Hero text */}
      <div className='relative px-6 md:px-16 max-w-5xl' style={{ zIndex: 10 }}>
        <p
          className={`${LD} mb-6 hero-animate`}
          style={{ animationDelay: '100ms' }}
        >
          Milton, Ontario
        </p>
        <h1
          className='text-5xl md:text-7xl font-light text-white leading-[1.05] mb-8 tracking-tight hero-animate'
          style={{ animationDelay: '300ms' }}
        >
          Catering that leaves a<br />
          <em className='text-[#F5E6C8]' style={serif}>
            lasting impression.
          </em>
        </h1>
        <p
          className='text-[#F5E6C8]/65 text-lg max-w-xl mb-10 leading-relaxed hero-animate'
          style={{ animationDelay: '500ms' }}
        >
          Premium catering for weddings, corporate events, and special occasions
          across Milton and the GTA.
        </p>
        <div
          className='flex flex-col sm:flex-row gap-4 hero-animate'
          style={{ animationDelay: '700ms' }}
        >
          <a
            href='#contact'
            className='bg-[#F5E6C8] text-[#3a0508] text-sm font-medium px-8 py-4 rounded-full hover:bg-white transition-colors text-center'
          >
            Get a free quote
          </a>
          <a
            href='#services'
            className='border border-[#F5E6C8]/30 text-[#F5E6C8]/80 text-sm font-medium px-8 py-4 rounded-full hover:border-[#F5E6C8]/60 hover:text-[#F5E6C8] transition-colors text-center'
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  )
}
