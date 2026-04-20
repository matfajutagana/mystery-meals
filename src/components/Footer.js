import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-[#6B0F1A] text-[#F5E6C8] mt-auto'>
      <div className='max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo & Tagline */}
        <div className='flex flex-col items-start gap-3'>
          <Image
            src='/logo.jpeg'
            alt='Mystery Meals Logo'
            width={70}
            height={70}
            className='rounded-full'
          />
          <p className='text-sm text-[#F5E6C8]/80'>
            Premium catering services for all occasions in Milton, Ontario.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='font-bold text-white mb-4 text-lg'>Quick Links</h3>
          <ul className='flex flex-col gap-2 text-sm'>
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
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='font-bold text-white mb-4 text-lg'>Contact Us</h3>
          <ul className='flex flex-col gap-2 text-sm'>
            <li>📍 Milton, Ontario, Canada</li>
            <li>📞 (905) 123-4567</li>
            <li>✉️ info@mysterymeals.ca</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-[#F5E6C8]/20 text-center py-4 text-sm text-[#F5E6C8]/60'>
        © {new Date().getFullYear()} Mystery Meals. All rights reserved.
      </div>
    </footer>
  )
}
