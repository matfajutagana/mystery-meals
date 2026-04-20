'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ── easy edit ──────────────────────────────────────────────
const SERVICES = [
  {
    image: '/event.jpg',
    number: '01',
    tag: 'Weddings & Events',
    title: 'Wedding catering.',
    desc: 'Make your special day truly unforgettable. We provide elegant, customised catering for weddings of all sizes — from intimate ceremonies to grand receptions.',
    features: [
      'Custom menu planning',
      'Full setup & cleanup',
      'Halal options available',
      'Dietary accommodations',
    ],
    price: 'From $45 / person',
  },
  {
    image: '/corporate.jpg',
    number: '02',
    tag: 'Corporate',
    title: 'Corporate events.',
    desc: 'Impress your clients, partners, and team with professional catering that reflects your standards. From boardroom lunches to large corporate galas.',
    features: [
      'Breakfast & lunch packages',
      'Boardroom setups',
      'Large scale events',
      'Professional presentation',
    ],
    price: 'From $35 / person',
  },
  {
    image: '/chef.jpg',
    number: '03',
    tag: 'Private Chef',
    title: 'Private chef service.',
    desc: 'Enjoy a restaurant-quality dining experience in the comfort of your own home. Perfect for dinner parties, date nights, or any special occasion.',
    features: [
      'In-home dining experience',
      'Custom menu creation',
      'Full kitchen cleanup',
      'Special occasion packages',
    ],
    price: 'Custom pricing',
  },
  {
    image: '/menu.jpg',
    number: '04',
    tag: 'Meal Prep',
    title: 'Weekly meal prep.',
    desc: 'Stay on track with your health goals. We prepare fresh, delicious, and nutritious meals for the week so you can focus on what matters most.',
    features: [
      'Weekly meal packages',
      'Custom dietary plans',
      'Fresh daily ingredients',
      'Delivery available',
    ],
    price: 'From $15 / meal',
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
      { threshold: 0.08 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

function ServiceBlock({ service, index }) {
  const [ref, inView] = useInView()
  const even = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 py-24`}
      style={{ borderBottom: '1px solid rgba(245,230,200,0.07)' }}
    >
      {/* Image */}
      <div className={`flex-1 w-full ${slideL(inView, 0)}`}>
        <div className='relative overflow-hidden rounded-2xl'>
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={500}
            className='object-cover w-full h-[380px] md:h-[460px] opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700'
          />
          {/* Price tag on image */}
          <div
            className={`absolute top-6 ${even ? 'right-6' : 'left-6'} rounded-full px-4 py-2 ${fade(inView, 400)}`}
            style={{
              background: 'rgba(20,3,8,0.8)',
              border: '1px solid rgba(245,230,200,0.15)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className='text-xs text-[#F5E6C8]/70'>{service.price}</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className='flex-1'>
        <div className={`flex items-center gap-3 mb-6 ${fade(inView, 0)}`}>
          <span className={LABEL_DARK}>{service.number}</span>
          <div
            className='h-px w-8'
            style={{ background: 'rgba(245,230,200,0.1)' }}
          />
          <span className={LABEL_DARK}>{service.tag}</span>
        </div>

        <h2
          className={`text-3xl md:text-4xl font-light text-[#F5E6C8] mb-6 leading-snug tracking-tight ${slideR(inView, 100)}`}
        >
          <em style={serif}>{service.title}</em>
        </h2>

        <p
          className={`text-sm text-[#F5E6C8]/40 leading-relaxed mb-8 ${fade(inView, 200)}`}
        >
          {service.desc}
        </p>

        <ul className='flex flex-col gap-3 mb-10'>
          {service.features.map((f, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 ${fade(inView, 280 + i * 60)}`}
            >
              <svg
                viewBox='0 0 16 16'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4 flex-shrink-0 text-[#F5E6C8]/25'
              >
                <path d='M3 8l3.5 3.5L13 4' />
              </svg>
              <span className='text-sm text-[#F5E6C8]/45'>{f}</span>
            </li>
          ))}
        </ul>

        <div className={fade(inView, 500)}>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 text-sm text-[#F5E6C8]/60 font-medium border-b border-[#F5E6C8]/20 pb-0.5 hover:text-[#F5E6C8] hover:border-[#F5E6C8]/50 transition-colors'
          >
            Get a quote →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [heroRef, heroInView] = useInView()
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
          What we offer
        </p>
        <h1
          className={`text-4xl md:text-6xl font-light text-[#F5E6C8] leading-tight tracking-tight max-w-xl ${fade(heroInView, 100)}`}
        >
          Our <em style={serif}>services.</em>
        </h1>
        <p
          className={`text-base text-[#F5E6C8]/40 mt-6 max-w-xl leading-relaxed ${fade(heroInView, 220)}`}
        >
          From intimate private dinners to large corporate events — we bring
          passion and professionalism to every occasion.
        </p>

        {/* Quick nav — like JP Studios' service tabs */}
        <div className={`flex flex-wrap gap-3 mt-10 ${fade(heroInView, 340)}`}>
          {SERVICES.map((s) => (
            <button
              key={s.number}
              onClick={() => {
                document
                  .getElementById(`service-${s.number}`)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }}
              className='text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full border transition-colors text-[#F5E6C8]/40 hover:text-[#F5E6C8]/80'
              style={{
                borderColor: 'rgba(245,230,200,0.12)',
                background: 'rgba(245,230,200,0.03)',
              }}
            >
              {s.tag}
            </button>
          ))}
        </div>
      </section>

      {/* ── Services list ────────────────────────────────── */}
      <section className='px-6 md:px-16' style={{ background: '#180306' }}>
        {SERVICES.map((service, i) => (
          <div key={i} id={`service-${service.number}`}>
            <ServiceBlock service={service} index={i} />
          </div>
        ))}
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
            Ready to <em style={serif}>get started?</em>
          </h2>
          <p
            className={`text-[#3a0508]/50 text-sm leading-relaxed mb-10 max-w-md ${fade(ctaInView, 220)}`}
          >
            Contact us today for a free consultation. We'd love to be part of
            your next event.
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
