import Image from 'next/image'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
]

const CONTACT = [
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
        <div className='flex flex-col gap-5'>
          <a href='#home' className='flex items-center gap-3'>
            <Image
              src='/logo.jpeg'
              alt='Mystery Meals'
              width={40}
              height={40}
              className='rounded-full opacity-90'
            />
            <span className='text-sm font-medium text-[#F5E6C8]/80'>
              Mystery Meals
            </span>
          </a>
          <p
            className='text-sm leading-relaxed max-w-xs'
            style={{ color: 'rgba(245,230,200,0.55)' }}
          >
            Premium catering services for all occasions in Milton, Ontario.
          </p>
          <a
            href='https://www.instagram.com/mystery__meals/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[11px] uppercase tracking-[0.15em] hover:text-[#F5E6C8] transition-colors'
            style={{ color: 'rgba(245,230,200,0.5)' }}
          >
            @mystery__meals ↗
          </a>
        </div>

        <div>
          <p
            className='text-[11px] uppercase tracking-[0.2em] mb-6'
            style={{ color: 'rgba(245,230,200,0.4)' }}
          >
            Navigation
          </p>
          <ul className='flex flex-col gap-3'>
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className='text-sm hover:text-[#F5E6C8] transition-colors'
                  style={{ color: 'rgba(245,230,200,0.6)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className='text-[11px] uppercase tracking-[0.2em] mb-6'
            style={{ color: 'rgba(245,230,200,0.4)' }}
          >
            Contact
          </p>
          <ul className='flex flex-col gap-3'>
            {CONTACT.map(({ label, href }, i) => (
              <li key={i}>
                {href ? (
                  <a
                    href={href}
                    className='text-sm hover:text-[#F5E6C8] transition-colors'
                    style={{ color: 'rgba(245,230,200,0.6)' }}
                  >
                    {label}
                  </a>
                ) : (
                  <span
                    className='text-sm'
                    style={{ color: 'rgba(245,230,200,0.6)' }}
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
        <p className='text-[11px]' style={{ color: 'rgba(245,230,200,0.35)' }}>
          © {new Date().getFullYear()} Mystery Meals. All rights reserved.
        </p>
        <p className='text-[11px]' style={{ color: 'rgba(245,230,200,0.35)' }}>
          Milton, Ontario
        </p>
      </div>
    </footer>
  )
}
