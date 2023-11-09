"use client";

import { db } from "@/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const useRatings = (houseId) => {
  const ratingsCollectionRef = collection(db, 'Rating');
  const [ratings, setRatings] = useState([]);
  const [avg, setAvg] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRatings = async () => {
      setLoading(true);

      const ratingsQuery = query(
        ratingsCollectionRef,
        where("HouseId", "==", houseId)
      );

      const data = await getDocs(ratingsQuery);
      setLoading(false);

      if (data.empty) {
        return;
      }

      const ratingsData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setRatings(ratingsData);
    };

    fetchRatings();
  }, []);

  useEffect(() => {
    if (ratings.length) {
      const avg = ratings.map(({ Points }) => Points).reduce((a, b) => a + b, 0) / ratings.length;

      setAvg(parseFloat(avg).toFixed(2))
    }
  }, [ratings])

  return { ratings, avg, loading };
};

export default useRatings;
