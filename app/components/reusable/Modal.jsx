"use client";
import React, { useState } from "react";

const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
export default Modal;
