'use client'
import { useState } from 'react'
import { useInView } from '@/lib/useInView'
import { INFO, LL, serif, fade } from '@/lib/siteConfig'

// ✏️ EASY EDIT — add/remove event types
const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Private Party',
  'Birthday',
  'Anniversary',
  'Meal Prep',
  'Other',
]

const CONTACT_INFO = [
  {
    label: 'Phone',
    value: INFO.phone,
    href: `tel:${INFO.phone.replace(/\D/g, '')}`,
  },
  { label: 'Email', value: INFO.email, href: `mailto:${INFO.email}` },
  { label: 'Location', value: INFO.location },
  { label: 'Instagram', value: '@mystery__meals', href: INFO.instagram },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: INFO.web3key, ...form }),
    })
    setSending(false)
    if (res.ok) setSent(true)
  }

  // Form field styles
  const fieldClass =
    'w-full rounded-xl px-4 py-3 text-sm text-[#1a0408] placeholder:text-[#6B0F1A]/30 focus:outline-none transition-colors'
  const fieldStyle = {
    background: 'rgba(107,15,26,0.06)',
    border: '1px solid rgba(107,15,26,0.15)',
  }
  const labelClass =
    'block text-[10px] uppercase tracking-[0.15em] text-[#6B0F1A]/50 mb-2'

  return (
    <section
      id='contact'
      ref={ref}
      className='px-6 md:px-16 py-28'
      style={{ background: '#F5E6C8' }}
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16'>
        {/* Left — info */}
        <div>
          <p className={`${LL} mb-5 ${fade(inView, 0)}`}>Get in touch</p>
          <h2
            className={`text-4xl md:text-5xl font-light text-[#1a0408] leading-tight mb-10 tracking-tight ${fade(inView, 100)}`}
          >
            Let's plan your
            <br />
            <em style={serif}>next event.</em>
          </h2>
          <div className={`flex flex-col gap-6 mb-10 ${fade(inView, 200)}`}>
            {CONTACT_INFO.map(({ label, value, href }) => (
              <div key={label}>
                <p className='text-[10px] uppercase tracking-[0.2em] text-[#6B0F1A]/40 mb-1'>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel='noopener noreferrer'
                    className='text-sm text-[#3a0508]/70 hover:text-[#6B0F1A] transition-colors'
                  >
                    {value}
                  </a>
                ) : (
                  <p className='text-sm text-[#3a0508]/70'>{value}</p>
                )}
              </div>
            ))}
          </div>
          <p
            className={`text-xs text-[#6B0F1A]/40 leading-relaxed max-w-xs ${fade(inView, 300)}`}
          >
            We typically respond within 24 hours. For urgent enquiries, give us
            a call directly.
          </p>
        </div>

        {/* Right — form */}
        <div className={fade(inView, 150)}>
          {sent ? (
            <div className='py-12'>
              <div
                className='w-12 h-12 rounded-full flex items-center justify-center mb-6'
                style={{ background: 'rgba(107,15,26,0.1)' }}
              >
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
              <h3 className='text-2xl font-light text-[#1a0408] mb-3'>
                Thank you — we'll be in touch.
              </h3>
              <p className='text-sm text-[#3a0508]/60 leading-relaxed max-w-sm'>
                We've received your request and will get back to you within 24
                hours with a custom quote.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className='flex flex-col gap-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label className={labelClass}>Full name *</label>
                  <input
                    type='text'
                    name='name'
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder='John Smith'
                    className={fieldClass}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    type='email'
                    name='email'
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder='john@email.com'
                    className={fieldClass}
                    style={fieldStyle}
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type='tel'
                    name='phone'
                    value={form.phone}
                    onChange={onChange}
                    placeholder='(905) 123-4567'
                    className={fieldClass}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label className={labelClass}>Event type *</label>
                  <select
                    name='eventType'
                    required
                    value={form.eventType}
                    onChange={onChange}
                    className={fieldClass}
                    style={fieldStyle}
                  >
                    <option value=''>Select type</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label className={labelClass}>Event date *</label>
                  <input
                    type='date'
                    name='eventDate'
                    required
                    value={form.eventDate}
                    onChange={onChange}
                    className={fieldClass}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label className={labelClass}>Guests *</label>
                  <input
                    type='number'
                    name='guests'
                    required
                    value={form.guests}
                    onChange={onChange}
                    placeholder='50'
                    className={fieldClass}
                    style={fieldStyle}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name='message'
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder='Dietary requirements, budget, theme, anything else...'
                  className={`${fieldClass} resize-none`}
                  style={fieldStyle}
                />
              </div>
              <button
                type='submit'
                disabled={sending}
                className='text-sm font-medium px-10 py-4 rounded-full transition-all disabled:opacity-50 text-[#F5E6C8] self-start hover:opacity-90'
                style={{ background: '#6B0F1A' }}
              >
                {sending ? 'Sending...' : 'Send my request'}
              </button>
              <p className='text-[10px] text-[#6B0F1A]/35 leading-relaxed mt-2'>
                Your information is used only to respond to your enquiry and
                will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
