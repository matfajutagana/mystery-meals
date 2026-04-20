'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ── easy edit ──────────────────────────────────────────────
const STORY = {
  image: '/chef.jpg',
  years: '5+',
  heading: 'Born from a passion\nfor great food.',
  paragraphs: [
    'Mystery Meals was born from a simple belief — that great food has the power to bring people together. What started as a passion for cooking has grown into a full-service catering company serving Milton, Ontario and the surrounding GTA.',
    'As an entrepreneur-led business, we specialise in meal prep, catering, private chef services, and corporate & private events. Every dish we prepare is made with fresh, locally sourced ingredients.',
    'We are proud to offer halal options and cater to a wide range of dietary needs, ensuring every guest at your table feels taken care of.',
  ],
}

const STATS = [
  { number: '500+', label: 'Events catered' },
  { number: '5+', label: 'Years experience' },
  { number: '98%', label: 'Happy clients' },
  { number: '4.9', label: 'Average rating' },
]

const VALUES = [
  {
    title: 'Fresh & local',
    desc: 'We source fresh, locally grown ingredients for every meal we prepare. Quality starts at the source.',
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
    title: 'Made with love',
    desc: "Every dish is prepared with care and attention to detail. We treat every event like it's our own.",
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
    desc: 'As a Milton-based business, we are proud to serve our community and give back whenever we can.',
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
    desc: 'We offer halal options and cater to all dietary needs — vegetarian, vegan, gluten-free and more.',
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
    desc: 'No two events are the same. We work closely with you to create a truly personalised experience.',
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

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const fade = (v, d = 0) =>
  `transition-all duration-700 ${d ? `delay-${d}` : ''} ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`

export default function About() {
  const [storyRef, storyInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [valuesRef, valuesInView] = useInView()

  return (
    <div className='bg-[#FAFAF8] pt-20'>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'>
        <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
          Who we are
        </p>
        <h1 className='text-4xl md:text-6xl font-light text-[#1a0408] leading-tight tracking-tight max-w-2xl'>
          About <em style={{ fontFamily: 'Georgia, serif' }}>Mystery Meals.</em>
        </h1>
        <p className='text-base text-[#6B0F1A]/50 mt-6 max-w-xl leading-relaxed'>
          A Milton-based catering company built on passion, quality, and a love
          for bringing people together through food.
        </p>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section
        ref={storyRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div
            className={`flex-1 transition-all duration-700 ${storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className='relative'>
              <Image
                src={STORY.image}
                alt='Our Story'
                width={500}
                height={600}
                className='rounded-2xl object-cover w-full h-[520px]'
              />
              <div className='absolute -bottom-5 -right-5 bg-[#6B0F1A] text-[#F5E6C8] rounded-xl px-6 py-5'>
                <div className='text-3xl font-light'>{STORY.years}</div>
                <div className='text-[10px] uppercase tracking-widest text-[#F5E6C8]/60 mt-1'>
                  Years of excellence
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 transition-all duration-700 delay-200 ${storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
              Our story
            </p>
            <h2
              className='text-3xl md:text-4xl font-light text-[#1a0408] leading-snug mb-8 tracking-tight'
              style={{ whiteSpace: 'pre-line' }}
            >
              {STORY.heading.split('\n')[0]}
              <br />
              <em style={{ fontFamily: 'Georgia, serif' }}>
                {STORY.heading.split('\n')[1]}
              </em>
            </h2>
            {STORY.paragraphs.map((p, i) => (
              <p
                key={i}
                className='text-sm text-[#6B0F1A]/60 leading-relaxed mb-5'
              >
                {p}
              </p>
            ))}
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 text-sm text-[#6B0F1A] font-medium border-b border-[#6B0F1A]/30 pb-0.5 hover:border-[#6B0F1A] transition-colors mt-2'
            >
              Work with us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section ref={statsRef} className='border-b border-[#6B0F1A]/10'>
        <div className='grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#6B0F1A]/10'>
          {STATS.map((s, i) => (
            <div key={i} className={`px-8 py-12 ${fade(statsInView, i * 100)}`}>
              <div className='text-4xl font-light text-[#6B0F1A] mb-2 tracking-tight'>
                {s.number}
              </div>
              <div className='text-[11px] uppercase tracking-[0.15em] text-[#6B0F1A]/40'>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section
        ref={valuesRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div className={`mb-14 ${fade(valuesInView)}`}>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-4'>
            What we stand for
          </p>
          <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] tracking-tight'>
            Our <em style={{ fontFamily: 'Georgia, serif' }}>values.</em>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-[#6B0F1A]/10 border border-[#6B0F1A]/10 rounded-2xl overflow-hidden'>
          {VALUES.map((v, i) => (
            <div
              key={i}
              className={`p-10 ${i >= 3 ? 'border-t border-[#6B0F1A]/10' : ''} ${fade(valuesInView, (i % 3) * 150)}`}
            >
              <div className='text-[#6B0F1A] mb-5'>{v.icon}</div>
              <h3 className='text-base font-medium text-[#1a0408] mb-3'>
                {v.title}
              </h3>
              <p className='text-sm text-[#6B0F1A]/60 leading-relaxed'>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Instagram ────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'>
        <div className='max-w-xl'>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
            Follow along
          </p>
          <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] mb-6 tracking-tight'>
            See our latest{' '}
            <em style={{ fontFamily: 'Georgia, serif' }}>creations.</em>
          </h2>
          <p className='text-sm text-[#6B0F1A]/60 leading-relaxed mb-8'>
            Behind the scenes, event highlights, and fresh dishes — follow us on
            Instagram.
          </p>
          <a
            href='https://www.instagram.com/mystery__meals/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-sm text-[#6B0F1A] font-medium border-b border-[#6B0F1A]/30 pb-0.5 hover:border-[#6B0F1A] transition-colors'
          >
            @mystery__meals ↗
          </a>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 bg-[#6B0F1A]'>
        <div className='max-w-2xl'>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#F5E6C8]/40 mb-6'>
            Get started
          </p>
          <h2 className='text-4xl md:text-5xl font-light text-white leading-tight mb-6 tracking-tight'>
            Let's create something{' '}
            <em style={{ fontFamily: 'Georgia, serif' }}>special.</em>
          </h2>
          <p className='text-[#F5E6C8]/60 text-sm leading-relaxed mb-10 max-w-md'>
            Whether it's an intimate dinner or a grand celebration, we'd love to
            be part of your story.
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
