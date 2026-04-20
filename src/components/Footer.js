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
    <footer
      style={{
        background: '#0a0103',
        borderTop: '1px solid rgba(245,230,200,0.07)',
      }}
    >
      <div className='max-w-6xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12'>
        {/* Brand */}
        <div className='flex flex-col gap-5'>
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/logo.jpeg'
              alt='Mystery Meals'
              width={40}
              height={40}
              className='rounded-full opacity-80'
            />
            <span className='text-sm font-medium text-[#F5E6C8]/60'>
              Mystery Meals
            </span>
          </Link>
          <p
            className='text-sm leading-relaxed max-w-xs'
            style={{ color: 'rgba(245,230,200,0.3)' }}
          >
            Premium catering services for all occasions in Milton, Ontario.
          </p>
          <a
            href='https://www.instagram.com/mystery__meals/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[11px] uppercase tracking-[0.15em] transition-colors'
            style={{ color: 'rgba(245,230,200,0.25)' }}
          >
            @mystery__meals ↗
          </a>
        </div>

        {/* Links */}
        <div>
          <p
            className='text-[11px] uppercase tracking-[0.2em] mb-6'
            style={{ color: 'rgba(245,230,200,0.2)' }}
          >
            Pages
          </p>
          <ul className='flex flex-col gap-3'>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='text-sm transition-colors'
                  style={{ color: 'rgba(245,230,200,0.35)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            className='text-[11px] uppercase tracking-[0.2em] mb-6'
            style={{ color: 'rgba(245,230,200,0.2)' }}
          >
            Contact
          </p>
          <ul className='flex flex-col gap-3'>
            {contact.map(({ label, href }, i) => (
              <li key={i}>
                {href ? (
                  <a
                    href={href}
                    className='text-sm transition-colors'
                    style={{ color: 'rgba(245,230,200,0.35)' }}
                  >
                    {label}
                  </a>
                ) : (
                  <span
                    className='text-sm'
                    style={{ color: 'rgba(245,230,200,0.35)' }}
                  >
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className='px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-2'
        style={{ borderTop: '1px solid rgba(245,230,200,0.06)' }}
      >
        <p className='text-[11px]' style={{ color: 'rgba(245,230,200,0.18)' }}>
          © {new Date().getFullYear()} Mystery Meals. All rights reserved.
        </p>
        <p className='text-[11px]' style={{ color: 'rgba(245,230,200,0.18)' }}>
          Milton, Ontario
        </p>
      </div>
    </footer>
  )
}
