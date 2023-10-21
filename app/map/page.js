"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useGlobalContext } from "../context/store";
import { useEffect, useState } from "react";

const MainMap = () => {
  const { houses, houseId, guestsAmount, minMax, filterTerm, searchTerm } =
    useGlobalContext();
  const [loading, setLoading] = useState(false);
  // fix for no content after refreshing map
  const Map = dynamic(() => import("./Map"), {
    ssr: false,
  });

  return (
    <>
      <div className="fixed z-20 -translate-x-1/2 cursor-pointer bottom-12 left-1/2">
        <Link href="/">
          <div className="flex flex-row items-center p-2 px-3 font-semibold text-white bg-gray-900 rounded-full gap-x-2">
            <p>Show Listings</p>
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
          </div>
        </Link>
      </div>
      <Map filteredHouses={houses} />
    </>
  );
};

export default MainMap;
