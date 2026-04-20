'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// ============================================================
//  EASY EDIT ZONE
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
        className='w-6 h-6'
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
        className='w-6 h-6'
      >
        <path d='M6 16l7 7L26 9' />
      </svg>
    ),
  },
]

const CHEF = {
  image: '/chef.jpg',
  years: '5+',
  heading: ['Passion for food,', 'dedication to excellence.'],
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
    image: '/event.jpg',
    href: '/services',
  },
  {
    tag: 'Corporate',
    title: 'Corporate events',
    desc: 'Impress clients and teams with professional, sophisticated catering built around your schedule.',
    price: 'From $35 / person',
    image: '/corporate.jpg',
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
  heading: ['Explore our', 'menu.'],
  paragraphs: [
    'From elegant plated dinners to casual buffets, our menu is designed to delight every palate with customisable options for any dietary need.',
    'All dishes are prepared fresh on the day of your event using seasonal, locally sourced ingredients.',
  ],
  cta: { label: 'View full menu', href: '/menu' },
  image: '/menu.jpg',
}

// ============================================================
//  Helpers
// ============================================================

function useInView(threshold = 0.12) {
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

const fade = (v, d = 0) =>
  `transition-all duration-700 ${d ? `delay-${d}` : ''} ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
const slideL = (v, d = 0) =>
  `transition-all duration-700 ${d ? `delay-${d}` : ''} ${v ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`
const slideR = (v, d = 0) =>
  `transition-all duration-700 ${d ? `delay-${d}` : ''} ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`

// Shared text styles
const LABEL_DARK = 'text-[11px] uppercase tracking-[0.22em] text-[#F5E6C8]/30'
const LABEL_LIGHT = 'text-[11px] uppercase tracking-[0.22em] text-[#6B0F1A]/35'
const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }

// ============================================================
//  Page
// ============================================================

export default function Home() {
  const [statsRef, statsInView] = useInView()
  const [quoteRef, quoteInView] = useInView()
  const [whyRef, whyInView] = useInView()
  const [chefRef, chefInView] = useInView()
  const [svcRef, svcInView] = useInView()
  const [testaRef, testaInView] = useInView()
  const [menuRef, menuInView] = useInView()

  return (
    <div className='overflow-x-hidden' style={{ background: '#0f0205' }}>
      {/* ── Hero ─────────────────────────────── dark, full bleed */}
      <section className='relative min-h-screen flex items-end pb-20 md:pb-28'>
        <Image
          src={HERO.image}
          alt='Hero'
          fill
          className='object-cover opacity-30'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0f0205] via-[#0f0205]/60 to-transparent' />
        <div className='relative z-10 px-6 md:px-16 max-w-5xl'>
          <p className={`${LABEL_DARK} mb-6`}>{HERO.location}</p>
          <h1 className='text-5xl md:text-7xl font-light text-white leading-[1.05] mb-8 tracking-tight'>
            {HERO.heading[0]}
            <br />
            <em className='text-[#F5E6C8]' style={serif}>
              {HERO.heading[1]}
            </em>
          </h1>
          <p className='text-[#F5E6C8]/50 text-lg max-w-xl mb-10 leading-relaxed'>
            {HERO.subheading}
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link
              href='/contact'
              className='bg-[#F5E6C8] text-[#3a0508] text-sm font-medium px-8 py-4 rounded-full hover:bg-white transition-colors text-center'
            >
              Get a free quote
            </Link>
            <Link
              href='/services'
              className='border border-[#F5E6C8]/20 text-[#F5E6C8]/70 text-sm font-medium px-8 py-4 rounded-full hover:border-[#F5E6C8]/50 hover:text-[#F5E6C8] transition-colors text-center'
            >
              Our services
            </Link>
          </div>
        </div>
        <div className='absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 text-[#F5E6C8]/20'>
          <span
            className='text-[10px] uppercase tracking-widest'
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <div className='w-px h-12 bg-[#F5E6C8]/20 animate-pulse' />
        </div>
      </section>

      {/* ── Stats ────────────────────────────── dark bg, cream text */}
      <section
        ref={statsRef}
        style={{
          background: '#0f0205',
          borderTop: '1px solid rgba(245,230,200,0.07)',
        }}
      >
        <div
          className='grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0'
          style={{ borderColor: 'rgba(245,230,200,0.07)' }}
        >
          {STATS.map((s, i) => (
            <div key={i} className={`px-8 py-12 ${fade(statsInView, i * 100)}`}>
              <div className='text-4xl font-light text-[#F5E6C8] mb-2 tracking-tight'>
                {s.number}
              </div>
              <div className={LABEL_DARK}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Philosophy ───────────────────────── cream bg, dark text */}
      <section
        ref={quoteRef}
        className='px-6 md:px-16 py-28'
        style={{ background: '#F5E6C8' }}
      >
        <div className={`max-w-2xl ${fade(quoteInView)}`}>
          <p className={`${LABEL_LIGHT} mb-8`}>Our philosophy</p>
          <blockquote className='border-l-2 border-[#6B0F1A] pl-8'>
            <p
              className='text-2xl md:text-3xl font-light leading-relaxed text-[#1a0408] mb-6'
              style={{ ...serif, fontStyle: 'italic' }}
            >
              {PHILOSOPHY.quote}
            </p>
            <cite className={`${LABEL_LIGHT} not-italic`}>
              {PHILOSOPHY.author}
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────── dark bg */}
      <section
        ref={whyRef}
        className='px-6 md:px-16 py-28'
        style={{
          background: '#180306',
          borderTop: '1px solid rgba(245,230,200,0.06)',
          borderBottom: '1px solid rgba(245,230,200,0.06)',
        }}
      >
        <div className={`mb-14 ${fade(whyInView)}`}>
          <p className={`${LABEL_DARK} mb-4`}>Why us</p>
          <h2 className='text-3xl md:text-4xl font-light text-white tracking-tight'>
            The Mystery Meals
            <br />
            <em style={serif}>difference.</em>
          </h2>
        </div>
        <div
          className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rounded-2xl overflow-hidden border'
          style={{
            borderColor: 'rgba(245,230,200,0.08)',
            borderTop: '1px solid rgba(245,230,200,0.08)',
          }}
        >
          {WHY_US.map((item, i) => (
            <div
              key={i}
              className={`p-10 ${fade(whyInView, i * 150)}`}
              style={{ borderColor: 'rgba(245,230,200,0.08)' }}
            >
              <div className='text-[#F5E6C8]/40 mb-6'>{item.icon}</div>
              <h3 className='text-base font-medium text-[#F5E6C8]/90 mb-3'>
                {item.title}
              </h3>
              <p className='text-sm text-[#F5E6C8]/35 leading-relaxed'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Chef / About ─────────────────────── cream bg */}
      <section
        ref={chefRef}
        className='px-6 md:px-16 py-28'
        style={{ background: '#F5E6C8' }}
      >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div className={`flex-1 ${slideL(chefInView)}`}>
            <div className='relative'>
              <Image
                src={CHEF.image}
                alt='Our Chef'
                width={500}
                height={600}
                className='rounded-2xl object-cover w-full h-[520px]'
              />
              <div
                className='absolute -bottom-5 -right-5 rounded-xl px-6 py-5'
                style={{ background: '#6B0F1A' }}
              >
                <div className='text-3xl font-light text-[#F5E6C8]'>
                  {CHEF.years}
                </div>
                <div className='text-[10px] uppercase tracking-widest text-[#F5E6C8]/50 mt-1'>
                  Years of excellence
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-1 ${slideR(chefInView, 200)}`}>
            <p className={`${LABEL_LIGHT} mb-5`}>Our story</p>
            <h2 className='text-3xl md:text-4xl font-light text-[#1a0408] leading-snug mb-8 tracking-tight'>
              {CHEF.heading[0]}
              <br />
              <em style={serif}>{CHEF.heading[1]}</em>
            </h2>
            {CHEF.paragraphs.map((p, i) => (
              <p
                key={i}
                className='text-sm text-[#3a0508]/60 leading-relaxed mb-5'
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

      {/* ── Services ─────────────────────────── dark bg */}
      <section
        ref={svcRef}
        className='px-6 md:px-16 py-28'
        style={{ background: '#0f0205' }}
      >
        <div
          className={`flex items-end justify-between mb-14 ${fade(svcInView)}`}
        >
          <div>
            <p className={`${LABEL_DARK} mb-4`}>What we do</p>
            <h2 className='text-3xl md:text-4xl font-light text-white tracking-tight'>
              Our <em style={serif}>services.</em>
            </h2>
          </div>
          <Link
            href='/services'
            className='text-sm text-[#F5E6C8]/30 hover:text-[#F5E6C8]/70 transition-colors hidden md:block'
          >
            View all →
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden h-[360px] ${fade(svcInView, i * 200)}`}
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className='object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#0f0205]/90 via-[#0f0205]/30 to-transparent' />
              <div className='absolute inset-0 p-8 flex flex-col justify-between'>
                <span className={LABEL_DARK}>{svc.tag}</span>
                <div>
                  <h3 className='text-xl font-light text-white mb-1'>
                    {svc.title}
                  </h3>
                  <p className='text-sm text-[#F5E6C8]/45 mb-4 leading-relaxed'>
                    {svc.desc}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-[#F5E6C8]/30'>
                      {svc.price}
                    </span>
                    <Link
                      href={svc.href}
                      className='text-xs text-[#F5E6C8]/50 hover:text-[#F5E6C8] transition-colors'
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────── cream bg */}
      <section
        ref={testaRef}
        className='py-28 overflow-hidden'
        style={{ background: '#F5E6C8' }}
      >
        <div className='px-6 md:px-16 mb-12'>
          <p className={`${LABEL_LIGHT} mb-4`}>Testimonials</p>
          <h2
            className={`text-3xl md:text-4xl font-light text-[#1a0408] tracking-tight ${fade(testaInView)}`}
          >
            What our <em style={serif}>clients say.</em>
          </h2>
        </div>
        <div className='flex gap-4 animate-marquee whitespace-nowrap'>
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className='inline-flex flex-col rounded-2xl p-7 min-w-[320px] whitespace-normal border'
              style={{
                background: '#fff8f0',
                borderColor: 'rgba(107,15,26,0.1)',
              }}
            >
              <p className='text-sm text-[#3a0508]/60 leading-relaxed mb-5 flex-1'>
                "{t.text}"
              </p>
              <div className='flex items-center gap-3'>
                <div
                  className='w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-[#F5E6C8]'
                  style={{ background: '#6B0F1A' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className='text-sm font-medium text-[#1a0408]'>
                    {t.name}
                  </div>
                  <div className='text-yellow-600 text-xs mt-0.5'>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Menu Preview ─────────────────────── dark bg */}
      <section
        ref={menuRef}
        className='px-6 md:px-16 py-28'
        style={{
          background: '#180306',
          borderTop: '1px solid rgba(245,230,200,0.06)',
        }}
      >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div className={`flex-1 ${slideL(menuInView)}`}>
            <p className={`${LABEL_DARK} mb-5`}>{MENU.tag}</p>
            <h2 className='text-3xl md:text-4xl font-light text-white leading-snug mb-8 tracking-tight'>
              {MENU.heading[0]}
              <br />
              <em style={serif}>{MENU.heading[1]}</em>
            </h2>
            {MENU.paragraphs.map((p, i) => (
              <p
                key={i}
                className='text-sm text-[#F5E6C8]/35 leading-relaxed mb-5'
              >
                {p}
              </p>
            ))}
            <Link
              href={MENU.cta.href}
              className='inline-flex items-center gap-2 text-sm text-[#F5E6C8]/60 font-medium border-b border-[#F5E6C8]/20 pb-0.5 hover:text-[#F5E6C8] hover:border-[#F5E6C8]/50 transition-colors mt-2'
            >
              {MENU.cta.label} →
            </Link>
          </div>
          <div className={`flex-1 ${slideR(menuInView, 200)}`}>
            <div
              className='rounded-2xl p-3'
              style={{
                background: 'rgba(245,230,200,0.06)',
                border: '1px solid rgba(245,230,200,0.08)',
              }}
            >
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

      {/* ── CTA ──────────────────────────────── cream bg */}
      <section
        className='relative py-36 px-6 md:px-16'
        style={{ background: '#F5E6C8' }}
      >
        <div className='max-w-2xl'>
          <p className={`${LABEL_LIGHT} mb-6`}>Get started</p>
          <h2 className='text-4xl md:text-6xl font-light text-[#1a0408] leading-tight mb-8 tracking-tight'>
            Ready to plan your
            <br />
            <em style={serif}>next event?</em>
          </h2>
          <p className='text-[#3a0508]/50 text-base mb-10 leading-relaxed max-w-md'>
            Contact us today for a free consultation and quote. Serving Milton,
            Ontario and surrounding areas.
          </p>
          <Link
            href='/contact'
            className='text-sm font-medium px-10 py-4 rounded-full transition-colors inline-block text-[#F5E6C8]'
            style={{ background: '#6B0F1A' }}
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  )
}
