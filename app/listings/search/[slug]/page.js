"use client";
import { db } from "../../../../firebase-config";
import Card from "../../../components/Card";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Link from "next/link";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import Pagination from "./Pagination";
import StaticFooter from "@/app/components/footer/StaticFooter";
const Page = (props) => {
  const [mapState, setMapState] = useState(false);
  const [longit, setLongit] = useState(0);
  const [latid, setLatid] = useState(0);

  const slug = decodeURIComponent(props.params.slug);
  const params = slug.split("&"); // splitting the query parameters

  let guests = 1;
  let minMax = [0, 1000];
  let searchTerm = "";
  let filterTerm = "";
  // loop through the parameters to find and assign the specified values
  params.forEach((param) => {
    const [key, value] = param.split("=");
    if (key === "guests") {
      guests = parseInt(value);
    } else if (key === "min") {
      minMax[0] = parseInt(value);
    } else if (key === "max") {
      minMax[1] = parseInt(value);
    } else if (key === "searchTerm") {
      const parts = value.split(", ").slice(0, 3);
      searchTerm = parts.join("~").toLowerCase();
    } else if (key === "filterTerm") {
      filterTerm = value || null;
    }
  });

  const [houses, setHouses] = useState([]);
  const housesCollectionRef = collection(db, "Houses");
  useEffect(() => {
    const getHouses = async () => {
      const querySnapshot = query(
        housesCollectionRef,
        orderBy("CreatedAt", "desc")
      );
      const data = await getDocs(querySnapshot);

      const fetchedHouses = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Client side filter
      const filteredHouses = fetchedHouses.filter(
        (house) =>
          house.Price >= minMax[0] &&
          house.Price <= minMax[1] &&
          house.Beds >= guests &&
          house.Address.toLowerCase().includes(searchTerm) &&
          (filterTerm === null ||
            filterTerm
              .split(",")
              .every((term) => house.Options.split(",").includes(term)))
      );
      const sortedHouses = filteredHouses.sort((a, b) => b.Prior - a.Prior);
      setHouses(sortedHouses);
      if (sortedHouses[0]) {
        setLatid(sortedHouses[0].Position.Latit);
        setLongit(sortedHouses[0].Position.Longi);
      }
    };
    getHouses();
  }, []);

  // these are used to force update of the map after resizing, because of the leaflet limitation
  const [mapKey, setMapKey] = useState(0);
  const enlargeMap = () => {
    setMapState(true);
    setMapKey((prevMapKey) => prevMapKey + 1);
  };
  const closeMap = () => {
    setMapState(false);
    setMapKey((prevMapKey) => prevMapKey - 1);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12; // Number of houses to display per page

  // Calculate the index of the first and last house on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = houses.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const remainingCards = houses.length - postsPerPage * (currentPage - 1);

  // Check if the remaining number of cards is less than 4
  const shouldFillRemainingSpace = remainingCards < 8;

  // Calculate the number of dummy divs needed to fill the remaining space
  const dummyDivsCount =
    shouldFillRemainingSpace && remainingCards > 0 ? 8 - remainingCards : 0;

  return (
    <>
      {/* {slug} */}

      <div
        className={`grid w-full place-items-center ${
          searchTerm !== null &&
          searchTerm !== "" &&
          !mapState &&
          "md:grid-cols-[3fr_2fr]"
        } `}
      >
        <div
          className={`grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[77vh] relative ${
            mapState && "hidden"
          } ${
            searchTerm == null ||
            (searchTerm == "" &&
              "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 2xl:w-11/12")
          }`}
        >
          {currentPosts.map((house) => (
            <Link key={house.id} href={`/listings/${house.id}`}>
              <Card listing={house} />
            </Link>
          ))}
          {dummyDivsCount > 0 &&
            Array.from({ length: dummyDivsCount }).map((_, index) => (
              <div
                key={index}
                className="hidden opacity-0 pointer-events-none lg:block"
              >
                <Card listing={currentPosts[0]} />
              </div>
            ))}
          <Pagination
            totalPosts={houses.length}
            postsPerPage={postsPerPage}
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
          />
        </div>
        {searchTerm !== null && searchTerm != "" && (
          <div className="relative hidden w-full h-full lg:block">
            {!mapState ? (
              <button
                type="button"
                onClick={enlargeMap}
                className="fixed z-30 grid p-1 bg-white border-2 border-gray-300 right-5 top-60 place-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m14 7l-5 5m0 0l5 5"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={closeMap}
                className="absolute z-30 grid p-1 bg-white border-2 border-gray-300 right-5 top-5 place-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5m0 0l-5-5"
                  />
                </svg>
              </button>
            )}
            <div className="sticky right-0 w-full lg:top-[9.5rem]">
              {longit !== 0 && latid !== 0 ? (
                <MapContainer
                  key={mapKey}
                  center={[latid, longit]}
                  zoom={13}
                  style={{ height: "83.5vh" }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/" target="_blank">Carto</a> | Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
                  />

                  {currentPosts.map((house) => (
                    <Marker
                      key={house.id}
                      position={[house.Position.Latit, house.Position.Longi]}
                      icon={L.divIcon({
                        className: "custom-icon",
                        html: `<div>₾${house.Price}</div>`,
                      })}
                    >
                      <Popup>
                        <Link href={`/listings/${house.id}`}>
                          <div className="flex flex-col">
                            <div className="relative w-full rounded-md aspect-square">
                              <Image
                                src={house.Photo[0]}
                                fill={true}
                                className="rounded-md"
                              />
                            </div>
                            <p className="text-lg font-bold">{house.Name}</p>
                            <p className="truncate text-md text-zinc-500">
                              {house.Address.split("~").join(" ")}
                            </p>
                            <div className="flex items-center gap-x-2">
                              <p className="font-bold">{house.Price}₾</p>
                              <p className="text-md">Night</p>
                            </div>
                          </div>
                        </Link>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div>
        )}
      </div>
      <StaticFooter />
    </>
  );
};
export default Page;
