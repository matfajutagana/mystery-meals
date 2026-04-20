'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ── easy edit ──────────────────────────────────────────────
const CHEF = {
  name: 'Chef Roven',
  image: '/chef.jpg', // swap to a photo of Chef Roven
  role: 'Founder & Head Chef',
  quote:
    '"Food is how we show love. Every dish we prepare carries that intention."',
  bio: [
    'Mystery Meals is a family business, and at its heart is Chef Roven — whose love for food and people turned a personal passion into a full-service catering company serving Milton, Ontario and the GTA.',
    'What started at family dinners and community gatherings has grown into something much bigger. Chef Roven leads every menu, every preparation, and every event with the same care he brings to cooking for the people he loves.',
    'With a focus on fresh, locally sourced ingredients and a genuine commitment to making every guest feel taken care of — halal options included — Mystery Meals is built on the belief that great food brings people together.',
  ],
}

const STATS = [
  { number: '500+', label: 'Events catered' },
  { number: '5+', label: 'Years of excellence' },
  { number: '98%', label: 'Happy clients' },
  { number: '4.9', label: 'Average rating' },
]

const VALUES = [
  {
    title: 'Fresh & local',
    desc: 'We source fresh, locally grown ingredients for every meal. Quality starts at the source.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-6 h-6'
      >
        <path d='M16 28V16M16 16C16 10 8 6 8 6s0 8 8 10zM16 16c0-6 8-10 8-10s0 8-8 10z' />
      </svg>
    ),
  },
  {
    title: 'Family made',
    desc: 'This is a family business through and through. Every event is personal to us.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-6 h-6'
      >
        <path d='M16 27S5 20 5 12a6 6 0 0111-3.35A6 6 0 0127 12c0 8-11 15-11 15z' />
      </svg>
    ),
  },
  {
    title: 'Community first',
    desc: 'Milton is home. We are proud to serve our community and give back whenever we can.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-6 h-6'
      >
        <circle cx='16' cy='16' r='11' />
        <path d='M16 5C16 5 10 10 10 16s6 11 6 11M16 5c0 0 6 5 6 11s-6 11-6 11M5 16h22' />
      </svg>
    ),
  },
  {
    title: 'Inclusive menus',
    desc: 'Halal options, vegetarian, vegan, gluten-free — every guest at your table feels welcome.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-6 h-6'
      >
        <path d='M6 16l7 7L26 9' />
      </svg>
    ),
  },
  {
    title: 'Attention to detail',
    desc: 'From presentation to punctuality, we sweat the small stuff so your event runs perfectly.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-6 h-6'
      >
        <circle cx='16' cy='16' r='3' />
        <path d='M16 5v3M16 24v3M5 16h3M24 16h3M8.1 8.1l2.1 2.1M21.8 21.8l2.1 2.1M8.1 23.9l2.1-2.1M21.8 10.2l2.1-2.1' />
      </svg>
    ),
  },
  {
    title: 'Custom experiences',
    desc: 'No two events are the same. We work closely with you to craft something truly yours.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-6 h-6'
      >
        <path d='M12 20h8M10 16h12M8 12h16M6 8h20' />
      </svg>
    ),
  },
]
// ──────────────────────────────────────────────────────────

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }
const LABEL_DARK = 'text-[11px] uppercase tracking-[0.22em] text-[#F5E6C8]/30'
const LABEL_LIGHT = 'text-[11px] uppercase tracking-[0.22em] text-[#6B0F1A]/35'
const T =
  'transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
const fade = (v, d = 0) =>
  `${T} ${d ? `delay-[${d}ms]` : ''} ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`
const slideL = (v, d = 0) =>
  `${T} ${d ? `delay-[${d}ms]` : ''} ${v ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`
const slideR = (v, d = 0) =>
  `${T} ${d ? `delay-[${d}ms]` : ''} ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`

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

