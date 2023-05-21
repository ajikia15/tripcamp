"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Search from "./Search";
import PriceFilter from "./PriceFilter";
import AddGuests from "./AddGuests";
import Calendar from "./Calendar";

export default function Navbar() {
  const [activeStates, setActiveStates] = useState({
    search: false,
    priceFilter: false,
    guests: false,
    calendar: false,
  });

  const refMap = {
    search: useRef(null),
    priceFilter: useRef(null),
    guests: useRef(null),
    calendar: useRef(null),
  };

  const handleClickOutside = (e) => {
    for (const refKey in refMap) {
      if (
        activeStates[refKey] &&
        refMap[refKey].current &&
        !refMap[refKey].current.contains(e.target)
      ) {
        setActiveStates((prevState) => ({
          ...prevState,
          [refKey]: false,
        }));
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, [activeStates]);

  const handleChildClick = (childKey) => {
    setActiveStates((prevState) => ({
      ...prevState,
      search: false,
      priceFilter: false,
      guests: false,
      calendar: false,
      [childKey]: true,
    }));
  };

  const buttonWasClicked = (e) => {
    e.preventDefault();
    if (addGuestsRef.current)
      console.log(addGuestsRef.current.value);
    else console.log("1");
  };

  const addGuestsRef = useRef(null);
  return (
    <>
      <Link href="/">
        <h1 className="z-0 py-5 text-xl font-semibold text-center border border-b border-gray-200">
          TripCamp
        </h1>
      </Link>

      <div className="grid w-full mt-5 mb-8 place-items-center">
        <div className="w-11/12 lg:w-3/5 py-2 px-4 text-lg rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition grid md:grid-cols-[3fr_5fr] z-40 bg-white">
          <ul className="justify-between hidden grid-cols-3 mx-3 item-center md:grid">
            <div
              ref={refMap.guests}
              onClick={() => handleChildClick("guests")}
              className="w-full">
              <AddGuests
                active={activeStates.guests}
                ref={addGuestsRef}
              />
            </div>
          </ul>
          <ul className="">
            <button
              className="h-full text-white bg-blue-600 rounded-full shadow-sm aspect-square hover:shadow-md"
              onClick={buttonWasClicked}>
              G
            </button>
          </ul>
        </div>
      </div>

      {(activeStates.search ||
        activeStates.priceFilter ||
        activeStates.guests ||
        activeStates.calendar) && (
        <div className="fixed inset-0 z-30 bg-black opacity-50" />
      )}
    </>
  );
}
