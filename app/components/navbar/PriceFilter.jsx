"use client";
import { useState, useEffect, useRef } from "react";
import "./style.css";
const PriceFilter = ({
  active,
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
}) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    if (
      maxValue - minValue >= priceCap &&
      maxValue <= max
    ) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (
      maxValue - minValue >= priceCap &&
      maxValue <= max
    ) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      const progressBar = progressRef.current;
      const progressBarWidth = progressBar.offsetWidth;
      const containerWidth =
        progressBar.parentNode.offsetWidth;
      const minThumbPosition =
        (minValue / max) * containerWidth;
      const maxThumbPosition =
        (maxValue / max) * containerWidth;
      const progressWidth =
        maxThumbPosition - minThumbPosition;

      progressBar.style.left = minThumbPosition + "px";
      progressBar.style.right =
        containerWidth - maxThumbPosition + "px";
      progressBar.style.width = progressWidth + "px";
    }
  }, [minValue, maxValue]);

  return (
    <li className="flex flex-col relative before:w-[1px] before:h-1/2 before:absolute before:bg-gray-200 before:-left-6 before:top-1/2 before:-translate-y-1/2 cursor-pointer">
      <h3 className="font-semibold">Price</h3>
      <p className="text-xs text-gray-500">
        {minValue === min && maxValue === max
          ? "Any amount"
          : `${minValue} - ${maxValue}`}
      </p>
      {active && (
        <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-xl absolute top-[calc(100%+2rem)] -left-24 -right-24">
          <div className="flex items-center justify-between my-6 ">
            <div className="rounded-md">
              <span className="p-2 font-semibold">Min</span>
              <input
                onChange={(e) =>
                  setMinValue(e.target.value)
                }
                type="number"
                value={minValue}
                className="w-24 border border-gray-400 rounded-md no-arrows"
              />
            </div>

            <div className="">
              <span className="p-2 font-semibold">Max</span>
              <input
                onChange={(e) =>
                  setMaxValue(e.target.value)
                }
                type="number"
                value={maxValue}
                className="w-24 border border-gray-400 rounded-md no-arrows"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative h-1 bg-gray-300 rounded-md slider">
              <div
                className="absolute h-1 bg-blue-500 rounded progress "
                ref={progressRef}></div>
            </div>

            <div className="relative range-input ">
              <input
                onChange={handleMin}
                type="range"
                min={min}
                step={step}
                max={max}
                value={minValue}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none range-min -top-1"
              />

              <input
                onChange={handleMax}
                type="range"
                min={min}
                step={step}
                max={max}
                value={maxValue}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none range-max -top-1"
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
export default PriceFilter;
