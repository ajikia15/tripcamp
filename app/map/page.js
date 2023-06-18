"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useGlobalContext } from "../context/store";
import { useEffect, useState } from "react";
const MainMap = () => {
  const {
    houseId,
    guestsAmount,
    minMax,
    filterTerm,
    searchTerm,
    houses,
    setHouses,
  } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (houses.length < 1) {
  //     setLoading(true);
  //     const getHouses = async () => {
  //       const { collection, getDocs, query, orderBy } = await import(
  //         "firebase/firestore"
  //       );
  //       const { db } = await import("../../firebase-config");
  //       const housesCollectionRef = collection(db, "Houses");
  //       const firestoreQuery = query(
  //         housesCollectionRef,
  //         orderBy("CreatedAt", "desc")
  //       );
  //       const data = await getDocs(firestoreQuery);
  //       if (data.empty) {
  //         setLoading(false);
  //         return;
  //       }
  //       const housesData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       housesData.sort((a, b) => b.Prior - a.Prior); // Sort the houses by Prior
  //       setHouses(housesData);
  //       setLoading(false);
  //     };
  //     getHouses();
  //   }
  // }, []); // fix for no content after refreshing map
  const filteredHouses = houses.filter(
    (house) =>
      (houseId == null || house.Options.includes(houseId)) &&
      house.Beds >= guestsAmount &&
      house.Price >= minMax[0] &&
      house.Price <= minMax[1] &&
      (filterTerm.length < 1 ||
        filterTerm.every(
          (term) => house.Options.split(",").includes(`${term}`) // stringify
        )) &&
      house.Address.toLowerCase().includes(
        searchTerm.split(", ").slice(0, 3).join("~").toLowerCase()
      )
  );
  const Map = dynamic(() => import("./Map"), {
    ssr: false,
  });

  return (
    <>
      <div className="fixed z-20 -translate-x-1/2 cursor-pointer bottom-12 left-1/2">
        <Link href="/">
          <div className="flex flex-row items-center p-2 px-3 font-semibold text-white bg-gray-900 rounded-full gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 0H5v4h4V5zm4 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5zm6 0h-4v4h4V5zM3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4zm6 0H5v4h4v-4zm4 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4zm6 0h-4v4h4v-4z"
              />
            </svg>
            <p>Show Listings</p>
          </div>
        </Link>
      </div>
      <Map filteredHouses={filteredHouses} />
    </>
  );
};

export default MainMap;
