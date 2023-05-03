import Image from 'next/image'
import Card from './components/reusable/Card'
import Listing from './components/reusable/Listing'
export default function Home() {
  return (
    <main className="m-0 p-0">
      <div className='w-full grid place-items-center'>
        <div className='w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {[...Array(5)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <Listing />
    </main>
  )
}
