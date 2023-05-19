"use server";
import Image from "next/image";
import Card from "./components/TempCard";
import Modal from "./components/modals/Modal";
import ChangeCurrency from "./components/footer/ChangeCurrency";
import Listings from "./components/Listings";
import TempListings from "./components/TempListings";
import FooterFixed from "./components/footer/FooterFixed";
export default async function Home() {
  return (
    <main className="p-0 m-0">
      <Listings />
      {/* DAAKOMENTARE AM XAZIS QVEMOT TU APIREB FIREBASEDAN WAMOGHEBAS LISTINGEBIS */}
      {/* <TempListings /> */}
      <FooterFixed />

    </main>
  );
}
