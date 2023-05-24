"use client";
import CategIcons from "./CategIcons";
import { useRef, useState, useEffect } from "react";
import Filter from "./Filter";
import list from "../list";
import Link from "next/link";
export default function Categories({
  filterTerm,
  setFilterTerm,
}) {
  const containerRef = useRef(null);
  const filterRef = useRef(null);
  const [filterState, setFilterState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

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
    containerRef.current.dataset.touchStartX =
      touch.clientX;
    containerRef.current.dataset.touchStartScrollLeft =
      containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const touchStartX = parseInt(
      containerRef.current.dataset.touchStartX
    );
    const touchStartScrollLeft = parseInt(
      containerRef.current.dataset.touchStartScrollLeft
    );
    const touchOffsetX = touch.clientX - touchStartX;
    containerRef.current.scrollLeft =
      touchStartScrollLeft - touchOffsetX;
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
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, [filterState]);

  return (
    <>
      <div className="flex flex-row items-center justify-between m-auto my-10 md:w-3/4">
        <div className="flex flex-row items-center w-5/6 mr-6">
          <div
            className="hidden transition-all border-2 border-black border-solid rounded-full opacity-50 cursor-pointer md:block hover:opacity-100"
            onClick={handleScrollLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
              />
            </svg>
          </div>
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
            className="flex flex-row mx-6 overflow-x-hidden gap-x-3 lg:gap-x-6">
            {list
              .filter(
                (item) => item.id > 10 && item.id < 30
              )
              .map((item) => (
                <Link
                  href={`/listings/search/filterTerm=${item.id}`}>
                  <CategIcons
                    name={item.name}
                    id={item.id}
                  />
                </Link>
              ))}
          </div>
          <div
            className="hidden transition-all border-2 border-black border-solid rounded-full opacity-50 cursor-pointer md:block hover:opacity-100"
            onClick={handleScrollRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <g transform="rotate(180 12 12)">
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="flex items-center justify-center w-1/6"
          ref={filterRef}
          onClick={filterWasClicked}>
          <Filter
            filterClose={filterClose}
            active={filterState}
            filterTerm={filterTerm}
            setFilterTerm={setFilterTerm}
          />
        </div>
      </div>
      {filterState && (
        <div className="fixed inset-0 z-[50] bg-black opacity-50" />
      )}
    </>
  );
}
