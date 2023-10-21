"use client";
import "./style.css";
import { useState, useEffect, useRef } from "react";
import FilterParts from "./FilterParts";
import Link from "next/link";
import { useGlobalContext } from "../context/store";
import { usePathname } from "next/navigation";
import autoAnimate from "@formkit/auto-animate";

const Filter = ({
  filterClose,
  active,
  filterTerm,
  setFilterTerm,
  generatedSearchQuery,
}) => {
  const pathname = usePathname();

  const [checkedItems, setCheckedItems] = useState([]);
  const {
    houses,
    houseId,
    guestsAmount,
    minMax,
    searchTerm,
  } = useGlobalContext();
  const filteredHouses = houses.filter((house) => {
    // filter based on HouseTypeParameters
    if (filterTerm.some((term) => term <= 30)) {
      const houseTypeFilters = filterTerm.filter(
        (term) => term <= 30
      );
      const matchesHouseTypeFilters = houseTypeFilters.some(
        (term) =>
          house.Options.split(",").includes(`${term}`)
      );
      if (!matchesHouseTypeFilters) {
        return false;
      }
    }
    // filter based on AmenityParameters
    if (filterTerm.some((term) => term > 30)) {
      const amenityFilters = filterTerm.filter(
        (term) => term > 30
      );
      const matchesAmenityFilters = amenityFilters.every(
        (term) =>
          house.Options.split(",").includes(`${term}`)
      );
      if (!matchesAmenityFilters) {
        return false;
      }
    }
    if (house.Status !== "Active" )
    {return false;}
    // filter based on other criteria
    const addressFilter = searchTerm
      .split(", ")
      .slice(0, 3)
      .join("~")
      .toLowerCase();
    return (
      (houseId == null ||
        house.Options.includes(houseId)) &&
      house.Beds >= guestsAmount &&
      house.Price >= minMax[0] &&
      house.Price <= minMax[1] &&
      house.Address.toLowerCase().includes(addressFilter)
    );
  });

  useEffect(() => {
    // update the checked state when filterTerm prop changes
    setCheckedItems(filterTerm);
  }, [filterTerm]);

  const handleCheckboxChange = (event, id) => {
    const updatedCheckedItems = event.target.checked
      ? [...checkedItems, id]
      : checkedItems.filter((item) => item !== id);

    setCheckedItems(updatedCheckedItems);
    setFilterTerm(updatedCheckedItems);
  };

  const isCheckboxChecked = (id) => {
    return checkedItems.includes(id);
  };
  const handleClearSelection = () => {
    setCheckedItems([]);
    setFilterTerm([]);
  };
  const filterRef = useRef(null);
  useEffect(() => {
    filterRef.current && autoAnimate(filterRef.current);
  }, [filterRef]);

  return (
    <>
      <div className="flex-row items-center hidden gap-2 p-2 font-semibold border-2 border-gray-400 cursor-pointer md:flex rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h9m4 0h3m-9 8h9M4 16h3"
            />
            <circle cx="9" cy="16" r="2" />
            <circle cx="15" cy="8" r="2" />
          </g>
        </svg>
        <p>Filters</p>
      </div>
      <div className="flex items-center justify-center w-full p-4 font-bold border-gray-200 cursor-pointer md:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h9m4 0h3m-9 8h9M4 16h3"
            />
            <circle cx="9" cy="16" r="2" />
            <circle cx="15" cy="8" r="2" />
          </g>
        </svg>
      </div>
      {active && (
        <div className="fixed z-[60] overflow-y-scroll text-lg bg-white  rounded-2xl lg:inset-y-[10%] lg:inset-x-[15%] xl:inset-x-[30%] inset-0 min-h-[100vh] md:min-h-0">
          <div className="relative flex flex-col px-6 gap-y-5">
            {/* header */}
            <div className="sticky top-0">
              <div className="absolute top-0 left-0 right-0 flex items-center justify-center p-5 bg-white border-b-2">
                <p className="font-extrabold text-md">
                  Filters
                </p>
              </div>
              <div
                className="absolute top-0 right-0 p-5 cursor-pointer z-[61]"
                onClick={filterClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
                  />
                </svg>
              </div>
            </div>
            {/* mainpart */}
            <div className="flex-1 overflow-y-auto mt-14">
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col border-b-2 gap-y-5">
                  <div>
                    <p className="text-lg font-bold">
                      Houses
                    </p>
                    <p className="text-sm text-zinc-400">
                      Choose the houses
                    </p>
                  </div>
                  <FilterParts
                    min={10}
                    max={30}
                    checked={isCheckboxChecked}
                    handleCheckboxChange={
                      handleCheckboxChange
                    }
                  />
                </div>
                <div className="flex flex-col border-b-2 gap-y-5">
                  <div>
                    <p className="text-lg font-bold">
                      Amenities
                    </p>
                    <p className="text-sm text-zinc-400">
                      Choose the amenities
                    </p>
                  </div>
                  <FilterParts
                    min={50}
                    max={80}
                    checked={isCheckboxChecked}
                    handleCheckboxChange={
                      handleCheckboxChange
                    }
                  />
                </div>

                <div className="flex flex-col border-b-2 gap-y-5">
                  <div>
                    <p className="text-lg font-bold">
                      Features
                    </p>
                    <p className="text-sm text-zinc-400">
                      Choose the features
                    </p>
                  </div>
                  <FilterParts
                    min={30}
                    max={40}
                    checked={isCheckboxChecked}
                    handleCheckboxChange={
                      handleCheckboxChange
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-5">
                  <div>
                    <p className="text-lg font-bold">
                      Scenic Views
                    </p>
                    <p className="text-sm text-zinc-400">
                      Choose the views
                    </p>
                  </div>
                  <FilterParts
                    min={40}
                    max={50}
                    checked={isCheckboxChecked}
                    handleCheckboxChange={
                      handleCheckboxChange
                    }
                  />
                </div>
                <div className="flex flex-col border-b-2 gap-y-5">

                <div className="flex flex-col gap-y-5">
                  <div>
                    <p className="text-lg font-bold">
                     Activities
                    </p>
                    <p className="text-sm text-zinc-400">
                      Choose the activites you need
                    </p>
                  </div>
                  <FilterParts
                    min={80}
                    max={99}
                    checked={isCheckboxChecked}
                    handleCheckboxChange={
                      handleCheckboxChange
                    }
                  />
                </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 left-0 flex flex-row items-center justify-between w-full py-2 bg-white border-t-2 border-gray-200">
              <button
                className="text-sm font-bold text-zinc-700 "
                onClick={handleClearSelection}>
                Clear All
              </button>
              <Link
                onClick={filterClose}
                href={
                  pathname !== "/map"
                    ? `/listings/search/${generatedSearchQuery()}`
                    : `/map`
                }
                className="p-3 text-white transition duration-500 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-l">
                <p className="text-sm">
                  {" "}
                  Show {filteredHouses.length} Glampings
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Filter;
