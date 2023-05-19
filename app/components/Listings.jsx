"use client";
import Card from "./Card";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Listings(props) {
  const mapRef = useRef(null);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const housesCollectionRef = collection(db, "Houses");
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          observerRef.current.disconnect();
          await fetchMoreData();
        }
      },
      { threshold: 0.5 }
    );
    observerRef.current = observer;
    if (observerRef.current && mapRef.current) {
      observerRef.current.observe(mapRef.current);
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [houses]);

  const fetchMoreData = async () => {
    setLoading(true);
    const lastHouse =
      houses.length > 0 ? houses[houses.length - 1] : null;
    if (lastHouse) {
      const firestoreQuery = query(
        housesCollectionRef,
        orderBy("CreatedAt"),
        startAfter(lastHouse.CreatedAt),
        limit(10)
      );
      const data = await getDocs(firestoreQuery);
      setHouses([
        ...houses,
        ...data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      ]);
    }
    setLoading(false);
  };
  useEffect(() => {
    const getHouses = async () => {
      const firestoreQuery = query(
        housesCollectionRef,
        limit(10)
      );
      const data = await getDocs(firestoreQuery);
      setHouses(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setLoading(false);
    };
    getHouses();
  }, []);

  return (
    <>
      <div className="grid w-full place-items-center">
        <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6">
          {houses.map((house) => (
            <Link
              key={house.id}
              href={`/listings/${house.id}`}>
              <Card listing={house} />
            </Link>
          ))}
        </div>
        {loading && <p>Loading...</p>}
        <div ref={mapRef}></div>
      </div>
      <div className="fixed z-20 -translate-x-1/2 cursor-pointer bottom-12 left-1/2">
        <Link href={`/map/`}>
          <div className="flex flex-row items-center p-2 px-3 font-semibold text-white bg-gray-900 rounded-full gap-x-2">
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
          </div>
        </Link>
      </div>
    </>
  );
}

//   // return (
//   //   <>
//   //     {mapState ? (
//   //       <div className="w-full ">
//   //         <MainMap houses={houses} />
//   //       </div>
//   //     ) : (
//   //       <>
//   //         <div className="grid w-full place-items-center">
//   //           <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6">
//   //             {houses.map((house) => (
//   //               <Link
//   //                 key={house.id}
//   //                 href={`/listings/${encodeURIComponent(
//   //                   house.id
//   //                 )}`}>
//   //                 <Card listing={house} />
//   //               </Link>
//   //             ))}
//   //           </div>
//   //         </div>
//   //       </>
//   //     )}

//     </>
//   );
// }
