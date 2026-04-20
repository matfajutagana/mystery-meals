// ============================================================
//  SITE CONFIG — edit this file to update content site-wide
// ============================================================

export const INFO = {
  name: 'Mystery Meals',
  tagline: 'Premium catering services for all occasions in Milton, Ontario.',
  phone: '(647) 540-2235',
  email: 'mysterymeals.outlook.com',
  location: 'Milton, Ontario, Canada',
  instagram: 'https://www.instagram.com/mystery__meals/',
  web3key: '888a93ba-4a15-403c-920e-aab533d44ce1',
}

// Shared animation helpers
export const T =
  'transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
export const fade = (v, d = 0) =>
  `${T} ${d ? `delay-[${d}ms]` : ''} ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`
export const slideL = (v, d = 0) =>
  `${T} ${d ? `delay-[${d}ms]` : ''} ${v ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`
export const slideR = (v, d = 0) =>
  `${T} ${d ? `delay-[${d}ms]` : ''} ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`

// Shared style tokens
export const LD = 'text-[11px] uppercase tracking-[0.22em] text-[#F5E6C8]/40'
export const LL = 'text-[11px] uppercase tracking-[0.22em] text-[#6B0F1A]/50'
export const serif = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
}
export const DB = { borderBottom: '1px solid rgba(245,230,200,0.07)' }
export const DT = { borderTop: '1px solid rgba(245,230,200,0.07)' }
