'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-[#FAFAF8] border-b border-[#6B0F1A]/10'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/logo.jpeg'
            alt='Mystery Meals'
            width={44}
            height={44}
            className='rounded-full'
          />
          <span
            className={`text-sm font-medium hidden md:block transition-colors duration-300 ${
              scrolled || !isHome ? 'text-[#6B0F1A]' : 'text-[#F5E6C8]'
            }`}
          >
            Mystery Meals
          </span>
        </Link>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-8'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors duration-300 ${
                  pathname === href
                    ? scrolled || !isHome
                      ? 'text-[#6B0F1A] font-medium'
                      : 'text-white font-medium'
                    : scrolled || !isHome
                      ? 'text-[#6B0F1A]/50 hover:text-[#6B0F1A]'
                      : 'text-[#F5E6C8]/70 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href='/contact'
          className={`hidden md:inline-block text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled || !isHome
              ? 'bg-[#6B0F1A] text-[#F5E6C8] hover:bg-[#8B1A2A]'
              : 'border border-[#F5E6C8]/40 text-[#F5E6C8] hover:border-[#F5E6C8]/80'
          }`}
        >
          Get a quote
        </Link>

        {/* Hamburger */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled || !isHome ? 'text-[#6B0F1A]' : 'text-[#F5E6C8]'
          }`}
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
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#FAFAF8] border-b border-[#6B0F1A]/10 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='px-6 py-6 flex flex-col gap-5'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href
                    ? 'text-[#6B0F1A] font-medium'
                    : 'text-[#6B0F1A]/50 hover:text-[#6B0F1A]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href='/contact'
              className='inline-block bg-[#6B0F1A] text-[#F5E6C8] text-sm font-medium px-6 py-2.5 rounded-full mt-2'
            >
              Get a quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
