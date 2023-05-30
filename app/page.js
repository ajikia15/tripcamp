"use client";
import Listings from "./components/Listings";
import FooterFixed from "./components/footer/FooterFixed";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  postToJSON,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
export default function Home() {
  const housesCollectionRef = collection(db, "Houses");

  const [houses, setHouses] = useState([]);
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
    };
    getHouses();
  }, []);
  return (
    <main className="p-0 m-0">
      <Listings houseList={houses} />
      <FooterFixed />
    </main>
  );
}
