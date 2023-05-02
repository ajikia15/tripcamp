export default function Navbar() {
  return (
    <div>
      <h1 className="pl-6 font-semibold text-center">
        TripCamp
      </h1>
      <div className="w-full grid place-items-center">
        <div className="w-11/12 lg:w-3/5 py-2 rounded-full shadow-sm cursor-pointer border-4rem hover:shadow-md transition bg-gray-200">
          <ul className="flex flex-row justify-between item-center">
            <li className="px-6 flex flex-1 text-sm font-semibold flex-col">
              <h2>When</h2>
              <p>Anytime</p>
            </li>
            <li className="px-6 flex flex-1 text-sm font-semibold flex-col">
              price
              <p>any amount</p>
            </li>
            <li className="px-6 flex flex-1 text-sm font-semibold flex-col">
              <p>who</p>
              <p>2 guests</p>
            </li>
            {/* <div className="flex p-2 text-white bg-blue-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
              />
            </svg>
          </div> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
