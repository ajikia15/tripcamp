"use client";
import ChangeCurrency from "./ChangeCurrency";
import LangChange from "./ChangeCurrency";
import Footer from "./Footer";
import { useState, useEffect, useRef } from "react";

export default function FooterFixed() {
  const [currencyState, setCurrencyState] = useState(false);
  const [langState, setLangState] = useState(false);

  const currencyRef = useRef(null);
  const langRef = useRef(null);

  const currencyWasClicked = (e) => {
    e.preventDefault();
    setCurrencyState(true);
  };
  const langWasClicked = (e) => {
    e.preventDefault();
    setLangState(true);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (currencyState &&
          currencyRef.current &&
          !currencyRef.current.contains(e.target)) ||
        (langState && langRef.current && !langRef.current.contains(e.target))
      ) {
        setCurrencyState(false);
        setLangState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [langState, currencyState]);
  return (
    <>
      {(langState || currencyState) && (
        <div className="fixed inset-0 z-40 bg-black opacity-50" />
      )}
      <div className="sticky bottom-0 z-10 hidden w-full bg-white border-t border-t-gray-300 border-t-solid md:block">
        <div className="flex flex-col items-center w-11/12 py-2 mx-auto gap-y-2 lg:justify-between text-zinc-800 lg:flex-row">
          <div className="flex items-center md:flex-row md:gap-y-2 lg:gap-x-4">
            <div className="flex flex-col items-center text-xs md:flex-row gap-x-4">
              <div>
                <p> © 2023 TripCamp, Inc.</p>
              </div>
              <div className="flex flex-row">
                <p> · Terms&nbsp;</p>
                <p> · Sitemap&nbsp;</p>
                <p> · Privacy Policy&nbsp;</p>
                <p> · Security ·</p>
                <p
                  className="text-white"
                  onClick={() => {
                    consoleFix();
                  }}
                >
                  {" "}
                  Balls
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row text-xs gap-x-8">
            <div className="flex flex-row items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M7.987 4.18a12.213 12.213 0 0 0-.669 2.32h5.364a12.21 12.21 0 0 0-.67-2.32c-.301-.733-.648-1.294-1.008-1.663C10.646 2.149 10.307 2 10 2c-.307 0-.646.149-1.004.517c-.36.37-.707.93-1.009 1.663Zm-.096-1.899c-.314.426-.59.941-.828 1.518c-.32.78-.58 1.694-.762 2.701H2.804a8.02 8.02 0 0 1 5.087-4.219Zm4.219 0c.313.426.59.941.827 1.518c.32.78.58 1.694.762 2.701h3.497a8.02 8.02 0 0 0-5.087-4.219ZM17.602 7.5H13.85c.098.795.15 1.634.15 2.5c0 .866-.052 1.705-.15 2.5h3.752A7.993 7.993 0 0 0 18 10a8.01 8.01 0 0 0-.398-2.5Zm-.406 6h-3.497c-.182 1.007-.441 1.922-.762 2.7a7.189 7.189 0 0 1-.827 1.519a8.02 8.02 0 0 0 5.086-4.219ZM10 18c.307 0 .646-.149 1.004-.517c.36-.37.707-.93 1.008-1.663a12.21 12.21 0 0 0 .67-2.32H7.318c.168.873.397 1.657.67 2.32c.301.733.648 1.294 1.008 1.663c.358.368.697.517 1.004.517Zm-2.11-.281A8.02 8.02 0 0 1 2.805 13.5h3.497c.182 1.007.441 1.922.762 2.7c.237.578.514 1.093.828 1.519ZM2.399 12.5H6.15A20.524 20.524 0 0 1 6 10c0-.866.052-1.705.15-2.5H2.398A7.993 7.993 0 0 0 2 10c0 .873.14 1.713.398 2.5ZM7 10c0-.875.056-1.715.158-2.5h5.684c.102.785.158 1.625.158 2.5s-.056 1.714-.158 2.5H7.158A19.438 19.438 0 0 1 7 10Z"
                />
              </svg>
              <p> English </p>
            </div>
            <div
              className="flex flex-row items-center gap-x-3"
              ref={currencyRef}
              onClick={currencyWasClicked}
            >
              <ChangeCurrency active={currencyState} />
            </div>
            <div className="flex flex-row items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082ZM17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M18.483 19.79v-.002l.018-.043L21.5 4.625v-.048c0-.377-.14-.706-.442-.903c-.265-.173-.57-.185-.784-.169a2.681 2.681 0 0 0-.586.12a3.23 3.23 0 0 0-.24.088l-.013.005l-16.72 6.559l-.005.002a1.353 1.353 0 0 0-.149.061a2.27 2.27 0 0 0-.341.19c-.215.148-.624.496-.555 1.048c.057.458.372.748.585.899a2.062 2.062 0 0 0 .403.22l.032.014l.01.003l.007.003l2.926.985c-.01.183.008.37.057.555l1.465 5.559a1.5 1.5 0 0 0 2.834.196l2.288-2.446l3.929 3.012l.056.024c.357.156.69.205.995.164c.305-.042.547-.17.729-.315a1.742 1.742 0 0 0 .49-.635l.008-.017l.003-.006l.001-.003ZM7.135 13.875a.3.3 0 0 1 .13-.33l9.921-6.3s.584-.355.563 0c0 0 .104.062-.209.353c-.296.277-7.071 6.818-7.757 7.48a.278.278 0 0 0-.077.136L8.6 19.434l-1.465-5.56Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                />
              </svg>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
