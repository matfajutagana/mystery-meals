'use client'
import { useState } from 'react'
import Link from 'next/link'

// ── easy edit ──────────────────────────────────────────────
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
// ──────────────────────────────────────────────────────────

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
    'w-full border border-[#6B0F1A]/15 bg-white rounded-xl px-4 py-3 text-sm text-[#1a0408] placeholder:text-[#6B0F1A]/25 focus:outline-none focus:border-[#6B0F1A]/40 transition-colors'

  const labelClass =
    'block text-[11px] uppercase tracking-[0.15em] text-[#6B0F1A]/40 mb-2'

  return (
    <div className='bg-[#FAFAF8] pt-20'>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'>
        <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-5'>
          Reach out
        </p>
        <h1 className='text-4xl md:text-6xl font-light text-[#1a0408] leading-tight tracking-tight max-w-xl'>
          Get a <em style={{ fontFamily: 'Georgia, serif' }}>free quote.</em>
        </h1>
        <p className='text-base text-[#6B0F1A]/50 mt-6 max-w-lg leading-relaxed'>
          Tell us about your event and we'll get back to you within 24 hours
          with a custom quote.
        </p>
      </section>

      {/* ── Form + Info ──────────────────────────────────── */}
      <section className='px-6 md:px-16 py-24 border-b border-[#6B0F1A]/10'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16'>
          {/* Contact info sidebar */}
          <div className='md:col-span-1 flex flex-col gap-10'>
            <div>
              <p className='text-[11px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-6'>
                Contact info
              </p>
              <div className='flex flex-col gap-6'>
                {CONTACT_INFO.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className='text-[11px] uppercase tracking-[0.15em] text-[#6B0F1A]/30 mb-1'>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel='noopener noreferrer'
                        className='text-sm text-[#6B0F1A]/60 hover:text-[#6B0F1A] transition-colors'
                      >
                        {value}
                      </a>
                    ) : (
                      <p className='text-sm text-[#6B0F1A]/60'>{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='border-t border-[#6B0F1A]/10 pt-8'>
              <p className='text-xs text-[#6B0F1A]/40 leading-relaxed'>
                We typically respond within 24 hours. For urgent enquiries, give
                us a call directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className='md:col-span-2'>
            {submitted ? (
              <div className='py-16'>
                <div className='w-12 h-12 rounded-full bg-[#6B0F1A]/10 flex items-center justify-center mb-6'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#6B0F1A'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-5 h-5'
                  >
                    <path d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <h2 className='text-2xl font-light text-[#1a0408] mb-3'>
                  Thank you — we'll be in touch.
                </h2>
                <p className='text-sm text-[#6B0F1A]/50 leading-relaxed max-w-sm'>
                  We've received your request and will get back to you within 24
                  hours with a custom quote.
                </p>
                <Link
                  href='/'
                  className='inline-flex items-center gap-2 text-sm text-[#6B0F1A] font-medium border-b border-[#6B0F1A]/30 pb-0.5 hover:border-[#6B0F1A] transition-colors mt-8'
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
                    >
                      <option value=''>Select event type</option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t}>{t}</option>
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
                  />
                </div>

                <div>
                  <button
                    type='submit'
                    disabled={loading}
                    className='bg-[#6B0F1A] text-[#F5E6C8] text-sm font-medium px-10 py-4 rounded-full hover:bg-[#8B1A2A] disabled:opacity-50 transition-colors'
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
