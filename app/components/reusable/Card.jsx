"use client";

import { useState } from "react";
import React, { useEffect } from "react";

export default function Card({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) =>
      curr === 0 ? slides.length - 1 : curr - 1
    );
  const next = () =>
    setCurr((curr) =>
      curr === slides.length - 1 ? 0 : curr + 1
    );

  return (
    <div className="relative overflow-hidden rounded-md">
      {/* <a href="listings/1"> */}
      <div
        className="flex object-contain transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 text-white opacity-0 hover:opacity-100 hover:transition hover:duration-500 hover:ease-in-out">
        <button
          onClick={prev}
          className="h-0 shadow opacity-80 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="h-0 shadow opacity-80 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24">
            <g transform="translate(24 0) scale(-1 1)">
              <path
                fill="currentColor"
                d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-4">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
                  transition-all w-1 h-1 aspect-square bg-white rounded-full
                  ${curr === i ? "w-2 h-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}
