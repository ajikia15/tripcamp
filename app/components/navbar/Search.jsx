"use client";
import { db } from "../../../firebase-config";
import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Search({
  active,
  searchTerm,
  setSearchTerm,
  setFilteredHouses,
  formatAddress,
  pathname,
}) {
  const [houses, setHouses] = useState([]);
  const housesCollectionRef = collection(db, "Houses");
  const fields = ["Name", "Address"];
  const housesQuery = query(housesCollectionRef);

  useEffect(() => {
    const getHouses = async () => {
      const data = await getDocs(housesQuery, { fields });
      setHouses(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    if (searchTerm.length >= 2) {
      getHouses();
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    const filtered =
      searchTerm !== ""
        ? houses.filter((house) => {
            const formattedAddress = formatAddress(
              house.Address
            );
            return formattedAddress
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
        : [];
    setFilteredHouses(filtered);
  }, [houses, searchTerm, formatAddress]);

  const clearSearch = (e) => {
    setSearchTerm("");
  };
  return (
    <>
      {active ? (
        <li className="relative flex flex-col w-full">
          <input
            className="w-4/5 h-full my-4 bg-gray-100 outline-none md:bg-white md:my-0"
            type="text"
            autoFocus
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Where to?"
          />
          {searchTerm !== "" && (
            <button
              type="button"
              className="absolute text-gray-400 -translate-y-1/2 top-1/2 right-6"
              onClick={clearSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
                />
              </svg>
            </button>
          )}
        </li>
      ) : (
        <li className="flex flex-row justify-between w-full my-4 md:flex-col md:justify-normal text-elipsis">
          <h3 className="w-[92%] overflow-hidden text-lg font-semibold line-clamp-1">
            {searchTerm.split(",")[1] ||
              searchTerm ||
              "Where to?"}
          </h3>
          {searchTerm || pathname != "/" ? null : (
            <p className="text-xs text-gray-500">
              Anywhere • Any Week • Add guests
            </p>
          )}
        </li>
      )}
    </>
  );
}
