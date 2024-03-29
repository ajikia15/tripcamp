"use client";
import Listings from "./components/Listings";
import FooterFixed from "./components/footer/FooterFixed";
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useGlobalContext } from "./context/store";
import DeviceDetect from "./components/DeviceDetect";
export default function Page() {
  const housesCollectionRef = collection(db, "Houses");
  const [loading, setLoading] = useState(true);

  const { houses, setHouses, houseId } = useGlobalContext();
  const getHouses = async () => {
    const firestoreQuery = query(housesCollectionRef, orderBy("Prior"));
    const data = await getDocs(firestoreQuery);
    if (data.empty) {
      setLoading(false);
      return;
    }
    const housesData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    housesData.sort((a, b) => b.Prior - a.Prior); // Sort the houses by Prior
    setHouses(housesData);
  };
  useEffect(() => {
    getHouses();
  }, []);
  const filteredHouses = houses.filter(
    (house) =>
      (houseId == null || house.Options.includes(houseId)) &&
      house.Status == "Active"
  );
  return (
    <main className="p-0 m-0">
      <Listings filteredHouses={filteredHouses} />
      <DeviceDetect />
      <FooterFixed />
    </main>
  );
}
