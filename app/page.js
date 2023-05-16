"use server";
import Image from "next/image";
import Card from "./components/TempCard";
import Modal from "./components/modals/Modal";
import ChangeCurrency from "./components/footer/ChangeCurrency";
import Listings from "./components/Listings";
import TempListings from "./components/TempListings";
import RangeSlider from "./components/navbar/RangeSlider";

export default async function Home() {
  return (
    <main className="p-0 m-0">
      {/* <RangeSlider
        initialMin={2500}
        initialMax={7500}
        min={0}
        max={10000}
        step={100}
        priceCap={1000}
      /> */}
      {/* <Listings /> */}
      {/* DAAKOMENTARE AM XAZIS QVEMOT TU APIREB FIREBASEDAN WAMOGHEBAS LISTINGEBIS */}
      <TempListings />
    </main>
  );
}
