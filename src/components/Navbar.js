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
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navBg = scrolled
    ? 'rgba(15,2,5,0.97)'
    : isHome
      ? 'transparent'
      : 'rgba(15,2,5,1)'

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
      style={{
        background: navBg,
        borderBottom: scrolled
          ? '1px solid rgba(245,230,200,0.07)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className='max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/logo.jpeg'
            alt='Mystery Meals'
            width={40}
            height={40}
            className='rounded-full opacity-90'
          />
          <span className='text-sm font-medium hidden md:block text-[#F5E6C8]/70'>
            Mystery Meals
          </span>
        </Link>

        <ul className='hidden md:flex items-center gap-8'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors duration-200 ${pathname === href ? 'text-[#F5E6C8] font-medium' : 'text-[#F5E6C8]/40 hover:text-[#F5E6C8]/80'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href='/contact'
          className='hidden md:inline-block text-sm font-medium px-6 py-2.5 rounded-full transition-all border text-[#F5E6C8]/70 hover:text-[#F5E6C8]'
          style={{
            borderColor: 'rgba(245,230,200,0.15)',
            background: 'rgba(245,230,200,0.04)',
          }}
        >
          Get a quote
        </Link>

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

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          background: 'rgba(15,2,5,0.98)',
          borderBottom: '1px solid rgba(245,230,200,0.07)',
        }}
      >
        <ul className='px-6 py-6 flex flex-col gap-5'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${pathname === href ? 'text-[#F5E6C8] font-medium' : 'text-[#F5E6C8]/40 hover:text-[#F5E6C8]/80'}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href='/contact'
              className='inline-block text-sm font-medium px-6 py-2.5 rounded-full mt-2 text-[#3a0508]'
              style={{ background: '#F5E6C8' }}
            >
              Get a quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
