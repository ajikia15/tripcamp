"use client";
import "./style.css";
import React, { useState } from "react";

const ChangeCurrency = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden"; // add this line
    document.body.style.paddingRight = "19px";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // restore the overflow style
    document.body.style.paddingRight = "";
  };
  return (
    <>
      <div
        className="cursor-pointer"
        type="button"
        onClick={openModal}>
        $ USD
      </div>
      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 outline-none changeFadeIn focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}>
          <div
            className="absolute p-4 text-lg bg-white right-52 bottom-11 rounded-2xl"
            onClick={(e) => e.stopPropagation()}>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
        </div>
      ) : null}
    </>
  );
};

export default ChangeCurrency;
