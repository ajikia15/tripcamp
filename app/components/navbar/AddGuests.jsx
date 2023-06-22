"use client";

const AddGuests = ({ active, guestsAmount, setGuestsAmount, pathname }) => {
  const minusGuests = () => {
    if (guestsAmount > 1) setGuestsAmount((prevAmount) => prevAmount - 1);
  };
  const addGuests = () => {
    setGuestsAmount((prevAmount) => prevAmount + 1);
  };
  const handleGuestsChange = (event) => {
    event.preventDefault();
    setGuestsAmount(parseInt(event.target.value, 10));
  };
  const clearGuests = () => {
    setGuestsAmount(1);
  };
  return (
    <li className="flex md:flex-col flex-row justify-between relative before:w-[1px] before:h-1/2 before:absolute before:bg-gray-200 before:-left-3 before:top-1/2 before:-translate-y-1/2 cursor-pointer my-4 md:my-0 items-center md:items-baseline">
      {pathname !== "/" ? (
        <ul>
          <p className="text-lg font-semibold">
            {guestsAmount > 1 ? `${guestsAmount} Guests` : "Who"}
          </p>
        </ul>
      ) : (
        <ul>
          <p className="text-xl font-semibold">Who</p>
          <p className="text-xs text-gray-500 ">
            {guestsAmount < 2 ? "Add guests" : `At least ${guestsAmount}`}
          </p>
        </ul>
      )}
      {guestsAmount > 1 && active && (
        <>
          <button
            type="button"
            className="absolute text-gray-400 -translate-y-1/2 top-1/2 right-2 md:right-5 lg:right-6 xl:right-8"
            onClick={clearGuests}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
              />
            </svg>
          </button>
        </>
      )}
      {active && (
        <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-2xl absolute top-[calc(100%+1rem)] md:-left-24 md:-right-24 right-0 left-0">
          <div className="flex items-center justify-between my-6 ">
            <div>
              <p className="font-bold text-zinc-800 test-md">Guests</p>
              <p className="text-sm text-zinc-400">Age 13+</p>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <div
                className="flex items-center justify-center h-10 border border-black rounded-full aspect-square"
                onClick={minusGuests}
              >
                -
              </div>
              <input
                value={guestsAmount}
                onChange={handleGuestsChange}
                // type="number"
                className="w-5 text-center border-gray-300 aspect-square"
              />

              <div
                className="flex items-center justify-center h-10 border border-black rounded-full aspect-square"
                onClick={addGuests}
              >
                +
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
export default AddGuests;
