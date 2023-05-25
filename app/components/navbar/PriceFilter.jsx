"use client";
import { useEffect, useRef } from "react";
import "./style.css";

const PriceFilter = ({
  active,
  min,
  max,
  step,
  priceCap,
  minMax,
  setMinMax,
}) => {
  const progressRef = useRef(null);

  const handleMin = (e) => {
    const newMin = parseInt(e.target.value);
    const newMinMax = [newMin, minMax[1]];

    if (
      newMinMax[1] - newMinMax[0] >= priceCap &&
      newMinMax[1] <= max
    ) {
      setMinMax(newMinMax);
    } else {
      if (newMin < minMax[0]) {
        setMinMax(newMinMax);
      }
    }
  };

  const handleMax = (e) => {
    const newMax = parseInt(e.target.value);
    const newMinMax = [minMax[0], newMax];

    if (
      newMinMax[1] - newMinMax[0] >= priceCap &&
      newMinMax[1] <= max
    ) {
      setMinMax(newMinMax);
    } else {
      if (newMax > minMax[1]) {
        setMinMax(newMinMax);
      }
    }
  };

  const updateProgressBar = () => {
    if (progressRef.current) {
      const progressBar = progressRef.current;
      const progressBarWidth = progressBar.offsetWidth;
      const containerWidth =
        progressBar.parentNode.offsetWidth;
      const minThumbPosition =
        (minMax[0] / max) * containerWidth;
      const maxThumbPosition =
        (minMax[1] / max) * containerWidth;
      const progressWidth =
        maxThumbPosition - minThumbPosition;

      progressBar.style.left = minThumbPosition + "px";
      progressBar.style.right =
        containerWidth - maxThumbPosition + "px";
      progressBar.style.width = progressWidth + "px";
    }
  };

  useEffect(() => {
    updateProgressBar();
  }, [minMax, active]);

  return (
    <li className="flex md:flex-col relative before:w-[1px] before:h-1/2 before:absolute before:bg-gray-200 before:-left-6 before:top-1/2 before:-translate-y-1/2 cursor-pointer flex-row w-full justify-between items-center md:my-0 my-4 md:items-baseline">
      <h3 className="font-semibold">Price</h3>
      <p className="text-xs text-gray-500">
        {minMax[0] === min && minMax[1] === max
          ? "Any amount"
          : `${minMax[0]} - ${minMax[1]}`}
      </p>
      {active && (
        <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-xl absolute top-[calc(100%+2rem)] left-0 right-0 md:-left-24 md:-right-24 z-50">
          <div className="flex items-center justify-between my-6">
            <div className="flex flex-col justify-start pl-3 pr-8 border-2 border-gray-200 rounded-md">
              <span className="text-sm text-gray-600">
                Minimum price
              </span>
              <input
                onChange={handleMin}
                type="number"
                readOnly
                value={minMax[0]}
                className="w-10 border border-gray-400 border-none rounded-md no-arrows"
              />
            </div>
            <p> - </p>
            <div className="flex flex-col justify-start pl-3 pr-8 border-2 border-gray-200 rounded-md">
              <span className="text-sm text-gray-600">
                Maximum Price
              </span>
              <input
                onChange={handleMax}
                type="number"
                readOnly
                value={minMax[1]}
                className="w-10 border border-gray-400 border-none rounded-md no-arrows"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative h-1 bg-gray-300 rounded-md slider">
              <div
                className="absolute h-1 bg-blue-600 rounded progress"
                ref={progressRef}></div>
            </div>

            <div className="relative range-input ">
              <input
                onChange={handleMin}
                type="range"
                min={min}
                step={step}
                max={max}
                value={minMax[0]}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none range-min -top-1"
              />
              <input
                onChange={handleMax}
                type="range"
                min={min}
                step={step}
                max={max}
                value={minMax[1]}
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
