"use client";
import { db } from "../../../firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
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
  const housesQuery = query(housesCollectionRef, limit(10));

  useEffect(() => {
    const getHouses = async () => {
      const data = await getDocs(housesQuery);
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

  const filteredHouses = houses.filter(
    (house) =>
      house.Name.toLowerCase().includes(
        searchTerm.toLowerCase()
      ) && searchTerm != ""
  );
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
          <ul className="absolute -left-12 right-0 flex flex-col top-[calc(100%+1rem)] bg-white shadow-xl rounded-xl gap-y-3">
            {filteredHouses.map((house) => {
              return (
                <li key={house.Id}>
                  {house.Name} <br />
                  <p className="text-sm">{house.Address}</p>
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
