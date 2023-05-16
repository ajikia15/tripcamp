"use client";
import { db } from "../../../firebase-config";
import {
  collection,
  query,
  getDocs,
  limit,
  project,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";

export default function Search({ active }) {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const housesCollectionRef = collection(db, "Houses");
  const fields = ["Name", "Address"];
  const housesQuery = query(housesCollectionRef);

  useEffect(() => {
    const getHouses = async () => {
      const data = await getDocs(housesQuery, { fields });
      console.log(
        "data:",
        data.docs.map((doc) => doc.data())
      );
      setHouses(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getHouses();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const filteredHouses =
    searchTerm !== ""
      ? houses.filter((house) =>
          house.Address.toLowerCase().includes(
            searchTerm.toLowerCase()
          )
        )
      : [];
  const formatAddress = (address) => {
    const parts = address.split("~").slice(0, 3);
    let formattedAddress = parts.join(", ");
    // Remove trailing comma
    return formattedAddress;
  };
  return (
    <>
      {active ? (
        <li className="relative flex flex-col ">
          <input
            className="w-full outline-none"
            type="text"
            autoFocus
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Where to?"
          />
          <ul className="absolute -left-12 -right-12 grid grid-cols-1 top-[calc(100%+2rem)] bg-white shadow-xl rounded-xl divide-y max-h-[70vh] overflow-y-scroll">
            <div>
              {filteredHouses.map((house) => {
                return (
                  <li
                    key={house.Id}
                    className="flex flex-col p-2 overflow-x-hidden text-black cursor-pointer group">
                    <div className="flex flex-row pb-2 border-b gap-x-4">
                      <div className="flex items-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 512 512">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137Z"
                          />
                          <circle
                            cx="256"
                            cy="192"
                            r="48"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="">
                          {house.Name}
                        </span>
                        <small className="text-sm">
                          {formatAddress(house.Address)
                            .split(" ")
                            .map((part, index) => {
                              const startIndex = part
                                .toLowerCase()
                                .indexOf(
                                  searchTerm.toLowerCase()
                                );
                              const endIndex =
                                startIndex +
                                searchTerm.length;

                              if (startIndex !== -1) {
                                return (
                                  <span
                                    key={index}
                                    className="truncate ">
                                    {part.slice(
                                      0,
                                      startIndex
                                    )}
                                    <span className="text-blue-600">
                                      {part.slice(
                                        startIndex,
                                        endIndex
                                      )}
                                    </span>
                                    {part.slice(endIndex)}
                                    &nbsp;
                                  </span>
                                );
                              } else {
                                return (
                                  <span key={index}>
                                    {part}&nbsp;
                                  </span>
                                );
                              }
                            })}
                        </small>
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          </ul>
        </li>
      ) : (
        <li className="flex flex-col w-full">
          <h3 className="w-full font-semibold">
            {searchTerm || "Where to?"}
          </h3>
          {searchTerm ? null : (
            <p className="text-xs text-gray-500">
              Anywhere • Any Week • Add guests
            </p>
          )}
        </li>
      )}
    </>
  );
}
