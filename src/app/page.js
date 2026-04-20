'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// ============================================================
//  EASY EDIT ZONE — swap text, images, prices, testimonials
// ============================================================

const HERO = {
  location: 'Milton, Ontario',
  heading: ['Catering that leaves a', 'lasting impression.'],
  subheading:
    'Premium catering for weddings, corporate events, and special occasions across Milton and the GTA.',
  image: '/hero.jpg',
}

const STATS = [
  { number: '500+', label: 'Events catered' },
  { number: '5+', label: 'Years experience' },
  { number: '98%', label: 'Happy clients' },
  { number: '4.9', label: 'Average rating' },
]

const PHILOSOPHY = {
  quote:
    '"Every event deserves a meal worth remembering. We don\'t do shortcuts, templates, or rushed prep."',
  author: '— Mystery Meals',
}

const WHY_US = [
  {
    title: 'Fresh ingredients',
    desc: 'Locally sourced, prepared the day of your event. No shortcuts, no compromises.',
    // SVG path for icon
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-7 h-7 text-[#6B0F1A]'
      >
        <path d='M16 28V16M16 16C16 10 8 6 8 6s0 8 8 10zM16 16c0-6 8-10 8-10s0 8-8 10z' />
      </svg>
    ),
  },
  {
    title: 'Expert chefs',
    desc: 'Years of experience and a genuine passion for food in every dish we prepare.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-7 h-7 text-[#6B0F1A]'
      >
        <path d='M10 14H22M10 18H18M8 24h16a2 2 0 002-2V10a6 6 0 00-12 0 6 6 0 00-8 0v12a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    title: 'Reliable service',
    desc: 'From setup to cleanup, we handle everything so you can enjoy your event.',
    icon: (
      <svg
        viewBox='0 0 32 32'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='w-7 h-7 text-[#6B0F1A]'
      >
        <path d='M6 16l7 7L26 9' />
      </svg>
    ),
  },
]

const CHEF = {
  image: '/chef.jpg', // swap image here
  years: '5+',
  tag: 'Our Story',
  heading: 'Passion for food,\ndedication to excellence.',
  paragraphs: [
    'At Mystery Meals, we believe every meal tells a story. Our team of professional chefs brings years of experience and a love for food to every event we cater.',
    'Based in Milton, Ontario, we are proud to serve our community with fresh, delicious, and beautifully presented meals for any occasion.',
  ],
  cta: { label: 'Learn more about us', href: '/about' },
}

const SERVICES = [
  {
    tag: 'Weddings & Events',
    title: 'Wedding catering',
    desc: 'Make your special day unforgettable with elegant, customised menus designed around you.',
    price: 'From $45 / person',
    image: '/event.jpg', // swap image here
    href: '/services',
  },
  {
    tag: 'Corporate',
    title: 'Corporate events',
    desc: 'Impress clients and teams with professional, sophisticated catering built around your schedule.',
    price: 'From $35 / person',
    image: '/corporate.jpg', // swap image here
    href: '/services',
  },
]

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
    text: "The attention to detail and quality of food was next level. Our guests couldn't stop complimenting the meal.",
  },
]

const MENU = {
  tag: 'Food',
  heading: 'Explore our menu.',
  paragraphs: [
    'From elegant plated dinners to casual buffets, our menu is designed to delight every palate with customisable options for any dietary need.',
    'All dishes are prepared fresh on the day of your event using seasonal, locally sourced ingredients.',
  ],
  cta: { label: 'View full menu', href: '/menu' },
  image: '/menu.jpg', // swap image here
}

const CTA = {
  heading: 'Ready to plan\nyour next event?',
  sub: 'Contact us today for a free consultation and quote. Serving Milton, Ontario and surrounding areas.',
  cta: { label: 'Get a free quote', href: '/contact' },
  image: '/event.jpg', // swap image here
}

// ============================================================
//  Helpers
// ============================================================

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const fade = (inView, delay = 0) =>
  `transition-all duration-700 ${delay ? `delay-${delay}` : ''} ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`

const slideLeft = (inView, delay = 0) =>
  `transition-all duration-700 ${delay ? `delay-${delay}` : ''} ${
    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
  }`

const slideRight = (inView, delay = 0) =>
  `transition-all duration-700 ${delay ? `delay-${delay}` : ''} ${
    inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
  }`

// ============================================================
//  Page
// ============================================================

