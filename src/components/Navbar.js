'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// ✏️ EASY EDIT — update nav labels here
const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setScrolled(top > 40)
      setProgress(docHeight > 0 ? (top / docHeight) * 100 : 0)

      // Highlight active section
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const id = LINKS[i].href.replace('#', '')
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(LINKS[i].href)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
      style={{
        background: scrolled ? 'rgba(15,2,5,0.97)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(245,230,200,0.07)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Scroll progress bar */}
      <div
        className='absolute top-0 left-0 h-[2px] transition-all duration-75'
        style={{
          width: `${progress}%`,
          background:
            'linear-gradient(90deg, rgba(245,230,200,0.3), rgba(245,230,200,0.8))',
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div className='max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between'>
        {/* Logo */}
        <a
          href='#home'
          onClick={(e) => scrollTo(e, '#home')}
          className='flex items-center gap-3'
        >
          <Image
            src='/logo.jpeg'
            alt='Mystery Meals'
            width={40}
            height={40}
            className='rounded-full opacity-90'
          />
          <span className='text-sm font-medium text-[#F5E6C8]/70'>
            Mystery Meals
          </span>
        </a>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-8'>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className={`text-sm transition-colors duration-200 ${
                  active === href
                    ? 'text-[#F5E6C8] font-medium'
                    : 'text-[#F5E6C8]/40 hover:text-[#F5E6C8]/80'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href='#contact'
          onClick={(e) => scrollTo(e, '#contact')}
          className='hidden md:inline-block text-sm font-medium px-6 py-2.5 rounded-full border text-[#F5E6C8]/70 hover:text-[#F5E6C8] transition-all'
          style={{
            borderColor: 'rgba(245,230,200,0.15)',
            background: 'rgba(245,230,200,0.04)',
          }}
        >
          Get a quote
        </a>

        {/* Hamburger */}
        <button
          className='md:hidden text-[#F5E6C8]/60 hover:text-[#F5E6C8] transition-colors'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          background: 'rgba(15,2,5,0.98)',
          borderBottom: '1px solid rgba(245,230,200,0.07)',
        }}
      >
        <ul className='px-6 py-6 flex flex-col gap-5'>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className={`text-sm transition-colors ${active === href ? 'text-[#F5E6C8] font-medium' : 'text-[#F5E6C8]/40'}`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href='#contact'
              onClick={(e) => scrollTo(e, '#contact')}
              className='inline-block text-sm font-medium px-6 py-2.5 rounded-full mt-2 text-[#3a0508]'
              style={{ background: '#F5E6C8' }}
            >
              Get a quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
