"use client";
import { useState, useEffect, useRef } from "react";
import "./range.css";
const RangeSlider = ({ initialMin, initialMax, min, max, step, priceCap }) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
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
    if (maxValue - minValue >= priceCap && maxValue <= max) {
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
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue, max, step]);

  return (
    <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-xl w-96">
      <h1 className="mb-1 text-3xl font-bold text-gray-800"> Price Range</h1>
      <p className="text-lg font-semibold text-gray-700">
        Use slider or enter min and max price
      </p>

      <div className="flex items-center justify-between my-6 ">
        <div className="rounded-md">
          <span className="p-2 font-semibold"> Min</span>
          <input
            onChange={(e) => setMinValue(e.target.value)}
            type="number"
            value={minValue}
            className="w-24 border border-gray-400 rounded-md"
          />
        </div>
        <div className="ml-2 text-lg font-semibold"> - </div>
        <div className="">
          <span className="p-2 font-semibold"> Max</span>
          <input
            onChange={(e) => setMaxValue(e.target.value)}
            type="number"
            value={maxValue}
            className="w-24 border border-gray-400 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="relative h-1 bg-gray-300 rounded-md slider">
          <div
            className="absolute h-1 bg-green-300 rounded progress "
            ref={progressRef}
          ></div>
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
  );
};

export default RangeSlider;
