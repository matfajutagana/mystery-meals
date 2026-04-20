'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ── easy edit ──────────────────────────────────────────────
const SERVICES = [
  {
    image: '/event.jpg', // swap image here
    number: '01',
    tag: 'Weddings & Events',
    title: 'Wedding catering.',
    desc: 'Make your special day truly unforgettable. We provide elegant, customised catering for weddings of all sizes — from intimate ceremonies to grand receptions. Every dish is prepared fresh and presented beautifully.',
    features: [
      'Custom menu planning',
      'Full setup & cleanup',
      'Halal options available',
      'Dietary accommodations',
    ],
  },
  {
    image: '/corporate.jpg', // swap image here
    number: '02',
    tag: 'Corporate',
    title: 'Corporate events.',
    desc: "Impress your clients, partners, and team with professional catering that reflects your company's standards. We handle everything from boardroom lunches to large corporate galas.",
    features: [
      'Breakfast & lunch packages',
      'Boardroom setups',
      'Large scale events',
      'Professional presentation',
    ],
  },
  {
    image: '/chef.jpg', // swap image here
    number: '03',
    tag: 'Private Chef',
    title: 'Private chef service.',
    desc: 'Enjoy a restaurant-quality dining experience in the comfort of your own home. Our private chef service is perfect for dinner parties, date nights, or any special occasion.',
    features: [
      'In-home dining experience',
      'Custom menu creation',
      'Full kitchen cleanup',
      'Special occasion packages',
    ],
  },
  {
    image: '/menu.jpg', // swap image here
    number: '04',
    tag: 'Meal Prep',
    title: 'Weekly meal prep.',
    desc: 'Stay on track with your health and lifestyle goals. We prepare fresh, delicious, and nutritious meals for the week so you can focus on what matters most.',
    features: [
      'Weekly meal packages',
      'Custom dietary plans',
      'Fresh daily ingredients',
      'Delivery available',
    ],
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
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

function ServiceRow({ service, index }) {
  const [ref, inView] = useInView()
  const even = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 py-24 border-b border-[#6B0F1A]/10 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className='flex-1 w-full'>
        <Image
          src={service.image}
          alt={service.title}
          width={600}
          height={450}
          className='rounded-2xl object-cover w-full h-[380px] md:h-[440px]'
        />
      </div>

      {/* Text */}
      <div className='flex-1'>
        <div className='flex items-center gap-4 mb-6'>
          <span className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/30'>
            {service.number}
          </span>
          <div className='h-px flex-1 bg-[#6B0F1A]/10 max-w-[40px]' />
          <span className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/30'>
            {service.tag}
          </span>
        </div>

        <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] mb-6 leading-snug tracking-tight'>
          <em style={{ fontFamily: 'Georgia, serif' }}>{service.title}</em>
        </h2>

        <p className='text-sm text-[#6B0F1A]/60 leading-relaxed mb-8'>
          {service.desc}
        </p>

        <ul className='flex flex-col gap-3 mb-10'>
          {service.features.map((f, i) => (
            <li key={i} className='flex items-center gap-3'>
              <svg
                viewBox='0 0 16 16'
                fill='none'
                stroke='#6B0F1A'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4 flex-shrink-0 opacity-60'
              >
                <path d='M3 8l3.5 3.5L13 4' />
              </svg>
              <span className='text-sm text-[#6B0F1A]/60'>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href='/contact'
          className='inline-flex items-center gap-2 text-sm text-[#6B0F1A] font-medium border-b border-[#6B0F1A]/30 pb-0.5 hover:border-[#6B0F1A] transition-colors'
        >
          Get a quote →
        </Link>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className='bg-[#FAFAF8] pt-20'>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'>
        <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
          What we offer
        </p>
        <h1 className='text-4xl md:text-6xl font-light text-[#1a0408] leading-tight tracking-tight max-w-xl'>
          Our <em style={{ fontFamily: 'Georgia, serif' }}>services.</em>
        </h1>
        <p className='text-base text-[#6B0F1A]/50 mt-6 max-w-xl leading-relaxed'>
          From intimate private dinners to large corporate events — we bring
          passion and professionalism to every occasion.
        </p>
      </section>

      {/* ── Services list ────────────────────────────────── */}
      <section className='px-6 md:px-16'>
        {SERVICES.map((service, i) => (
          <ServiceRow key={i} service={service} index={i} />
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 bg-[#6B0F1A]'>
        <div className='max-w-2xl'>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#F5E6C8]/40 mb-6'>
            Get started
          </p>
          <h2 className='text-4xl md:text-5xl font-light text-white leading-tight mb-6 tracking-tight'>
            Ready to{' '}
            <em style={{ fontFamily: 'Georgia, serif' }}>get started?</em>
          </h2>
          <p className='text-[#F5E6C8]/60 text-sm leading-relaxed mb-10 max-w-md'>
            Contact us today for a free consultation. We'd love to be part of
            your next event.
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
