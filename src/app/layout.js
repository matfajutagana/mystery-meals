import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'Mystery Meals - Catering Services in Milton, Ontario',
  description:
    'Premium catering for weddings, corporate events, private chef services and meal prep in Milton, Ontario and the GTA.',
  openGraph: {
    title: 'Mystery Meals - Catering Services in Milton, Ontario',
    description:
      'Premium catering for weddings, corporate events, private chef services and meal prep in Milton, Ontario and the GTA.',
    url: 'https://mysterymeals.ca',
    siteName: 'Mystery Meals',
    images: [
      {
        url: 'https://mysterymeals.ca/hero.jpg',
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
    images: ['https://mysterymeals.ca/hero.jpg'],
  },
  verification: {
    google:
      '<meta name="google-site-verification" content="UGmVLzDudd153425ZgWdgjo6W518AsFc2aZ-azKghUQ" />',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={geist.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
