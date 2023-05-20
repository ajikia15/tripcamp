"use client";
import "./style.css";
import { useState } from "react";

const ChangeCurrency = ({ active }) => {
  return (
    <>
      <div className="cursor-pointer">$ USD</div>
      {active && (
        <div className="absolute p-4 text-lg bg-white right-52 bottom-11 rounded-2xl">
          <ul className="flex flex-col">
            <li className="flex flex-row items-center justify-between p-4 border-b border-gray-300 cursor-pointer gap-x-20">
              <p className="font-semibold">
                $&nbsp;&nbsp;USD
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m6.5 17l6 6l13-13"
                />
              </svg>
            </li>
            <li className="flex flex-row items-center justify-between p-4 border-b border-gray-300 cursor-pointer gap-x-20">
              <p className="font-semibold">
                ₾&nbsp;&nbsp;GEL
              </p>
              <p></p>
            </li>
            <li className="flex flex-row items-center justify-between p-4 pb-3 border-gray-300 cursor-pointer gap-x-20">
              <p className="font-semibold">
                €&nbsp;&nbsp;EURO
              </p>
              <p></p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ChangeCurrency;
