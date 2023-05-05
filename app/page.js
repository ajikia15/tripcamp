import Image from 'next/image'
import Card from './components/reusable/Card'
import Modal from './components/modals/Modal'
export default function Home() {
  return (
    <main className="p-0 m-0">
      <div className='grid w-full place-items-center'>
        <div className='grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6 '>
          {[...Array(5)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div>
        <Modal />
      </div>
    </main>
  )
}
