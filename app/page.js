import Image from 'next/image'
import Card from './components/reusable/Card'
import Modal from './components/reusable/Modal'

export default function Home() {
  return (
    <main className="p-0 m-0">
      <div className='grid w-full place-items-center'>
        <div className='grid w-4/5 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {[...Array(5)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div>
        <Modal><div>balls</div></Modal>
      </div>
    </main>
  )
}
