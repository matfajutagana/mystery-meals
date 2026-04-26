import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://mysterymeals.ca'),
  title: 'Mystery Meals - Catering Services in Milton, Ontario',
  description:
    'Premium catering for weddings, corporate events, private chef services and meal prep in Milton, Ontario and the GTA.',
  keywords:
    'catering Milton Ontario, wedding catering Milton, corporate catering GTA, halal catering Milton, private chef Milton, meal prep Milton',
  authors: [{ name: 'Mystery Meals', url: 'https://mysterymeals.ca' }],
  creator: 'Mystery Meals',
  alternates: {
    canonical: 'https://mysterymeals.ca',
  },
  openGraph: {
    title: 'Mystery Meals - Catering Services in Milton, Ontario',
    description:
      'Premium catering for weddings, corporate events, private chef services and meal prep in Milton, Ontario and the GTA.',
    url: 'https://mysterymeals.ca',
    siteName: 'Mystery Meals',
    images: [
      {
        url: 'https://mysterymeals.ca/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mystery Meals Catering',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mystery Meals - Catering Services in Milton, Ontario',
    description:
      'Premium catering for weddings, corporate events, private chef services and meal prep in Milton, Ontario and the GTA.',
    images: ['https://mysterymeals.ca/hero-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  verification: {
    google: 'UGmVLzDudd153425ZgWdgjo6W518AsFc2aZ-azKghUQ',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Mystery Meals',
  url: 'https://mysterymeals.ca',
  image: 'https://mysterymeals.ca/hero-1.jpg',
  description:
    'Premium catering for weddings, corporate events, private chef services and meal prep in Milton, Ontario and the GTA.',
  servesCuisine: 'Various',
  areaServed: ['Milton', 'GTA', 'Ontario'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Milton',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={geist.className}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
