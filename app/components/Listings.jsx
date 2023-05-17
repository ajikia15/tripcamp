"use client";
import Card from "./Card";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";
export default function Listings(props) {
  const [houses, setHouses] = useState([]);
  const housesCollectionRef = collection(db, "Houses");
  useEffect(() => {
    const getHouses = async () => {
      const data = await getDocs(housesCollectionRef);
      console.log(data);
      setHouses(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.Id,
        }))
      );
    };
    getHouses();
  }, []);
  return (
    <>
      <div className="grid w-full place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6 ">
          {houses.map((house) => {
            return (
              <div>
                <Card listing={house} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
