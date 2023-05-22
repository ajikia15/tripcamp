"use client";
import Card from "../../../components/Card";
import { db } from "../../../../firebase-config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  where,
} from "firebase/firestore";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SkeletonLoad from "../../../components/SkeletonLoad";

const Page = (props) => {
  const mapRef = useRef(null);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const housesCollectionRef = collection(db, "Houses");
  const observerRef = useRef(null);

  const slug = decodeURIComponent(props.params.slug);
  const params = slug.split("&"); // Splitting the query parameters

  let guests = 1; // Default value for guests
  let minMax = [0, 400]; // Default values for min and max

  // Loop through the parameters to find and assign the specified values
  params.forEach((param) => {
    const [key, value] = param.split("=");
    if (key === "guests") {
      guests = parseInt(value);
    } else if (key === "min") {
      minMax[0] = parseInt(value);
    } else if (key === "max") {
      minMax[1] = parseInt(value);
    }
  });
  console.log(guests); // Outputs the specified number of guests
  console.log(minMax);
  const fetchMoreData = async () => {
    setLoading(true);
    const lastHouse =
      houses.length > 0 ? houses[houses.length - 1] : null;
    if (lastHouse) {
      const bedsQuery = query(
        housesCollectionRef,
        where("Beds", ">", guests),
        orderBy("Beds"),
        startAfter(lastHouse.Beds),
        limit(6)
      );
      const priceQuery = query(
        housesCollectionRef,
        where("Price", ">=", minMax[0]),
        where("Price", "<=", minMax[1]),
        orderBy("Beds"),
        startAfter(lastHouse.Beds),
        limit(6)
      );

      const [bedsData, priceData] = await Promise.all([
        getDocs(bedsQuery),
        getDocs(priceQuery),
      ]);

      const mergedData = mergeQueryResults(
        bedsData,
        priceData
      );

      if (mergedData.length === 0) {
        // no more houses, stop fetching
        setLoading(false);
        return;
      }

      setHouses([...houses, ...mergedData]);
    }
    setLoading(false);
  };

  const mergeQueryResults = (query1, query2) => {
    const mergedData = [];

    const query1Data = query1.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const query2Data = query2.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    let i = 0;
    let j = 0;

    while (i < query1Data.length && j < query2Data.length) {
      if (query1Data[i].Beds < query2Data[j].Beds) {
        mergedData.push(query1Data[i]);
        i++;
      } else {
        mergedData.push(query2Data[j]);
        j++;
      }
    }

    while (i < query1Data.length) {
      mergedData.push(query1Data[i]);
      i++;
    }

    while (j < query2Data.length) {
      mergedData.push(query2Data[j]);
      j++;
    }

    return mergedData;
  };

  useEffect(() => {
    const getHouses = async () => {
      const bedsQuery = query(
        housesCollectionRef,
        where("Beds", ">", guests),
        limit(6)
      );
      const priceQuery = query(
        housesCollectionRef,
        where("Price", ">=", minMax[0]),
        where("Price", "<=", minMax[1]),
        limit(6)
      );

      const [bedsData, priceData] = await Promise.all([
        getDocs(bedsQuery),
        getDocs(priceQuery),
      ]);

      const mergedData = mergeQueryResults(
        bedsData,
        priceData
      );
      setHouses(mergedData);
      setLoading(false);
    };

    getHouses();
  }, []);
  const [loadAnimation, setLoadAnimation] = useState(false);

  return (
    <>
      balls {slug}
      <div className="grid w-full place-items-center min-h-[70vh]">
        <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6">
          {houses.map((house) => (
            <Link
              key={house.id}
              href={`/listings/${house.id}`}>
              <Card listing={house} />
            </Link>
          ))}
          {loading && (
            <>
              <SkeletonLoad />
              <SkeletonLoad />
              <SkeletonLoad />
              <SkeletonLoad />
            </>
          )}
          <div ref={mapRef}></div>
        </div>
      </div>
      <div
        className="fixed z-20 -translate-x-1/2 cursor-pointer bottom-12 left-1/2"
        onClick={() => {
          setLoadAnimation(true);
        }}>
        <Link href={`/map/`}>
          <div className="flex flex-row items-center p-2 px-3 font-semibold text-white bg-gray-900 rounded-full gap-x-2">
            <p>Map</p>
            {!loadAnimation ? (
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
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="text-gray-900 animate-spin dark:text-gray-600 fill-white"
                  viewBox="0 0 100 101"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading... </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};
export default Page;

// guests&searchterm&startDate&endDate&pricestart&priceEnd&
