'use client'
import { useState } from 'react'
import Link from 'next/link'

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }
const LABEL_DARK = 'text-[11px] uppercase tracking-[0.22em] text-[#F5E6C8]/30'

const CONTACT_INFO = [
  { label: 'Location', value: 'Milton, Ontario, Canada' },
  { label: 'Phone', value: '(647) 540-2235', href: 'tel:+16475402235' },
  {
    label: 'Email',
    value: 'mysterymeals.outlook.com',
    href: 'mailto:mysterymeals.outlook.com',
  },
  {
    label: 'Instagram',
    value: '@mystery__meals',
    href: 'https://www.instagram.com/mystery__meals/',
  },
]

const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Private Party',
  'Birthday',
  'Anniversary',
  'Other',
]

const border = { borderBottom: '1px solid rgba(245,230,200,0.07)' }

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '888a93ba-4a15-403c-920e-aab533d44ce1',
        ...formData,
      }),
    })
    setLoading(false)
    if (res.ok) setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 text-sm text-[#F5E6C8] placeholder:text-[#F5E6C8]/20 focus:outline-none transition-colors'
  const inputStyle = {
    background: 'rgba(245,230,200,0.05)',
    border: '1px solid rgba(245,230,200,0.1)',
  }
  const labelClass = `block ${LABEL_DARK} mb-2`

  return (
    <div className='pt-20' style={{ background: '#140308' }}>
      {/* Hero */}
      <section className='px-6 md:px-16 py-24' style={border}>
        <p className={`${LABEL_DARK} mb-5`}>Reach out</p>
        <h1 className='text-4xl md:text-6xl font-light text-[#F5E6C8] leading-tight tracking-tight max-w-xl'>
          Get a <em style={serif}>free quote.</em>
        </h1>
        <p className='text-base text-[#F5E6C8]/40 mt-6 max-w-lg leading-relaxed'>
          Tell us about your event and we'll get back to you within 24 hours
          with a custom quote.
        </p>
      </section>

      {/* Form + sidebar */}
      <section
        className='px-6 md:px-16 py-24'
        style={{ ...border, background: '#180306' }}
      >
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16'>
          {/* Sidebar */}
          <div className='md:col-span-1 flex flex-col gap-10'>
            <div>
              <p className={`${LABEL_DARK} mb-6`}>Contact info</p>
              <div className='flex flex-col gap-6'>
                {CONTACT_INFO.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className='text-[11px] uppercase tracking-[0.15em] text-[#F5E6C8]/20 mb-1'>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel='noopener noreferrer'
                        className='text-sm text-[#F5E6C8]/45 hover:text-[#F5E6C8]/70 transition-colors'
                      >
                        {value}
                      </a>
                    ) : (
                      <p className='text-sm text-[#F5E6C8]/45'>{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              className='pt-8'
              style={{ borderTop: '1px solid rgba(245,230,200,0.07)' }}
            >
              <p className='text-xs text-[#F5E6C8]/25 leading-relaxed'>
                We typically respond within 24 hours. For urgent enquiries, give
                us a call directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className='md:col-span-2'>
            {submitted ? (
              <div className='py-16'>
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center mb-6'
                  style={{ background: 'rgba(245,230,200,0.08)' }}
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#F5E6C8'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-5 h-5 opacity-60'
                  >
                    <path d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <h2 className='text-2xl font-light text-[#F5E6C8] mb-3'>
                  Thank you — we'll be in touch.
                </h2>
                <p className='text-sm text-[#F5E6C8]/40 leading-relaxed max-w-sm'>
                  We've received your request and will get back to you within 24
                  hours with a custom quote.
                </p>
                <Link
                  href='/'
                  className='inline-flex items-center gap-2 text-sm text-[#F5E6C8]/60 font-medium border-b border-[#F5E6C8]/20 pb-0.5 hover:text-[#F5E6C8] transition-colors mt-8'
                >
                  Back to home →
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className={labelClass}>Full name *</label>
                    <input
                      type='text'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='John Smith'
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email address *</label>
                    <input
                      type='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='john@email.com'
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className={labelClass}>Phone number</label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='(905) 123-4567'
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Event type *</label>
                    <select
                      name='eventType'
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        background: 'rgba(245,230,200,0.05)',
                      }}
                    >
                      <option value='' style={{ background: '#180306' }}>
                        Select event type
                      </option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t} style={{ background: '#180306' }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className={labelClass}>Event date *</label>
                    <input
                      type='date'
                      name='eventDate'
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, colorScheme: 'dark' }}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Number of guests *</label>
                    <input
                      type='number'
                      name='guests'
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder='50'
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Tell us more</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder='Dietary requirements, budget, theme, anything else...'
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    disabled={loading}
                    className='text-sm font-medium px-10 py-4 rounded-full transition-colors disabled:opacity-50 text-[#3a0508]'
                    style={{ background: '#F5E6C8' }}
                  >
                    {loading ? 'Sending...' : 'Send my request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
