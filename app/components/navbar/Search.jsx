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
                  className="flex flex-col p-2 text-black cursor-pointer group">
                  <div className="flex items-center gap-x-4 border-b pb-2">
                    <div><svg className="text-zinc-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z"/><path fill="currentColor" d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"/></svg></div>
                    <div>
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