export default function About() {
  const [heroRef, heroInView] = useInView()
  const [chefRef, chefInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [igRef, igInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <div className='pt-20' style={{ background: '#140308' }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className='px-6 md:px-16 py-24'
        style={{ borderBottom: '1px solid rgba(245,230,200,0.07)' }}
      >
        <p className={`${LABEL_DARK} mb-5 ${fade(heroInView, 0)}`}>
          Who we are
        </p>
        <h1
          className={`text-4xl md:text-6xl font-light text-[#F5E6C8] leading-tight tracking-tight max-w-2xl ${fade(heroInView, 100)}`}
        >
          About <em style={serif}>Mystery Meals.</em>
        </h1>
        <p
          className={`text-base text-[#F5E6C8]/40 mt-6 max-w-xl leading-relaxed ${fade(heroInView, 220)}`}
        >
          A Milton-based family catering business built on passion, quality, and
          a love for bringing people together through food.
        </p>
      </section>

      {/* ── Chef Roven — the face ─────────────────────────── */}
      <section
        ref={chefRef}
        className='px-6 md:px-16 py-24'
        style={{
          background: '#180306',
          borderBottom: '1px solid rgba(245,230,200,0.07)',
        }}
      >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          {/* Photo */}
          <div className={`flex-1 ${slideL(chefInView, 0)}`}>
            <div className='relative'>
              <Image
                src={CHEF.image}
                alt={CHEF.name}
                width={500}
                height={600}
                className='rounded-2xl object-cover w-full h-[540px]'
              />
              {/* Name badge on photo */}
              <div
                className={`absolute bottom-6 left-6 rounded-xl px-5 py-4 ${fade(chefInView, 400)}`}
                style={{
                  background: 'rgba(20,3,8,0.85)',
                  border: '1px solid rgba(245,230,200,0.12)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className='text-base font-medium text-[#F5E6C8]'>
                  {CHEF.name}
                </div>
                <div className='text-[10px] uppercase tracking-widest text-[#F5E6C8]/40 mt-0.5'>
                  {CHEF.role}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className='flex-1'>
            <p className={`${LABEL_DARK} mb-5 ${fade(chefInView, 80)}`}>
              The face behind the food
            </p>

            {/* Pull quote */}
            <blockquote
              className={`border-l-2 border-[#6B0F1A]/60 pl-6 mb-8 ${fade(chefInView, 160)}`}
            >
              <p
                className='text-xl md:text-2xl font-light text-[#F5E6C8]/80 leading-relaxed'
                style={{ ...serif, fontStyle: 'italic' }}
              >
                {CHEF.quote}
              </p>
            </blockquote>

            {CHEF.bio.map((p, i) => (
              <p
                key={i}
                className={`text-sm text-[#F5E6C8]/40 leading-relaxed mb-5 ${fade(chefInView, 260 + i * 100)}`}
              >
                {p}
              </p>
            ))}

            <div className={fade(chefInView, 560)}>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 text-sm text-[#F5E6C8]/60 font-medium border-b border-[#F5E6C8]/20 pb-0.5 hover:text-[#F5E6C8] hover:border-[#F5E6C8]/50 transition-colors mt-2'
              >
                Work with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section
        ref={statsRef}
        style={{ borderBottom: '1px solid rgba(245,230,200,0.07)' }}
      >
        <div className='grid grid-cols-2 md:grid-cols-4'>
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`px-8 py-12 ${fade(statsInView, i * 80)}`}
              style={{
                borderRight: '1px solid rgba(245,230,200,0.07)',
                borderBottom:
                  i < 2 ? '1px solid rgba(245,230,200,0.07)' : 'none',
              }}
            >
              <div
                className={`text-4xl font-light text-[#F5E6C8] mb-2 tracking-tight ${fade(statsInView, i * 80)}`}
              >
                {s.number}
              </div>
              <div
                className={`${LABEL_DARK} ${fade(statsInView, i * 80 + 100)}`}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section
        ref={valuesRef}
        className='px-6 md:px-16 py-24'
        style={{
          background: '#180306',
          borderBottom: '1px solid rgba(245,230,200,0.07)',
        }}
      >
        <div className='mb-14'>
          <p className={`${LABEL_DARK} mb-4 ${fade(valuesInView, 0)}`}>
            What we stand for
          </p>
          <h2
            className={`text-3xl md:text-4xl font-light text-[#F5E6C8] tracking-tight ${fade(valuesInView, 100)}`}
          >
            Our <em style={serif}>values.</em>
          </h2>
        </div>
        <div
          className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rounded-2xl overflow-hidden border'
          style={{ borderColor: 'rgba(245,230,200,0.08)' }}
        >
          {VALUES.map((v, i) => (
            <div
              key={i}
              className='p-10'
              style={{ borderColor: 'rgba(245,230,200,0.08)' }}
            >
              <div
                className={`text-[#F5E6C8]/40 mb-5 ${fade(valuesInView, 200 + i * 80)}`}
              >
                {v.icon}
              </div>
              <h3
                className={`text-base font-medium text-[#F5E6C8]/90 mb-3 ${fade(valuesInView, 270 + i * 80)}`}
              >
                {v.title}
              </h3>
              <p
                className={`text-sm text-[#F5E6C8]/35 leading-relaxed ${fade(valuesInView, 340 + i * 80)}`}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Instagram ────────────────────────────────────── */}
      <section
        ref={igRef}
        className='px-6 md:px-16 py-24'
        style={{ borderBottom: '1px solid rgba(245,230,200,0.07)' }}
      >
        <div className='max-w-xl'>
          <p className={`${LABEL_DARK} mb-5 ${fade(igInView, 0)}`}>
            Follow along
          </p>
          <h2
            className={`text-3xl md:text-4xl font-light text-[#F5E6C8] mb-6 tracking-tight ${fade(igInView, 100)}`}
          >
            See our latest <em style={serif}>creations.</em>
          </h2>
          <p
            className={`text-sm text-[#F5E6C8]/40 leading-relaxed mb-8 ${fade(igInView, 200)}`}
          >
            Behind the scenes, event highlights, and fresh dishes — follow us on
            Instagram.
          </p>
          <div className={fade(igInView, 300)}>
            <a
              href='https://www.instagram.com/mystery__meals/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-sm text-[#F5E6C8]/60 font-medium border-b border-[#F5E6C8]/20 pb-0.5 hover:text-[#F5E6C8] hover:border-[#F5E6C8]/50 transition-colors'
            >
              @mystery__meals ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className='px-6 md:px-16 py-24'
        style={{ background: '#F5E6C8' }}
      >
        <div className='max-w-2xl'>
          <p className={`${LABEL_LIGHT} mb-6 ${fade(ctaInView, 0)}`}>
            Get started
          </p>
          <h2
            className={`text-4xl md:text-5xl font-light text-[#1a0408] leading-tight mb-6 tracking-tight ${fade(ctaInView, 100)}`}
          >
            Let's create something <em style={serif}>special.</em>
          </h2>
          <p
            className={`text-[#3a0508]/50 text-sm leading-relaxed mb-10 max-w-md ${fade(ctaInView, 220)}`}
          >
            Whether it's an intimate dinner or a grand celebration, we'd love to
            be part of your story.
          </p>
          <div className={fade(ctaInView, 340)}>
            <Link
              href='/contact'
              className='text-sm font-medium px-10 py-4 rounded-full transition-colors inline-block text-[#F5E6C8]'
              style={{ background: '#6B0F1A' }}
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
