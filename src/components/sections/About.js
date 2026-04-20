'use client'
import Image from 'next/image'
import { useInView } from '@/lib/useInView'
import { LD, serif, DB, fade, slideL, slideR } from '@/lib/siteConfig'

// ✏️ EASY EDIT
const CHEF = {
  image: '/chef.jpg', // 📸 swap to actual Chef Roven photo
  name: 'Chef Roven',
  role: 'Founder & Head Chef',
  quote:
    '"Food is how we show love. Every dish we prepare carries that intention."',
  bio: 'Mystery Meals is a family business, and at its heart is Chef Roven. What started as a passion for cooking has grown into a full-service catering company serving Milton and the GTA — built on fresh ingredients, halal options, and a genuine love for bringing people together.',
  years: '5+',
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section
      id='about'
      ref={ref}
      className='px-6 md:px-16 py-28'
      style={{ background: '#180306', ...DB }}
    >
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16'>
        {/* Photo */}
        <div className={`flex-1 ${slideL(inView, 0)}`}>
          <div className='relative'>
            <Image
              src={CHEF.image}
              alt={CHEF.name}
              width={500}
              height={600}
              className='rounded-2xl object-cover w-full h-[520px] opacity-90'
            />
            <div
              className={`absolute bottom-6 left-6 rounded-xl px-5 py-4 ${fade(inView, 350)}`}
              style={{
                background: 'rgba(20,3,8,0.85)',
                border: '1px solid rgba(245,230,200,0.12)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className='text-base font-medium text-[#F5E6C8]'>
                {CHEF.name}
              </div>
              <div className='text-[10px] uppercase tracking-widest text-[#F5E6C8]/40 mt-0.5'>
                {CHEF.role}
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className='flex-1'>
          <p className={`${LD} mb-5 ${fade(inView, 80)}`}>
            The face behind the food
          </p>
          <blockquote
            className={`border-l-2 border-[#6B0F1A]/50 pl-6 mb-8 ${fade(inView, 160)}`}
          >
            <p
              className='text-xl font-light text-[#F5E6C8]/80 leading-relaxed'
              style={{ ...serif, fontStyle: 'italic' }}
            >
              {CHEF.quote}
            </p>
          </blockquote>
          <p
            className={`text-sm text-[#F5E6C8]/60 leading-relaxed mb-10 ${fade(inView, 260)}`}
          >
            {CHEF.bio}
          </p>
          <div className={`flex items-center gap-6 ${fade(inView, 360)}`}>
            <div>
              <div className='text-3xl font-light text-[#F5E6C8]'>
                {CHEF.years}
              </div>
              <div className='text-[10px] uppercase tracking-widest text-[#F5E6C8]/40 mt-0.5'>
                Years of excellence
              </div>
            </div>
            <div
              className='w-px h-10'
              style={{ background: 'rgba(245,230,200,0.1)' }}
            />
            <a
              href='#contact'
              className='text-sm text-[#F5E6C8]/60 border-b border-[#F5E6C8]/20 pb-0.5 hover:text-[#F5E6C8] hover:border-[#F5E6C8]/50 transition-colors'
            >
              Work with us →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
