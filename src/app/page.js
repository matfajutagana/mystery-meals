'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Mystery Meals made our wedding absolutely perfect. The food was incredible and the service was flawless!',
  },
  {
    name: 'James T.',
    text: "Best corporate catering we've ever had. Our clients were thoroughly impressed. Will book again!",
  },
  {
    name: 'Priya K.',
    text: 'They catered our family reunion and everyone is still talking about the food. Highly recommend!',
  },
  {
    name: 'Marcus L.',
    text: 'Professional, punctual, and the food was outstanding. Mystery Meals exceeded every expectation.',
  },
  {
    name: 'Linda R.',
    text: 'From the first consultation to the last bite, everything was perfect. True professionals!',
  },
  {
    name: 'David C.',
    text: "The attention to detail and quality of food was next level. Our guests couldn't stop complimenting the meal.",
  },
]

export default function Home() {
  const [statsRef, statsInView] = useInView()
  const [whyRef, whyInView] = useInView()
  const [chefRef, chefInView] = useInView()
  const [servicesRef, servicesInView] = useInView()
  const [menuRef, menuInView] = useInView()

  return (
    <div className='bg-[#FAFAF8] overflow-x-hidden'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center'>
        <Image
          src='/hero.jpg'
          alt='Hero'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#6B0F1A]/80 via-[#6B0F1A]/60 to-[#6B0F1A]/80' />
        <div className='relative z-10 text-center text-[#F5E6C8] px-4 max-w-5xl mx-auto'>
          <p className='uppercase tracking-[0.3em] text-[#F5E6C8]/70 text-sm mb-4'>
            Milton, Ontario
          </p>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
            Catering That Leaves a <br />
            <span className='text-[#F5E6C8] italic'>Lasting Impression</span>
          </h1>
          <p className='text-lg md:text-xl mb-10 text-[#F5E6C8]/80 max-w-2xl mx-auto'>
            Premium catering for weddings, corporate events, and special
            occasions across Milton and the GTA.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-[#F5E6C8] text-[#6B0F1A] font-bold px-10 py-4 rounded-full hover:bg-white transition text-center text-lg'
            >
              Get a Free Quote
            </Link>
            <Link
              href='/services'
              className='border-2 border-[#F5E6C8] text-[#F5E6C8] font-bold px-10 py-4 rounded-full hover:bg-[#F5E6C8] hover:text-[#6B0F1A] transition text-center text-lg'
            >
              Our Services
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F5E6C8]/60'>
          <span className='text-xs uppercase tracking-widest'>Scroll</span>
          <div className='w-px h-10 bg-[#F5E6C8]/40 animate-pulse' />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className='bg-[#6B0F1A] py-16 px-4'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {[
            { number: '500+', label: 'Events Catered' },
            { number: '5+', label: 'Years Experience' },
            { number: '98%', label: 'Happy Clients' },
            { number: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`transition-all duration-700 delay-${i * 100} ${
                statsInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                {stat.number}
              </div>
              <div className='text-[#F5E6C8]/70 uppercase tracking-widest text-sm'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className='py-24 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              whyInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-3'>
              Why Us
            </p>
            <h2 className='text-3xl md:text-5xl font-bold text-[#6B0F1A]'>
              The Mystery Meals Difference
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: '🍽️',
                title: 'Fresh Ingredients',
                desc: 'We use only the freshest locally sourced ingredients to create memorable meals for every occasion.',
              },
              {
                icon: '👨‍🍳',
                title: 'Expert Chefs',
                desc: 'Our team of experienced chefs brings creativity and skill to every dish we prepare.',
              },
              {
                icon: '✅',
                title: 'Reliable Service',
                desc: 'From setup to cleanup, we handle everything so you can enjoy your event stress-free.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-10 shadow-md text-center hover:shadow-xl transition-all duration-700 delay-${
                  i * 150
                } ${
                  whyInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className='text-6xl mb-6'>{item.icon}</div>
                <h3 className='text-xl font-bold text-[#6B0F1A] mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-500 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef/About Section */}
      <section ref={chefRef} className='py-24 px-4 bg-[#6B0F1A]/5'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div
            className={`flex-1 transition-all duration-700 ${
              chefInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className='relative'>
              <Image
                src='/chef.jpg'
                alt='Our Chef'
                width={500}
                height={600}
                className='rounded-3xl shadow-2xl object-cover w-full h-[500px]'
              />
              <div className='absolute -bottom-6 -right-6 bg-[#6B0F1A] text-[#F5E6C8] rounded-2xl p-6 shadow-xl'>
                <div className='text-3xl font-bold'>5+</div>
                <div className='text-sm text-[#F5E6C8]/70'>
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 transition-all duration-700 delay-200 ${
              chefInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-4'>
              Our Story
            </p>
            <h2 className='text-3xl md:text-5xl font-bold text-[#6B0F1A] mb-8 leading-tight'>
              Passion for Food, Dedication to Excellence
            </h2>
            <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
              At Mystery Meals, we believe every meal tells a story. Our team of
              professional chefs brings years of experience and a love for food
              to every event we cater.
            </p>
            <p className='text-gray-600 mb-10 text-lg leading-relaxed'>
              Based in Milton, Ontario, we are proud to serve our community with
              fresh, delicious, and beautifully presented meals for any
              occasion.
            </p>
            <Link
              href='/about'
              className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-8 py-4 rounded-full hover:bg-[#8B1A2A] transition inline-block'
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className='py-24 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              servicesInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-3'>
              What We Do
            </p>
            <h2 className='text-3xl md:text-5xl font-bold text-[#6B0F1A]'>
              Our Services
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[
              {
                img: '/event.jpg',
                title: 'Weddings & Events',
                desc: 'Make your special day unforgettable with our elegant wedding catering services.',
              },
              {
                img: '/corporate.jpg',
                title: 'Corporate Events',
                desc: 'Impress your clients and team with professional, sophisticated catering.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden shadow-lg h-80 group transition-all duration-700 delay-${
                  i * 200
                } ${
                  servicesInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-cover group-hover:scale-110 transition duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#6B0F1A]/90 via-[#6B0F1A]/40 to-transparent' />
                <div className='absolute bottom-0 left-0 p-8 text-[#F5E6C8]'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-[#F5E6C8]/80'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link
              href='/services'
              className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-10 py-4 rounded-full hover:bg-[#8B1A2A] transition inline-block'
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Ticker */}
      <section className='bg-[#6B0F1A]/5 py-20 overflow-hidden'>
        <div className='text-center mb-12'>
          <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-3'>
            Testimonials
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-[#6B0F1A]'>
            What Our Clients Say
          </h2>
        </div>
        <div className='relative'>
          <div className='flex gap-6 animate-marquee whitespace-nowrap'>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className='inline-flex flex-col bg-white rounded-3xl p-8 shadow-md min-w-[350px] whitespace-normal'
              >
                <p className='text-gray-600 mb-6 leading-relaxed'>"{t.text}"</p>
                <div className='flex items-center gap-3 mt-auto'>
                  <div className='w-10 h-10 rounded-full bg-[#6B0F1A] flex items-center justify-center text-[#F5E6C8] font-bold'>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className='font-bold text-[#6B0F1A]'>{t.name}</div>
                    <div className='text-yellow-400 text-sm'>★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section ref={menuRef} className='py-24 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div
            className={`flex-1 transition-all duration-700 ${
              menuInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-4'>
              Food
            </p>
            <h2 className='text-3xl md:text-5xl font-bold text-[#6B0F1A] mb-8 leading-tight'>
              Explore Our Menu
            </h2>
            <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
              From elegant plated dinners to casual buffets, our menu is
              designed to delight every palate with customizable options for any
              dietary needs.
            </p>
            <p className='text-gray-600 mb-10 text-lg leading-relaxed'>
              All dishes are prepared fresh on the day of your event using
              seasonal, locally sourced ingredients.
            </p>
            <Link
              href='/menu'
              className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-8 py-4 rounded-full hover:bg-[#8B1A2A] transition inline-block'
            >
              View Full Menu
            </Link>
          </div>
          <div
            className={`flex-1 transition-all duration-700 delay-200 ${
              menuInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className='bg-white rounded-3xl shadow-2xl p-4 w-full'>
              <Image
                src='/menu.jpg'
                alt='Our Menu'
                width={500}
                height={400}
                className='rounded-2xl object-contain w-full h-[450px]'
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-32 px-4'>
        <Image
          src='/event.jpg'
          alt='CTA Background'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-[#6B0F1A]/85' />
        <div className='relative z-10 text-center text-[#F5E6C8] max-w-3xl mx-auto'>
          <p className='uppercase tracking-widest text-[#F5E6C8]/60 text-sm mb-4'>
            Get Started
          </p>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-8 leading-tight'>
            Ready to Plan Your Next Event?
          </h2>
          <p className='text-[#F5E6C8]/80 mb-10 text-xl leading-relaxed'>
            Contact us today for a free consultation and quote. Serving Milton,
            Ontario and surrounding areas.
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
