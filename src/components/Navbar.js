'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-[#6B0F1A] sticky top-0 z-50 shadow-lg'>
      <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/logo.jpeg'
            alt='Mystery Meals Logo'
            width={60}
            height={60}
            className='rounded-full'
          />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-[#F5E6C8] font-medium'>
          <li>
            <Link href='/' className='hover:text-white transition'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/services' className='hover:text-white transition'>
              Services
            </Link>
          </li>
          <li>
            <Link href='/menu' className='hover:text-white transition'>
              Menu
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-white transition'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-white transition'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden text-[#F5E6C8] focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='w-7 h-7'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden bg-[#6B0F1A] px-4 pb-4 flex flex-col gap-4 text-[#F5E6C8] font-medium'>
          <li>
            <Link href='/' onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/services' onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href='/menu' onClick={() => setIsOpen(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link href='/about' onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
