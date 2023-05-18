"use client";
import { useState, useEffect, useRef } from "react";
import "./style.css";
const AddGuests = ({ active }) => {
  return (
    <li className="flex flex-col relative before:w-[1px] before:h-1/2 before:absolute before:bg-gray-200 before:-left-6 before:top-1/2 before:-translate-y-1/2">
      <h3 className="font-semibold">When</h3>
      <p className="text-xs text-gray-500">
        {1 == 1 ? "Anytime" : "datechosen"}
      </p>
      {active && (
        <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-xl absolute top-[calc(100%+2rem)] -left-24 -right-24">
          <div className="flex items-center justify-between my-6 ">
            aqane kalendari aba shen ici:)
          </div>
        </div>
      )}
    </li>
  );
};
export default AddGuests;