export default function Home() {
  const [statsRef, statsInView] = useInView()
  const [quoteRef, quoteInView] = useInView()
  const [whyRef, whyInView] = useInView()
  const [chefRef, chefInView] = useInView()
  const [svcRef, svcInView] = useInView()
  const [menuRef, menuInView] = useInView()

  return (
    <div className='bg-[#FAFAF8] overflow-x-hidden'>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className='relative min-h-screen flex items-end pb-20 md:pb-28'>
        <Image
          src={HERO.image}
          alt='Hero'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#1a0408]/90 via-[#6B0F1A]/50 to-[#6B0F1A]/30' />

        <div className='relative z-10 px-6 md:px-16 max-w-5xl'>
          <p className='text-[11px] uppercase tracking-[0.25em] text-[#F5E6C8]/50 mb-6'>
            {HERO.location}
          </p>
          <h1 className='text-5xl md:text-7xl font-light text-white leading-[1.05] mb-8 tracking-tight'>
            {HERO.heading[0]}
            <br />
            <em
              className='font-normal italic'
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {HERO.heading[1]}
            </em>
          </h1>
          <p className='text-[#F5E6C8]/70 text-lg max-w-xl mb-10 leading-relaxed'>
            {HERO.subheading}
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link
              href='/contact'
              className='bg-[#F5E6C8] text-[#6B0F1A] text-sm font-medium px-8 py-4 rounded-full hover:bg-white transition-colors text-center'
            >
              Get a free quote
            </Link>
            <Link
              href='/services'
              className='border border-[#F5E6C8]/40 text-[#F5E6C8] text-sm font-medium px-8 py-4 rounded-full hover:border-[#F5E6C8]/80 transition-colors text-center'
            >
              Our services
            </Link>
          </div>
        </div>

        {/* scroll indicator */}
        <div className='absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 text-[#F5E6C8]/40'>
          <span
            className='text-[10px] uppercase tracking-widest'
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <div className='w-px h-12 bg-[#F5E6C8]/30 animate-pulse' />
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

      {/* ── Philosophy / Quote ───────────────────────────── */}
      <section
        ref={quoteRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div className={`max-w-2xl ${fade(quoteInView)}`}>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-8'>
            Our philosophy
          </p>
          <blockquote className='border-l-2 border-[#6B0F1A] pl-8'>
            <p
              className='text-2xl md:text-3xl font-light leading-relaxed text-[#1a0408] mb-6'
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              {PHILOSOPHY.quote}
            </p>
            <cite className='text-[11px] uppercase tracking-[0.15em] text-[#6B0F1A]/40 not-italic'>
              {PHILOSOPHY.author}
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────── */}
      <section
        ref={whyRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div className={`mb-14 ${fade(whyInView)}`}>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-4'>
            Why us
          </p>
          <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] tracking-tight'>
            The Mystery Meals
            <br />
            <em style={{ fontFamily: 'Georgia, serif' }}>difference.</em>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#6B0F1A]/10 border border-[#6B0F1A]/10 rounded-2xl overflow-hidden'>
          {WHY_US.map((item, i) => (
            <div key={i} className={`p-10 ${fade(whyInView, i * 150)}`}>
              <div className='mb-6'>{item.icon}</div>
              <h3 className='text-base font-medium text-[#1a0408] mb-3'>
                {item.title}
              </h3>
              <p className='text-sm text-[#6B0F1A]/60 leading-relaxed'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Chef / About ─────────────────────────────────── */}
      <section
        ref={chefRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div className={`flex-1 ${slideLeft(chefInView)}`}>
            <div className='relative'>
              <Image
                src={CHEF.image}
                alt='Our Chef'
                width={500}
                height={600}
                className='rounded-2xl object-cover w-full h-[520px]'
              />
              <div className='absolute -bottom-5 -right-5 bg-[#6B0F1A] text-[#F5E6C8] rounded-xl px-6 py-5 shadow-xl'>
                <div className='text-3xl font-light'>{CHEF.years}</div>
                <div className='text-[10px] uppercase tracking-widest text-[#F5E6C8]/60 mt-1'>
                  Years of excellence
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-1 ${slideRight(chefInView, 200)}`}>
            <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
              {CHEF.tag}
            </p>
            <h2
              className='text-3xl md:text-4xl font-light text-[#1a0408] leading-snug mb-8 tracking-tight'
              style={{ whiteSpace: 'pre-line' }}
            >
              {CHEF.heading.split('\n')[0]}
              <br />
              <em style={{ fontFamily: 'Georgia, serif' }}>
                {CHEF.heading.split('\n')[1]}
              </em>
            </h2>
            {CHEF.paragraphs.map((p, i) => (
              <p
                key={i}
                className='text-sm text-[#6B0F1A]/60 leading-relaxed mb-5'
              >
                {p}
              </p>
            ))}
            <Link
              href={CHEF.cta.href}
              className='inline-flex items-center gap-2 text-sm text-[#6B0F1A] font-medium border-b border-[#6B0F1A]/30 pb-0.5 hover:border-[#6B0F1A] transition-colors mt-2'
            >
              {CHEF.cta.label} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section
        ref={svcRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div
          className={`flex items-end justify-between mb-14 ${fade(svcInView)}`}
        >
          <div>
            <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-4'>
              What we do
            </p>
            <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] tracking-tight'>
              Our <em style={{ fontFamily: 'Georgia, serif' }}>services.</em>
            </h2>
          </div>
          <Link
            href='/services'
            className='text-sm text-[#6B0F1A]/50 hover:text-[#6B0F1A] transition-colors hidden md:block'
          >
            View all services →
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden h-80 ${fade(svcInView, i * 200)}`}
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#1a0408]/85 via-[#1a0408]/30 to-transparent' />
              <div className='absolute inset-0 p-8 flex flex-col justify-between'>
                <span className='text-[10px] uppercase tracking-[0.2em] text-[#F5E6C8]/50'>
                  {svc.tag}
                </span>
                <div>
                  <h3 className='text-xl font-light text-white mb-1'>
                    {svc.title}
                  </h3>
                  <p className='text-sm text-[#F5E6C8]/60 mb-4 leading-relaxed'>
                    {svc.desc}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-[#F5E6C8]/50'>
                      {svc.price}
                    </span>
                    <Link
                      href={svc.href}
                      className='text-xs text-[#F5E6C8]/70 hover:text-white transition-colors'
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-8 md:hidden text-center'>
          <Link
            href='/services'
            className='text-sm text-[#6B0F1A]/60 hover:text-[#6B0F1A] transition-colors'
          >
            View all services →
          </Link>
        </div>
      </section>

      {/* ── Testimonials ticker ──────────────────────────── */}
      <section className='py-24 overflow-hidden border-b border-[#6B0F1A]/10'>
        <div className='px-6 md:px-16 mb-12'>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-4'>
            Testimonials
          </p>
          <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] tracking-tight'>
            What our{' '}
            <em style={{ fontFamily: 'Georgia, serif' }}>clients say.</em>
          </h2>
        </div>
        <div className='flex gap-5 animate-marquee whitespace-nowrap'>
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className='inline-flex flex-col bg-white border border-[#6B0F1A]/10 rounded-2xl p-8 min-w-[340px] whitespace-normal'
            >
              <p className='text-sm text-[#6B0F1A]/60 leading-relaxed mb-6 flex-1'>
                "{t.text}"
              </p>
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 rounded-full bg-[#6B0F1A]/10 flex items-center justify-center text-[#6B0F1A] text-xs font-medium'>
                  {t.name[0]}
                </div>
                <div>
                  <div className='text-sm font-medium text-[#1a0408]'>
                    {t.name}
                  </div>
                  <div className='text-yellow-500 text-xs mt-0.5'>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Menu Preview ─────────────────────────────────── */}
      <section
        ref={menuRef}
        className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'
      >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div className={`flex-1 ${slideLeft(menuInView)}`}>
            <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
              {MENU.tag}
            </p>
            <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] leading-snug mb-8 tracking-tight'>
              <em style={{ fontFamily: 'Georgia, serif' }}>{MENU.heading}</em>
            </h2>
            {MENU.paragraphs.map((p, i) => (
              <p
                key={i}
                className='text-sm text-[#6B0F1A]/60 leading-relaxed mb-5'
              >
                {p}
              </p>
            ))}
            <Link
              href={MENU.cta.href}
              className='inline-flex items-center gap-2 text-sm text-[#6B0F1A] font-medium border-b border-[#6B0F1A]/30 pb-0.5 hover:border-[#6B0F1A] transition-colors mt-2'
            >
              {MENU.cta.label} →
            </Link>
          </div>
          <div className={`flex-1 ${slideRight(menuInView, 200)}`}>
            <div className='bg-white border border-[#6B0F1A]/10 rounded-2xl p-4 shadow-sm'>
              <Image
                src={MENU.image}
                alt='Our Menu'
                width={500}
                height={400}
                className='rounded-xl object-contain w-full h-[460px]'
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className='relative py-36 px-6 md:px-16'>
        <Image
          src={CTA.image}
          alt='CTA Background'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-[#1a0408]/80' />
        <div className='relative z-10 max-w-2xl'>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#F5E6C8]/40 mb-6'>
            Get started
          </p>
          <h2
            className='text-4xl md:text-6xl font-light text-white leading-tight mb-8 tracking-tight'
            style={{ whiteSpace: 'pre-line' }}
          >
            {CTA.heading.split('\n')[0]}
            <br />
            <em style={{ fontFamily: 'Georgia, serif' }}>
              {CTA.heading.split('\n')[1]}
            </em>
          </h2>
          <p className='text-[#F5E6C8]/60 text-base mb-10 leading-relaxed max-w-md'>
            {CTA.sub}
          </p>
          <Link
            href={CTA.cta.href}
            className='bg-[#F5E6C8] text-[#6B0F1A] text-sm font-medium px-10 py-4 rounded-full hover:bg-white transition-colors inline-block'
          >
            {CTA.cta.label}
          </Link>
        </div>
      </section>
    </div>
  )
}
