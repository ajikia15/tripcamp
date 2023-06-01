"use client";
import "./style.css";
import { useState } from "react";

const Footer = () => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.7 14.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 8.425q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275Z"
          />
        </svg>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 outline-none changeFadeIn focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}>
          <footer className="absolute bottom-0 w-full p-4 text-lg bg-white rounded-t-2xl footerFloatIn">
            <div className="relative w-full">
              <div
                className="absolute p-3 cursor-pointer top-3 right-3"
                onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                  />
                </svg>
              </div>
              <div className="grid w-4/5 grid-cols-1 mx-auto gap-y-10 md:grid-cols-1 lg:grid-cols-4 py-14">
                <div className="grid space-y-4 text-xs text-gray-800">
                  <h5 className="font-bold">Support</h5>
                  <ul className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4 [&>*]:cursor-pointer">
                    <li>Help Center</li>
                    <li>
                      Supporting people with disabilities
                    </li>
                    <li>Cancellation options</li>
                    <li>Our Covid-19 Response</li>
                    <li>Report a neighborhood concern</li>
                  </ul>
                </div>
                <ul className="space-y-4 text-xs text-gray-800 [&>*]:cursor-pointer">
                  <li>
                    <h5 className="font-bold">Community</h5>
                  </li>
                  <li>Disaster relief housing</li>
                  <li>Combating discrimination</li>
                  <li></li>
                </ul>
                <div className="space-y-4 text-xs text-gray-800">
                  <h5 className="font-bold">Hosting</h5>
                  <ul className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4 [&>*]:cursor-pointer">
                    <li>tripcamp your home</li>
                    <li>tripcover for hosts</li>
                    <li>Explore hosting resources</li>
                    <li>Visit our community forum</li>
                    <li>how to host responsibly</li>
                  </ul>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                  <h5 className="font-bold">TripCamp</h5>
                  <ul className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4 [&>*]:cursor-pointer">
                    <li>Newsroom</li>
                    <li>learn about features</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Gift cards</li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Footer;
