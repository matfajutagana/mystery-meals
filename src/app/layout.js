import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'Mystery Meals - Catering Services in Milton, Ontario',
  description:
    'Premium catering services for all occasions in Milton, Ontario.',
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
