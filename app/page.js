import Image from 'next/image'
import Card from './components/reusable/Card'
import Modal from './components/modals/Modal'
import ChangeCurrency from './components/modals/ChangeCurrency'
import Listings from './components/Listings'

export default function Home() {

  return (
    <main className="p-0 m-0">
      <Listings />
      <div>
        <Modal />
      </div>

    </main >
  )
}
