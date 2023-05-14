"use client";
import { useState, useRef, useEffect } from "react";

export default function Search() {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  const clickedInside = (e) => {
    e.preventDefault();
    setActive(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        active &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, [active, inputRef]);

  return (
    <div className="flex flex-col">
      {active ? (
        <input
          className="w-full outline-none"
          type="text"
          autoFocus
          ref={inputRef}
          placeholder="Where to?"
        />
      ) : (
        <li className="" onClick={clickedInside}>
          <h3 className="font-semibold">Where to?</h3>
          <p className="text-xs text-gray-500">
            Anywhere • Any Week • Add guests
          </p>
        </li>
      )}
    </div>
  );
}
