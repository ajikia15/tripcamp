"use client";
import "./style.css";
import React, { useState } from "react";

const ChangeCurrency = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px"; // Need to make mobile compatible
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
  };
  return (
    <>
      <div
        className="flex-row items-center hidden gap-2 p-2 font-semibold border-2 border-gray-400 cursor-pointer md:flex rounded-xl"
        onClick={openModal}>
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
      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 outline-none changeFadeIn focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}>
          <div
            className="p-4 text-lg bg-white rounded-2xl"
            onClick={(e) => e.stopPropagation()}>
            zangebi mevaseba
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ChangeCurrency;
