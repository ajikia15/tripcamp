"use client";
import { db } from "../../../firebase-config";
import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect, useCallback } from "react";

export default function Search({
  active,
  searchTerm,
  setSearchTerm,
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

  const formatAddress = useCallback((address) => {
    const addressParts = address.split("~");
    const formattedAddress = addressParts
      .slice(0, 3)
      .join(", ");
    return formattedAddress;
  }, []);

  const filteredHouses =
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

  const handleHouseClick = (address) => {
    const formattedAddress = formatAddress(address);
    setSearchTerm(formattedAddress);
  };
  return (
    <>
      {active ? (
        <li className="relative flex flex-col w-full">
          <input
            className="w-full my-4 bg-gray-100 outline-none md:bg-white md:my-0"
            type="text"
            autoFocus
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Where to?"
          />
          <ul className="absolute left-2 right-2 md:-left-12 md:-right-12 grid grid-cols-1 top-[calc(100%+2rem)] bg-white shadow-xl rounded-xl divide-y max-h-[70vh] overflow-y-scroll z-50">
            <div>
              {filteredHouses.map((house) => {
                return (
                  <li
                    key={house.Id}
                    className="flex flex-col p-2 overflow-x-hidden text-black cursor-pointer group"
                    onClick={() =>
                      handleHouseClick(house.Address)
                    }>
                    <div className="flex flex-row pb-2 border-b gap-x-4">
                      <div className="flex items-center text-gray-400"></div>
                      <div className="flex flex-col">
                        <span className="">
                          {house.Name}
                        </span>
                        <small className="text-sm">
                          {formatAddress(house.Address)
                            .split(
                              new RegExp(
                                `(${searchTerm})`,
                                "gi"
                              )
                            )
                            .map((part, index) =>
                              part.toLowerCase() ===
                              searchTerm.toLowerCase() ? (
                                <span
                                  key={index}
                                  className="text-blue-600">
                                  {part}
                                </span>
                              ) : (
                                <span key={index}>
                                  {part}
                                </span>
                              )
                            )}
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
        <li className="flex flex-row justify-between w-full my-4 md:flex-col md:justify-normal">
          <h3 className="font-semibold md:w-full">
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
