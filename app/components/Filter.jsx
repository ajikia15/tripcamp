"use client";
import "./style.css";
import { useState, useEffect } from "react";
import list from "../list";
import FilterParts from "./FilterParts";
const Filter = ({
  filterClose,
  active,
  filterTerm,
  setFilterTerm,
}) => {
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    // Update the checked state when filterTerm prop changes
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
  const [showAll, setShowAll] = useState(false);
  const displayCount = showAll ? list.length : 4;

  return (
    <>
      <div className="flex flex-row items-center gap-2 p-2 font-semibold border-2 border-gray-400 cursor-pointer rounded-xl">
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
        <p className="hidden md:block">Filters</p>
      </div>
      {active && (
        <div className="fixed z-[60] overflow-y-scroll text-lg bg-white  rounded-2xl left-1/2 -translate-x-1/2 w-screen h-screen md:w-[60vw] md:h-[70vh] top-1/2 -translate-y-1/2">
          <div className="flex flex-col px-6 gap-y-5">
            {/* header */}
            <div className="sticky top-0 ">
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
              {/* <div className="flex flex-col border-b-2 gap-y-5">
                <p>Checked IDs: {filterTerm.join(", ")}</p>
              </div> */}
              <div className="flex flex-col gap-y-5">
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
                      Features
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
              </div>
            </div>
            <div className="sticky bottom-0 left-0 flex flex-row items-center justify-between w-full py-2 bg-white border-t-2 border-gray-200">
              <button
                className="text-sm font-bold text-zinc-700 "
                onClick={handleClearSelection}>
                Clear All
              </button>
              <button
                type="button"
                className="p-3 text-white transition duration-500 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-l"
                onClick={filterClose}>
                <p className="text-sm"> Save Filter </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Filter;
