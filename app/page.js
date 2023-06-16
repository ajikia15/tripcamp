"use client";
import Listings from "./components/Listings";
import FooterFixed from "./components/footer/FooterFixed";
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useGlobalContext } from "./context/store";
export default function Page() {
  const housesCollectionRef = collection(db, "Houses");
  const [loading, setLoading] = useState(true);

  const { houses, setHouses } = useGlobalContext();

  useEffect(() => {
    const getHouses = async () => {
      const firestoreQuery = query(
        housesCollectionRef,
        orderBy("CreatedAt", "desc")
      );
      const data = await getDocs(firestoreQuery);
      if (data.empty) {
        setLoading(false);
        return;
      }
      setHouses(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setLoading(false);
    };
    getHouses();
  }, []);
  return (
    <main className="p-0 m-0">
      <Listings
        houses={houses}
        setHouses={setHouses}
        housesCollectionRef={housesCollectionRef}
      />
      <FooterFixed />
    </main>
  );
}
