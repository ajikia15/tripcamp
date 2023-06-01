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
  const initialLoad = 16;
  const housesCollectionRef = collection(db, "Houses");
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);
  const observerRef = useRef(null);

  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          observerRef.current.disconnect();
          await fetchMoreData();
        }
      },
      { threshold: 0.5 }
    );
    observerRef.current = observer;
    if (observerRef.current && mapRef.current) {
      observerRef.current.observe(mapRef.current);
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [houses]);
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
  const fetchMoreData = async () => {
    setLoading(true);
    const lastHouse = houses.length > 0 ? houses[houses.length - 1] : null;
    if (lastHouse) {
      const firestoreQuery = query(
        housesCollectionRef,
        orderBy("CreatedAt", "desc"),
        startAfter(lastHouse.CreatedAt),
        limit(1)
      );
      const data = await getDocs(firestoreQuery);
      if (data.docs.length === 0) {
        setLoading(false);
        return;
      }
      setHouses([
        ...houses,
        ...data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      ]);
    }
    setLoading(false);
  };
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
        houseList={houses}
        loading={loading}
        initialLoad={initialLoad}
      />
      <div ref={mapRef} className="bg-yellow-400"></div>
      <FooterFixed />
    </main>
  );
}
