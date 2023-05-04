"use client";
import React, { useState } from "react";

const Modal = ({ showModal, children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
export default Modal;
