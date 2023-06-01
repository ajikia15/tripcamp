"use client";
import IconCategs from "./IconCategs";
import { useRef, useState, useEffect } from "react";
import Filter from "./Filter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import list from "../list";
export default function Categories({
  filterTerm,
  setFilterTerm,
  generatedSearchQuery,
}) {
  const containerRef = useRef(null);
  const filterRef = useRef(null);
  const [filterState, setFilterState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  const handleScroll = () => {
    setScrollPosition(containerRef.current.scrollLeft);
  };

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
    setScrollPosition(containerRef.current.scrollLeft);
  };

  const handleScrollRight = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
    setScrollPosition(containerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    containerRef.current.dataset.touchStartX = touch.clientX;
    containerRef.current.dataset.touchStartScrollLeft =
      containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const touchStartX = parseInt(containerRef.current.dataset.touchStartX);
    const touchStartScrollLeft = parseInt(
      containerRef.current.dataset.touchStartScrollLeft
    );
    const touchOffsetX = touch.clientX - touchStartX;
    containerRef.current.scrollLeft = touchStartScrollLeft - touchOffsetX;
  };

  const handleTouchEnd = () => {
    containerRef.current.dataset.touchStartX = 0;
    containerRef.current.dataset.touchStartScrollLeft = 0;
  };

  const filterWasClicked = (e) => {
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
      <div className="flex flex-row items-center justify-center w-11/12 m-auto lg:justify-between lg:w-3/4">
        <div className="relative flex flex-row items-center w-11/12 md:mr-6">
          <div
            className="z-20 hidden transition-all cursor-pointer -translate-x-1/4 md:grid place-items-center"
            onClick={handleScrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 48 48"
              className="text-gray-500 rounded-full shadow-md hover:shadow-xl"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2.5"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m27 33l-9-9l9-9" />
              </g>
            </svg>
          </div>
          <div className="absolute w-8 h-full bg-gradient-to-l from-white to-35%  left-0 "></div>

          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
            className="relative grid w-full grid-flow-col-dense overflow-x-hidden gap-x-2 lg:gap-x-12"
          >
            <Link
              href="/"
              className={`${
                pathname === "/" ? " border-b-4 border-blue-500" : ""
              }`}
            >
              <IconCategs name={"All houses"} id={400} />
            </Link>
            {list
              .filter((item) => item.id > 10 && item.id < 30)
              .map((item) => (
                <Link
                  href={`/listings/search/guests=1&min=0&max=1000&searchTerm=&filterTerm=${item.id}&`}
                  key={item.id}
                  className={`${
                    pathname.startsWith(
                      `/listings/search/guests=1&min=0&max=1000&searchTerm=&filterTerm=${item.id}&`
                    )
                      ? "border-blue-600 border-b-4"
                      : ""
                  }`}
                >
                  <IconCategs name={item.name} id={item.id} />
                </Link>
              ))}
          </div>
          <div className="absolute w-16 h-full bg-gradient-to-l from-white from-75% right-0 "></div>
          <div
            className="absolute right-0 z-20 hidden transition-all cursor-pointer md:grid place-items-center"
            onClick={handleScrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 48 48"
              className="text-gray-500 rounded-full shadow-md hover:shadow-xl"
            >
              <g
                fill="white"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2.5"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m21 33l9-9l-9-9" />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="items-center justify-center hidden md:flex"
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
      {filterState && (
        <div className="fixed inset-0 z-[50] bg-black opacity-50" />
      )}
    </>
  );
}
