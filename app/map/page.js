"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useGlobalContext } from "../context/store";
const MainMap = () => {
  const { houseId, guestsAmount, minMax, filterTerm, searchTerm, houses } =
    useGlobalContext();

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
      house.Address.toLowerCase()
        .replace(/[^\w\s]/gi, "") // :(
        .includes(searchTerm.toLowerCase().replace(/[^\w]/gi, ""))
  );
  const Map = dynamic(() => import("./Map"), {
    ssr: false,
  });

  return (
    <>
      <div className="fixed z-20 -translate-x-1/2 cursor-pointer bottom-12 left-1/2">
        <Link href={`/`}>
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
