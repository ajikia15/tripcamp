import React, { useState, useCallback, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import list from "../list";
import Image from "next/image";
const FilterParts = ({ min, max, handleCheckboxChange, checked }) => {
  const [displayCount, setDisplayCount] = useState(4);
  const [showAll, setShowAll] = useState(false);

  const showAllItems = useCallback(() => {
    setShowAll(true);
    setDisplayCount(list.length);
  }, [list.length]);

  const showLessItems = useCallback(() => {
    setShowAll(false);
    setDisplayCount(4);
  }, []);

  const filteredItems = list.filter((item) => item.id > min && item.id < max);
  const filterPartRef = useRef(null);

  return (
    <>
      <div className="flex flex-wrap">
        {filteredItems.slice(0, displayCount).map((item, index) => (
          <div key={index} className="flex items-center w-1/2 gap-x-2">
            {/* <Image src={`/${item.id}.svg`} width={30} height={30} />  */}
            <input
              type="checkbox"
              id={item.id}
              onChange={(e) => handleCheckboxChange(e, item.id)}
              checked={checked(item.id)}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        ))}
      </div>
      {!showAll ? (
        <p
          className="mb-5 text-sm font-bold underline cursor-pointer text-zinc-700"
          onClick={showAllItems}
        >
          Show More
        </p>
      ) : (
        <p
          className="mb-5 text-sm font-bold underline cursor-pointer text-zinc-700"
          onClick={showLessItems}
        >
          Show Less
        </p>
      )}
    </>
  );
};

export default React.memo(FilterParts);
