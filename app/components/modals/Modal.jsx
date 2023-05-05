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
        className="cursor-pointer"
        type="button"
        onClick={openModal}>
        <button className="p-4 border border-gray-400">
          Click Me
        </button>
      </div>
      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 outline-none changeFadeIn focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}>
          <div
            className="absolute p-4 text-lg bg-white rounded-2xl"
            onClick={(e) => e.stopPropagation()}></div>
        </div>
      ) : null}
    </>
  );
};

export default ChangeCurrency;
