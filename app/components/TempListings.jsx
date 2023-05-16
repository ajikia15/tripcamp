"use client";
import Card from "./TempCard";
import Page from "../listings/[id]/page";
import list from "../list";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function TempListings() {
  const [mapState, setMapState] = useState(false);
  const mapRef = useRef(null);
  return (
    <>
      {mapState ? (
        <div className="w-full h-full">AQANE MAPI</div>
      ) : (
        <div className="grid w-full grid-cols-1 mb-6 place-items-center">
          <ul className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-11/12 2xl:w-4/5 ">
            {list.map((listing) => (
              <li key={listing.id}>
                <Link
                  href={`/listings/${encodeURIComponent(
                    listing.id
                  )}`}>
                  <Card listing={listing} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="fixed z-20 -translate-x-1/2 cursor-pointer bottom-12 left-1/2">
        <div
          onClick={() => {
            setMapState(!mapState);
          }}
          className="flex flex-row items-center p-2 px-3 font-semibold text-white bg-gray-900 rounded-full gap-x-2">
          {mapState ? (
            <>
              <p>Show Listings</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 11q-.825 0-1.413-.588T3 9V5q0-.825.588-1.413T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.588 1.413T9 11H5Zm0 10q-.825 0-1.413-.588T3 19v-4q0-.825.588-1.413T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.588 1.413T9 21H5Zm10-10q-.825 0-1.413-.588T13 9V5q0-.825.588-1.413T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.588 1.413T19 11h-4Zm0 10q-.825 0-1.413-.588T13 19v-4q0-.825.588-1.413T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.588 1.413T19 21h-4ZM5 9h4V5H5v4Zm10 0h4V5h-4v4Zm0 10h4v-4h-4v4ZM5 19h4v-4H5v4ZM15 9Zm0 6Zm-6 0Zm0-6Z"
                />
              </svg>
            </>
          ) : (
            <>
              <p>Map</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <g fill="currentColor">
                  <path d="M17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2ZM8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.683l-8.043 5.08C5.087 22 6.283 22 8 22Zm2.758-6.102L2.51 11.362C2 12.263 2 13.64 2 16c0 2.666 0 4.075.736 4.964l8.022-5.066Z" />
                  <path d="M22 16c0-2.828 0-4.243-.879-5.121c-.49-.49-1.146-.707-2.121-.803V13a2 2 0 1 1-4 0v-3H8c-2.045 0-3.35 0-4.25.332l17.937 9.865C22 19.3 22 18.006 22 16Z" />
                </g>
              </svg>
            </>
          )}
        </div>
      </div>
    </>
  );
}
