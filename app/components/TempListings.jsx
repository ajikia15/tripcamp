"use server";
import Card from "./Card";
import Page from "../listings/[id]/page";
import list from "../list";
import Link from "next/link";
import Image from "next/image";

// const slides = [
//   "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//   "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
//   "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
// ];

export default async function TempListings() {
  return (
    <div className="grid w-full mb-6 place-items-center">
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
  );
}
