'use client'
import { useState } from 'react'

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '888a93ba-4a15-403c-920e-aab533d44ce1',
        ...formData,
      }),
    })
    if (res.ok) setSubmitted(true)
  }

  return (
    <div className='bg-[#FAFAF8] min-h-screen'>
      {/* Hero */}
      <section className='bg-[#6B0F1A] py-24 px-4 text-center'>
        <p className='uppercase tracking-widest text-[#F5E6C8]/60 text-sm mb-4'>
          Reach Out
        </p>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          Get a Free Quote
        </h1>
        <p className='text-[#F5E6C8]/80 text-xl max-w-2xl mx-auto'>
          Tell us about your event and we'll get back to you within 24 hours
          with a custom quote.
        </p>
      </section>

      {/* Form Section */}
      <section className='py-24 px-4'>
        <div className='max-w-3xl mx-auto'>
          {submitted ? (
            <div className='text-center py-20'>
              <div className='text-7xl mb-6'>🎉</div>
              <h2 className='text-3xl font-bold text-[#6B0F1A] mb-4'>
                Thank You!
              </h2>
              <p className='text-gray-600 text-xl'>
                We've received your request and will get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='bg-white rounded-3xl shadow-xl p-10 flex flex-col gap-6'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-bold text-[#6B0F1A] mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6B0F1A] transition'
                    placeholder='John Smith'
                  />
                </div>
                <div>
                  <label className='block text-sm font-bold text-[#6B0F1A] mb-2'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6B0F1A] transition'
                    placeholder='john@email.com'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-bold text-[#6B0F1A] mb-2'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6B0F1A] transition'
                    placeholder='(905) 123-4567'
                  />
                </div>
                <div>
                  <label className='block text-sm font-bold text-[#6B0F1A] mb-2'>
                    Event Type *
                  </label>
                  <select
                    name='eventType'
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className='w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6B0F1A] transition bg-white'
                  >
                    <option value=''>Select event type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Private Party</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-bold text-[#6B0F1A] mb-2'>
                    Event Date *
                  </label>
                  <input
                    type='date'
                    name='eventDate'
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className='w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6B0F1A] transition'
                  />
                </div>
                <div>
                  <label className='block text-sm font-bold text-[#6B0F1A] mb-2'>
                    Number of Guests *
                  </label>
                  <input
                    type='number'
                    name='guests'
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className='w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6B0F1A] transition'
                    placeholder='50'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-bold text-[#6B0F1A] mb-2'>
                  Tell Us More
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className='w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6B0F1A] transition resize-none'
                  placeholder='Tell us about your event, dietary requirements, budget, etc.'
                />
              </div>

              <button
                type='submit'
                className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-10 py-4 rounded-full hover:bg-[#8B1A2A] transition text-lg'
              >
                Send My Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className='pb-24 px-4'>
        <div className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
          {[
            { icon: '📍', title: 'Location', info: 'Milton, Ontario, Canada' },
            { icon: '📞', title: 'Phone', info: '(905) 123-4567' },
            { icon: '✉️', title: 'Email', info: 'info@mysterymeals.ca' },
          ].map((item, i) => (
            <div key={i} className='bg-white rounded-2xl p-8 shadow-md'>
              <div className='text-4xl mb-4'>{item.icon}</div>
              <h3 className='font-bold text-[#6B0F1A] mb-2'>{item.title}</h3>
              <p className='text-gray-500'>{item.info}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
