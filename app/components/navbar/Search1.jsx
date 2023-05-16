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

export default function Search(props) {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  const clickedInside = (e) => {
    e.preventDefault();
    setActive(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        active &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, [active, inputRef]);
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const housesCollectionRef = collection(db, "Houses");
  const fields = ["Name", "Address"];
  const housesQuery = query(housesCollectionRef, limit(10));

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
    // console.log("searchTerm:", value);
    setSearchTerm(value);
  };

  const filteredHouses =
    searchTerm !== ""
      ? houses.filter((house) =>
          house.Name.toLowerCase().includes(
            searchTerm.toLowerCase()
          )
        )
      : [];
  //   console.log("filteredHouses:", filteredHouses);

  return (
    <>
      {active ? (
        <li className="relative flex flex-col">
          <input
            className="w-full outline-none"
            type="text"
            autoFocus
            ref={inputRef}
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Where to?"
          />
          <ul className="absolute -left-12 -right-12 grid grid-cols-1 top-[calc(100%+2rem)] bg-white shadow-xl rounded-xl divide-y z-10">
            {filteredHouses.map((house) => {
              const addressParts = house.Address.split("~"); // split the address string into parts
              const visibleAddress =
                addressParts.length > 1
                  ? addressParts[1]
                  : house.Address;
              const name = house.Name;
              const startIndex = name
                .toLowerCase()
                .indexOf(searchTerm.toLowerCase());
              const endIndex =
                startIndex + searchTerm.length;
              return (
                <li
                  key={house.Id}
                  className="flex flex-col p-2 text-black cursor-pointer group">
                  <p className="transition-all group-hover:text-blue-600">
                    {name.slice(0, startIndex)}
                    <span className="text-blue-600 ">
                      {name.slice(startIndex, endIndex)}
                    </span>
                    <span>{name.slice(endIndex)}</span>
                  </p>

                  <small className="text-sm">
                    {visibleAddress}
                  </small>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <li
          className="flex flex-col"
          onClick={clickedInside}>
          <h3 className="font-semibold">Where to?</h3>
          <p className="text-xs text-gray-500">
            Anywhere • Any Week • Add guests
          </p>
        </li>
      )}
    </>
  );
}
