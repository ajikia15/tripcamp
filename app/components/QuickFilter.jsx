"use client";
import IconCategs from "./IconCategs";
import { useRef, useState, useEffect } from "react";
import Filter from "./Filter";
import list from "../list";
import { useGlobalContext } from "../context/store";

export default function QuickFilter({
  filterTerm,
  setFilterTerm,
  generatedSearchQuery,
}) {
  const containerRef = useRef(null);
  const filterRef = useRef(null);
  const [filterState, setFilterState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollState, setScrollState] = useState(false);
  const { houseId, setHouseId } = useGlobalContext();

  const handleHouseClick = (id) => {
    setHouseId(id);
    setFilterTerm([])
  };
  const handleScroll = () => {
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
    setHouseId("")
  };

  useEffect(() => {
    const handleClearSelection = () => {
      setFilterTerm([]);
      setHouseId(null);
    };
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

    // user has scrolled to the end
  };
  useEffect(() => {
    if (
      containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
      containerRef.current.scrollWidth
    )
      setScrollState(true);
    else setScrollState(false);
  }, [scrollPosition]);

  // reset the quickfilter if any of the filters is selected:
  const isFiltersEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };
  useEffect(() => {
    if (!isFiltersEmpty(filterTerm)) {
      setHouseId(null);
    }
  }, [filterTerm]);

  return (
    <>
      {/* {houseId} */}
      <div className="flex flex-row items-center justify-center w-full m-auto md:w-11/12 lg:justify-between lg:w-3/4">
        <div className="relative flex flex-row items-center w-full md:w-11/12 md:mr-6">
          <div
            className={`z-20 hidden w-8  transition-all border border-gray-400 rounded-full cursor-pointer -translate-x-1/4 md:grid place-items-center aspect-square ${
              scrollPosition === 0 ? `opacity-0 cursor-default` : "opacity-100"
            }`}
            onClick={handleScrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
              />
            </svg>
          </div>
          <div className="absolute w-8 h-full bg-gradient-to-l from-white to-35%  left-0 "></div>
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
            className="relative grid w-full grid-flow-col-dense overflow-x-hidden gap-x-3 md:gap-x-6 lg:gap-x-12"
          >
            <div
              onClick={(e) => {
                e.preventDefault(), handleHouseClick(null);
              }}
              className={null == houseId && !filterTerm.length && "border-b-2 border-blue-400"}
            >
              <IconCategs name={"All Houses"} id={400} />
            </div>
            {list
              .filter((item) => item.id <= 30)
              .map((item) => (
                <div
                  key={item.id}
                  className={
                    item.id == houseId ? "border-b-2 border-blue-400" : ""
                  }
                  onClick={(e) => {
                    e.preventDefault(), handleHouseClick(item.id);
                  }}
                >
                  <IconCategs name={item.name} id={item.id} />
                </div>
              ))}
          </div>
          {/* <div className="absolute w-16 h-full bg-gradient-to-l from-white from-75% right-0 "></div> */}
          <div
            className={`z-20 hidden  ${
              scrollState ? "opacity-0 cursor-default" : "opacity-100"
            } w-8 transition-all border border-gray-400 rounded-full cursor-pointer translate-x-1/4 md:grid place-items-center aspect-square`}
            onClick={handleScrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              />
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
