import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import FooterFixed from './components/footer/FooterFixed'
import Categories from './components/Categories'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TripCamp',
  description: 'Best houses for you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        <Categories />
        {children}
      </body>
    </html>
  )
} 
