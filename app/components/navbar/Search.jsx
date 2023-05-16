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
            {filteredHouses.map((house) => {
              return (
                <li
                  key={house.Id}
                  className="flex flex-col p-2 text-black cursor-pointer group">
                  <span className="">{house.Name}</span>
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
                          startIndex + searchTerm.length;

                        if (startIndex !== -1) {
                          return (
                            <span key={index}>
                              {part.slice(0, startIndex)}
                              <span className="text-blue-600">
                                {part.slice(
                                  startIndex,
                                  endIndex
                                )}
                              </span>
                              {part.slice(endIndex)}
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
                </li>
              );
            })}
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
