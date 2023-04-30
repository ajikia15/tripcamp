import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`p-0 ${inter.className}`}
    >
      <Navbar />
      <p className='text-blue-400'>big balls</p>
      <p className='text-Slate-900'> Enacvalos Mamam </p>
    </main>
  )
}

// Hello, World // Your Mother // 
// ენაცვალოს დედამ! //
//Mamamac//
