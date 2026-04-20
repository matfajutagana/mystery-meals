'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const services = [
  {
    img: '/event.jpg',
    title: 'Wedding Catering',
    desc: 'Make your special day truly unforgettable. We provide elegant, customized catering for weddings of all sizes — from intimate ceremonies to grand receptions. Every dish is prepared fresh and presented beautifully.',
    features: [
      'Custom menu planning',
      'Full setup & cleanup',
      'Halal options available',
      'Dietary accommodations',
    ],
  },
  {
    img: '/corporate.jpg',
    title: 'Corporate Events',
    desc: "Impress your clients, partners, and team with professional catering that reflects your company's standards. We handle everything from boardroom lunches to large corporate galas.",
    features: [
      'Breakfast & lunch packages',
      'Boardroom setups',
      'Large scale events',
      'Professional presentation',
    ],
  },
  {
    img: '/chef.jpg',
    title: 'Private Chef',
    desc: 'Enjoy a restaurant-quality dining experience in the comfort of your own home. Our private chef service is perfect for dinner parties, date nights, or any special occasion.',
    features: [
      'In-home dining experience',
      'Custom menu creation',
      'Full kitchen cleanup',
      'Special occasion packages',
    ],
  },
  {
    img: '/menu.jpg',
    title: 'Meal Prep',
    desc: 'Stay on track with your health and lifestyle goals. We prepare fresh, delicious, and nutritious meals for the week so you can focus on what matters most.',
    features: [
      'Weekly meal packages',
      'Custom dietary plans',
      'Fresh daily ingredients',
      'Delivery available',
    ],
  },
]

export default function Services() {
  const [heroRef, heroInView] = useInView()
  const [servicesRef, servicesInView] = useInView()

  return (
    <div className='bg-[#FAFAF8]'>
      {/* Hero */}
      <section className='bg-[#6B0F1A] py-24 px-4 text-center'>
        <p className='uppercase tracking-widest text-[#F5E6C8]/60 text-sm mb-4'>
          What We Offer
        </p>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          Our Services
        </h1>
        <p className='text-[#F5E6C8]/80 text-xl max-w-2xl mx-auto'>
          From intimate private dinners to large corporate events — we bring
          passion and professionalism to every occasion.
        </p>
      </section>

      {/* Services List */}
      <section ref={servicesRef} className='py-24 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col gap-24'>
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-16 transition-all duration-700 ${
                servicesInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className='flex-1'>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={600}
                  height={450}
                  className='rounded-3xl shadow-2xl object-cover w-full h-[400px]'
                />
              </div>
              <div className='flex-1'>
                <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-3'>
                  0{i + 1}
                </p>
                <h2 className='text-3xl md:text-4xl font-bold text-[#6B0F1A] mb-6'>
                  {service.title}
                </h2>
                <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                  {service.desc}
                </p>
                <ul className='flex flex-col gap-3 mb-10'>
                  {service.features.map((f, j) => (
                    <li
                      key={j}
                      className='flex items-center gap-3 text-gray-700'
                    >
                      <span className='w-6 h-6 rounded-full bg-[#6B0F1A] text-[#F5E6C8] flex items-center justify-center text-xs'>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href='/contact'
                  className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-8 py-4 rounded-full hover:bg-[#8B1A2A] transition inline-block'
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#6B0F1A] py-24 px-4 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Ready to Get Started?
          </h2>
          <p className='text-[#F5E6C8]/80 text-xl mb-10'>
            Contact us today for a free consultation. We'd love to be part of
            your next event!
          </p>
          <Link
            href='/contact'
            className='bg-[#F5E6C8] text-[#6B0F1A] font-bold px-12 py-5 rounded-full hover:bg-white transition text-xl inline-block'
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
