import React, {
  useState,
  useCallback,
  useRef,
} from "react";
import list from "../list";

import Image from "next/image";
const FilterParts = ({
  min,
  max,
  handleCheckboxChange,
  checked,
  setCheckedItems,
}) => {
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

  const filteredItems = list.filter(
    (item) => item.id > min && item.id < max
  );

  return (
    <>
      {max === 30 ? (
        <div className="grid grid-cols-4 gap-4">
          {filteredItems
            .slice(0, displayCount)
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center">
                <input
                  type="checkbox"
                  id={item.id}
                  className="hidden"
                  onChange={(e) =>
                    handleCheckboxChange(e, item.id)
                  }
                  checked={checked(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className={`flex select-none flex-col w-full aspect-[4/3] border-2 transition-all rounded-md items-center justify-center gap-y-2 ${
                    checked(item.id)
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}>
                  <Image
                    src={`/${item.id}.svg`}
                    width={30}
                    height={40}
                  />
                  <h4 className="text-base font-semibold">
                    {item.name}
                  </h4>
                </label>
              </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filteredItems
            .slice(0, displayCount)
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center w-1/2 gap-x-2">
                {/* <Image src={`/${item.id}.svg`} width={30} height={30} /> */}
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={(e) =>
                    handleCheckboxChange(e, item.id)
                  }
                  checked={checked(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className="select-none">
                  {item.name}
                </label>
              </div>
            ))}
        </div>
      )}

      {!showAll ? (
        <p
          className="mb-5 text-sm font-bold underline cursor-pointer text-zinc-700"
          onClick={showAllItems}>
          Show More
        </p>
      ) : (
        <p
          className="mb-5 text-sm font-bold underline cursor-pointer text-zinc-700"
          onClick={showLessItems}>
          Show Less
        </p>
      )}
    </>
  );
};

export default React.memo(FilterParts);
