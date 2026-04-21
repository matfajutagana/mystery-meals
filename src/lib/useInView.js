'use client'
import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting) // true when entering, false when leaving
      },
      {
        threshold,
        rootMargin: '0px 0px -120px 0px',
      },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}
