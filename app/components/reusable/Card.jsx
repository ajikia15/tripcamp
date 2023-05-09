"use client";

import React, { useEffect, useState } from "react";

export default function Card({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setCurr((curr) =>
      curr === 0 ? slides.length - 1 : curr - 1
    );
  };
  const next = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setCurr((curr) =>
      curr === slides.length - 1 ? 0 : curr + 1
    );
  };
  const setSlider = (event, i) => {
    event.preventDefault();

    event.stopPropagation();
    setCurr((curr) => (curr = i));
  };
  return (
    <a
      href="listings/1"
      className="relative flex flex-col gap-2 overflow-x-hidden">
      <div>
        <div
          className="flex object-contain transition-transform duration-1000 ease-out aspect-square "
          style={{
            transform: `translateX(-${curr * 100}%)`,
          }}>
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4 text-white opacity-0 hover:opacity-100 hover:transition hover:duration-500 hover:ease-in-out ">
          <button
            onClick={(event) => prev(event)}
            className="h-0 transition-all shadow opacity-80 hover:opacity-100">
            <div className="p-1 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-gray-600">
                <path
                  fill="currentColor"
                  d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
                />
              </svg>
            </div>
          </button>
          <button
            onClick={(event) => next(event)}
            className="h-0 transition-all shadow opacity-80 hover:opacity-100">
            <div className="p-1 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="absolute left-0 right-0 bottom-4">
          <div className="flex items-center justify-center gap-1">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={(event) => setSlider(event, i)}
                className={`
                  transition-all aspect-square bg-white rounded-full opacity-100
                  ${
                    curr === i
                      ? "w-2 h-2 "
                      : "w-1.5 h-1.5 opacity-[0.8] "
                  }
              `}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Title</h2>
        <h6 className="">Location</h6>
        <h1>Price</h1>
      </div>
    </a>
  );
}
