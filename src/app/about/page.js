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

export default function About() {
  const [storyRef, storyInView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <div className='bg-[#FAFAF8]'>
      {/* Hero */}
      <section className='bg-[#6B0F1A] py-24 px-4 text-center'>
        <p className='uppercase tracking-widest text-[#F5E6C8]/60 text-sm mb-4'>
          Who We Are
        </p>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          About Mystery Meals
        </h1>
        <p className='text-[#F5E6C8]/80 text-xl max-w-2xl mx-auto'>
          A Milton-based catering company built on passion, quality, and a love
          for bringing people together through food.
        </p>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className='py-24 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
          <div
            className={`flex-1 transition-all duration-700 ${
              storyInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className='relative'>
              <Image
                src='/chef.jpg'
                alt='Our Story'
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
              storyInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-4'>
              Our Story
            </p>
            <h2 className='text-3xl md:text-5xl font-bold text-[#6B0F1A] mb-8 leading-tight'>
              Born from a Passion for Great Food
            </h2>
            <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
              Mystery Meals was born from a simple belief — that great food has
              the power to bring people together. What started as a passion for
              cooking has grown into a full-service catering company serving
              Milton, Ontario and the surrounding GTA.
            </p>
            <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
              As an entrepreneur-led business, we specialize in meal prep,
              catering, private chef services, and corporate & private events.
              Every dish we prepare is made with fresh, locally sourced
              ingredients and a whole lot of love.
            </p>
            <p className='text-gray-600 mb-10 text-lg leading-relaxed'>
              We are proud to offer halal options and cater to a wide range of
              dietary needs, ensuring every guest at your table feels taken care
              of.
            </p>
            <Link
              href='/contact'
              className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-8 py-4 rounded-full hover:bg-[#8B1A2A] transition inline-block'
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className='bg-[#6B0F1A] py-20 px-4'>
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

      {/* Values */}
      <section ref={valuesRef} className='py-24 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              valuesInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className='uppercase tracking-widest text-[#6B0F1A]/60 text-sm mb-3'>
              What We Stand For
            </p>
            <h2 className='text-3xl md:text-5xl font-bold text-[#6B0F1A]'>
              Our Values
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: '🌿',
                title: 'Fresh & Local',
                desc: 'We source fresh, locally grown ingredients for every meal we prepare. Quality starts at the source.',
              },
              {
                icon: '❤️',
                title: 'Made with Love',
                desc: "Every dish is prepared with care and attention to detail. We treat every event like it's our own.",
              },
              {
                icon: '🤝',
                title: 'Community First',
                desc: 'As a Milton-based business, we are proud to serve our community and give back whenever we can.',
              },
              {
                icon: '🌍',
                title: 'Inclusive Menus',
                desc: 'We offer halal options and cater to all dietary needs — vegetarian, vegan, gluten-free and more.',
              },
              {
                icon: '✨',
                title: 'Attention to Detail',
                desc: 'From presentation to punctuality, we sweat the small stuff so your event runs perfectly.',
              },
              {
                icon: '🎯',
                title: 'Custom Experiences',
                desc: 'No two events are the same. We work closely with you to create a truly personalized experience.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-700 delay-${
                  i * 100
                } ${
                  valuesInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className='text-5xl mb-4'>{item.icon}</div>
                <h3 className='text-xl font-bold text-[#6B0F1A] mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-500 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className='py-16 px-4 bg-[#6B0F1A]/5'>
        <div className='max-w-3xl mx-auto text-center'>
          <span className='text-5xl mb-6 block'>📸</span>
          <h2 className='text-3xl font-bold text-[#6B0F1A] mb-4'>
            Follow Our Journey
          </h2>
          <p className='text-gray-600 text-lg mb-8'>
            See our latest creations, events, and behind the scenes on
            Instagram.
          </p>
          <a
            href='https://www.instagram.com/mystery__meals/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#6B0F1A] text-[#F5E6C8] font-bold px-10 py-4 rounded-full hover:bg-[#8B1A2A] transition inline-block'
          >
            Follow @mystery__meals
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#6B0F1A] py-24 px-4 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Let's Create Something Special
          </h2>
          <p className='text-[#F5E6C8]/80 text-xl mb-10'>
            Whether it's an intimate dinner or a grand celebration, we'd love to
            be part of your story.
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
