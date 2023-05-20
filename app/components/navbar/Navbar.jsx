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

  return (
    <>
      <Link href="/">
        <h1 className="z-0 py-5 text-xl font-semibold text-center border border-b border-gray-200">
          TripCamp
        </h1>
      </Link>
      {(activeStates.search ||
        activeStates.priceFilter ||
        activeStates.guests ||
        activeStates.calendar) && (
        <div className="fixed inset-0 z-30 bg-black opacity-50" />
      )}
      <div className="grid w-full mt-5 mb-8 place-items-center">
        <div className="w-11/12 lg:w-3/5 py-2 px-4 text-lg rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition grid md:grid-cols-[3fr_5fr] z-40 bg-white">
          <ul className="flex flex-row items-center gap-3 cursor-pointer ">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                />
              </svg>
            </li>
            <div
              ref={refMap.search}
              onClick={() => handleChildClick("search")}
              className="w-full">
              <Search active={activeStates.search} />
            </div>
          </ul>
          <ul className="justify-between hidden grid-cols-3 mx-3 item-center md:grid">
            <div
              ref={refMap.calendar}
              onClick={() => handleChildClick("calendar")}
              className="w-full cursor-pointer">
              <Calendar active={activeStates.calendar} />
            </div>
            <div
              ref={refMap.priceFilter}
              onClick={() =>
                handleChildClick("priceFilter")
              }
              className="w-full">
              <PriceFilter
                active={activeStates.priceFilter}
                initialMin={0}
                initialMax={400}
                min={0}
                max={400}
                step={10}
                priceCap={10}
              />
            </div>
            <div
              ref={refMap.guests}
              onClick={() => handleChildClick("guests")}
              className="w-full">
              <AddGuests active={activeStates.guests} />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
