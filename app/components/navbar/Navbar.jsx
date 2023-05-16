"use client";
import Search from "./Search";
import RangeSlider from "./RangeSlider";
import PriceFilter from "./PriceFilter";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [searchState, setSearchState] = useState(false);
  const searchRef = useRef(null);
  const searchWasClicked = (e) => {
    e.preventDefault();
    setSearchState(true);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchState &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setSearchState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, [searchState, searchRef]);
  return (
    <>
      <Link href="/">
        <h1 className="py-5 text-xl font-semibold text-center border border-b border-gray-200">
          TripCamp
        </h1>
      </Link>
      <div className="grid w-full mt-5 mb-8 place-items-center">
        <div className="w-11/12 lg:w-3/5 py-2 px-4 text-lg rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition grid md:grid-cols-[3fr_5fr]">
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
              ref={searchRef}
              onClick={searchWasClicked}
              className="w-full">
              <Search active={searchState} />
            </div>
          </ul>
          <ul className="justify-between hidden grid-cols-3 mx-3 item-center md:grid">
            <li className="flex flex-col relative before:w-[1px] before:h-1/2 before:absolute before:bg-gray-200 before:-left-6 before:top-1/2 before:-translate-y-1/2">
              <h3 className="font-semibold">When</h3>
              <p className="text-xs text-gray-500">
                Anytime
              </p>
            </li>
            <PriceFilter />
            <li className="flex flex-col relative before:w-[1px] before:h-1/2 before:absolute before:bg-gray-200 before:-left-6 before:top-1/2 before:-translate-y-1/2">
              <h3 className="font-semibold">Who</h3>
              <p className="text-xs text-gray-500">
                2 guests
              </p>
              <div className="absolute right-0 p-2 translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full aspect-square top-1/2">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
