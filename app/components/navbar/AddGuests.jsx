"use client";
import { useState, useEffect, useRef } from "react";

const AddGuests = ({
  active,
  guestsAmount,
  setGuestsAmount,
}) => {
  const minusGuests = () => {
    if (guestsAmount > 1)
      setGuestsAmount((prevAmount) => prevAmount - 1);
  };
  const addGuests = () => {
    setGuestsAmount((prevAmount) => prevAmount + 1);
  };
  const handleGuestsChange = (event) => {
    setGuestsAmount(parseInt(event.target.value, 10));
  };
  return (
    <li className="flex md:flex-col flex-row justify-between relative before:w-[1px] before:h-1/2 before:absolute before:bg-gray-200 before:-left-6 before:top-1/2 before:-translate-y-1/2 cursor-pointer my-4 md:my-0 items-center md:items-baseline">
      <h3 className="font-semibold">Who?</h3>
      <p className="text-xs text-gray-500">
        {guestsAmount == 1
          ? "Add Guests"
          : `${guestsAmount} Guests`}
      </p>
      {active && (
        <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-xl absolute top-[calc(100%+2rem)] md:-left-24 md:-right-24 right-0 left-0">
          <div className="flex items-center justify-between my-6 ">
            <div>
              <p className="font-bold text-zinc-800 test-md">
                Guests
              </p>
              <p className="text-sm text-zinc-400">
                Age 13+
              </p>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <div
                className="flex items-center justify-center h-10 border border-black rounded-full aspect-square"
                onClick={minusGuests}>
                -
              </div>
              <input
                value={guestsAmount}
                onChange={handleGuestsChange}
                // type="number"
                className="w-5 text-center border-gray-300 aspect-square"
              />

              <div
                className="flex items-center justify-center h-10 border border-black rounded-full aspect-square"
                onClick={addGuests}>
                +
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
export default AddGuests;
