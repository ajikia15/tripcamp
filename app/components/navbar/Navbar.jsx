"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Search from "./Search";
import PriceFilter from "./PriceFilter";
import AddGuests from "./AddGuests";
import Categories from "../Categories";
import Image from "next/image";
import Filter from "../Filter";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(true);
  const filterRef = useRef(null);
  const [filterState, setFilterState] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      document.removeEventListener("click", handleClickOutside);
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

  const generatedSearchQuery = () => {
    let query = `guests=${encodeURIComponent(
      guestsAmount
    )}&min=${encodeURIComponent(minMax[0])}&max=${encodeURIComponent(
      minMax[1]
    )}&searchTerm=${encodeURIComponent(
      searchTerm
    )}&filterTerm=${encodeURIComponent(filterTerm.join(","))}&`;
    return query;
  };
  const [guestsAmount, setGuestsAmount] = useState(1);
  const [minMax, setMinMax] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState([]);

  const [mobnavState, setmobnavState] = useState(false);
  const mobnavClicked = () => {
    document.body.style.overflow = "hidden";
    setmobnavState(true);
  };
  const mobnavClosed = () => {
    setmobnavState(false);
    document.body.style.overflow = "visible";
  };
  const filterWasClicked = (e) => {
    e.stopPropagation();
    setFilterState(true);
  };
  const filterClose = (e) => {
    e.stopPropagation();
    setFilterState(false);
  };
  const handleClearSelection = () => {
    setFilterTerm([]);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterState &&
        filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        handleClearSelection();
        setFilterState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [filterState]);
  return (
    <>
      {mobnavState && (
        <div className="fixed inset-0 z-40 bg-gray-100">
          <div className="relative flex flex-col w-full h-full p-4">
            <div
              className="grid w-10 bg-white border rounded-full cursor-pointer place-items-center boder-gray-400 aspect-square"
              onClick={mobnavClosed}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z"
                />
              </svg>
            </div>
            <div
              ref={refMap.search}
              onClick={() => handleChildClick("search")}
              className="flex flex-col justify-center w-full border-b border-gray-400 cursor-pointer"
            >
              <Search
                active={activeStates.search}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>
            <div
              ref={refMap.priceFilter}
              onClick={() => handleChildClick("priceFilter")}
              className="flex flex-col justify-center w-full border-b border-gray-400 cursor-pointer"
            >
              <PriceFilter
                active={activeStates.priceFilter}
                min={0}
                max={1000}
                step={10}
                priceCap={10}
                minMax={minMax}
                setMinMax={setMinMax}
              />
            </div>
            <div
              ref={refMap.guests}
              onClick={() => handleChildClick("guests")}
              className="flex flex-col justify-center w-full border-b border-gray-400 cursor-pointer"
            >
              <AddGuests
                active={activeStates.guests}
                guestsAmount={guestsAmount}
                setGuestsAmount={setGuestsAmount}
              />
            </div>
            <div className="absolute bottom-0 flex flex-col my-2 gap-y-2 right-2 left-2">
              <Link
                href={`/listings/search/${generatedSearchQuery()}`}
                onClick={mobnavClosed}
                className="grid py-3 font-bold text-white bg-blue-600 rounded-md place-items-center"
              >
                <p>Search</p>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="sticky top-0 left-0 z-20 w-full bg-white shadow-sm">
        {/* pc */}
        {!isMobile ? (
          <div className="relative w-full h-[6rem] bg-white z-40">
            <div className="absolute z-40 grid w-full h-4/6 grid-cols-[2fr_1fr_1fr_2fr] grid-rows-1 pl-6 text-xl -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer left-1/2 md:w-2/3 lg:w-3/5 xl:w-5/12 top-1/2">
              <div
                ref={refMap.search}
                onClick={() => handleChildClick("search")}
                className="flex flex-col justify-center w-full col-span-2"
              >
                <Search
                  active={activeStates.search}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </div>
              {/* <div
                ref={refMap.calendar}
                onClick={() => handleChildClick("calendar")}
                className="flex flex-col justify-center w-full "
              >
                <Calendar active={activeStates.calendar} />
              </div> */}
              <div
                ref={refMap.priceFilter}
                onClick={() => handleChildClick("priceFilter")}
                className="flex flex-col justify-center w-full"
              >
                <PriceFilter
                  active={activeStates.priceFilter}
                  min={0}
                  max={1000}
                  step={10}
                  priceCap={10}
                  minMax={minMax}
                  setMinMax={setMinMax}
                />
              </div>
              <div
                ref={refMap.guests}
                onClick={() => handleChildClick("guests")}
                className="flex flex-col justify-center w-full"
              >
                <AddGuests
                  active={activeStates.guests}
                  guestsAmount={guestsAmount}
                  setGuestsAmount={setGuestsAmount}
                />
              </div>
              <Link href={`/listings/search/${generatedSearchQuery()}`}>
                <button className="absolute flex flex-col items-center justify-center text-white -translate-y-1/2 bg-blue-600 rounded-full shadow-sm right-4 h-4/5 aspect-square hover:shadow-md top-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <Link
              href="/"
              className="absolute flex items-center mx-4 -translate-y-1/2 top-1/2 gap-x-2"
            >
              <Image
                src="/Logo_Horizontal.svg"
                className="hidden xl:block 2xl:hidden"
                width={180}
                height={50}
                alt="Logo"
              />
              <Image
                src="/Logo_Horizontal.svg"
                className="hidden 2xl:block"
                width={200}
                height={50}
                alt="Logo"
              />
              <Image
                src="/Logo_Symbol.svg"
                className="hidden lg:block xl:hidden"
                width={50}
                height={50}
                alt="Logo"
              />
            </Link>
          </div>
        ) : (
          // mobile
          <>
            <div className="relative w-full h-28">
              <div
                className="absolute z-40 grid w-full h-16 grid-flow-col pl-6 text-xl -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-xl lg:h-20 left-1/2 top-1/2 md:w-5/6 lg:w-4/5 xl:w-3/5 "
                onClick={mobnavClicked}
              >
                <li className="flex flex-col justify-center w-full h-full cursor-pointer">
                  <h3 className="w-full font-semibold pl-9">Where To?</h3>
                  <p className="text-xs text-gray-500 pl-9">
                    {searchTerm ? searchTerm : "Anywhere"} • Any Week •
                    {guestsAmount != 1
                      ? `${guestsAmount} guests`
                      : "Any Amount"}
                  </p>

                  <div className="absolute left-0 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="text-gray-900"
                    >
                      <path
                        fill="currentColor"
                        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                      />
                    </svg>
                  </div>
                </li>
              </div>
            </div>
            <div className="absolute z-40 sm:top-[2.15rem] top-[1.65rem] right-1">
              <div
                className="flex items-center justify-center"
                ref={filterRef}
                onClick={filterWasClicked}
              >
                <Filter
                  filterClose={filterClose}
                  active={filterState}
                  filterTerm={filterTerm}
                  setFilterTerm={setFilterTerm}
                  generatedSearchQuery={generatedSearchQuery}
                />
              </div>
            </div>
          </>
        )}
        {(activeStates.search ||
          activeStates.priceFilter ||
          activeStates.guests ||
          activeStates.calendar) && (
          <div className="fixed z-30 bg-black opacity-50 md:inset-0" />
        )}
        <div className="pb-2">
          <Categories
            filterTerm={filterTerm}
            setFilterTerm={setFilterTerm}
            generatedSearchQuery={generatedSearchQuery}
          />
        </div>
      </div>
    </>
  );
}
