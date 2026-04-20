import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const contact = [
  { label: 'Milton, Ontario, Canada' },
  { label: '(647) 540-2235', href: 'tel:+16475402235' },
  {
    label: 'mysterymeals.outlook.com',
    href: 'mailto:mysterymeals.outlook.com',
  },
]

export default function Footer() {
  return (
    <footer className='bg-[#FAFAF8] border-t border-[#6B0F1A]/10'>
      <div className='max-w-6xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12'>
        {/* Brand */}
        <div className='flex flex-col gap-5'>
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/logo.jpeg'
              alt='Mystery Meals'
              width={44}
              height={44}
              className='rounded-full'
            />
            <span className='text-sm font-medium text-[#6B0F1A]'>
              Mystery Meals
            </span>
          </Link>
          <p className='text-sm text-[#6B0F1A]/50 leading-relaxed max-w-xs'>
            Premium catering services for all occasions in Milton, Ontario.
          </p>
          <a
            href='https://www.instagram.com/mystery__meals/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs uppercase tracking-[0.15em] text-[#6B0F1A]/40 hover:text-[#6B0F1A] transition-colors'
          >
            @mystery__meals ↗
          </a>
        </div>

        {/* Links */}
        <div>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/30 mb-6'>
            Pages
          </p>
          <ul className='flex flex-col gap-3'>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='text-sm text-[#6B0F1A]/50 hover:text-[#6B0F1A] transition-colors'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/30 mb-6'>
            Contact
          </p>
          <ul className='flex flex-col gap-3'>
            {contact.map(({ label, href }, i) => (
              <li key={i}>
                {href ? (
                  <a
                    href={href}
                    className='text-sm text-[#6B0F1A]/50 hover:text-[#6B0F1A] transition-colors'
                  >
                    {label}
                  </a>
                ) : (
                  <span className='text-sm text-[#6B0F1A]/50'>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-[#6B0F1A]/10 px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-2'>
        <p className='text-[11px] text-[#6B0F1A]/30'>
          © {new Date().getFullYear()} Mystery Meals. All rights reserved.
        </p>
        <p className='text-[11px] text-[#6B0F1A]/30'>Milton, Ontario</p>
      </div>
    </footer>
  )
}
