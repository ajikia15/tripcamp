"use server"
import Image from 'next/image'
import Card from './components/TempCard'
import Modal from './components/modals/Modal'
import ChangeCurrency from './components/modals/ChangeCurrency'
import Listings from './components/Listings'
import TempListings from './components/TempListings'

export default async function Home() {

  return (
    <main className="p-0 m-0">
      {/* <Listings /> */}
      {/* DAAKOMENTARE AM XAZIS QVEMOT TU APIREB FIREBASEDAN WAMOGHEBAS LISTINGEBIS */}
      <TempListings />
    </main >
  )
}
