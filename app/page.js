"use client";
import Listings from "./components/Listings";
import FooterFixed from "./components/footer/FooterFixed";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
export default function Home() {
  const initialLoad = 17;
  const housesCollectionRef = collection(db, "Houses");
  const [loading, setLoading] = useState(true);

  const [houses, setHouses] = useState([]);


  useEffect(() => {
    const getHouses = async () => {
      const firestoreQuery = query(
        housesCollectionRef,
        orderBy("CreatedAt", "desc"),
        limit(initialLoad)
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
        loading={loading}
        setLoading={setLoading}
        initialLoad={initialLoad}
        housesCollectionRef={housesCollectionRef}
      />
      <FooterFixed />
    </main>
  );
}
