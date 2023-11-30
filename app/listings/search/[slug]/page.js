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
import { useGlobalContext } from "@/app/context/store";

const Page = (props) => {
  const [mapState, setMapState] = useState(false);
  const [longit, setLongit] = useState(0);
  const [latid, setLatid] = useState(0);
  const { houseId } = useGlobalContext();
  const [mapLoadState, setMapLoadState] = useState(false);

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
  const [allHouses, setAllHouses] = useState([]);
  const housesCollectionRef = collection(db, "Houses");

  useEffect(() => {
    const getHouses = async () => {
      const querySnapshot = query(
        housesCollectionRef,
        orderBy("Prior", "desc")
      );
      const data = await getDocs(querySnapshot);

      const fetchedHouses = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // client side filter
      const filteredHouses = fetchedHouses.filter((house) => {
        // convert filterTerm to an array
        let filterArray = filterTerm ? filterTerm.split(",") : [];

        if (houseId !== "") {
          filterArray = [houseId]
        } 

        console.log(filterArray, 'filterArray');
        // filter based on HouseTypeParameters
        if (filterArray.some((term) => parseInt(term) <= 30)) {
          const houseTypeFilters = filterArray.filter(
            (term) => parseInt(term) <= 30
          );
          const matchesHouseTypeFilters = houseTypeFilters.some((term) =>
            house.Options.split(",").includes(`${term}`)
          );
          if (!matchesHouseTypeFilters) {
            return false;
          }
        }

        // filter based on AmenityParameters
        if (filterArray.some((term) => parseInt(term) > 30)) {
          const amenityFilters = filterArray.filter(
            (term) => parseInt(term) > 30
          );
          const matchesAmenityFilters = amenityFilters.every((term) =>
            house.Options.split(",").includes(`${term}`)
          );
          if (!matchesAmenityFilters) {
            return false;
          }
        }

        // filter based on other criteria
        return (
          house.Status == "Active" &&
          house.Price >= minMax[0] &&
          house.Price <= minMax[1] &&
          house.Beds >= guests &&
          house.Address.toLowerCase().includes(searchTerm)
        );
      });

      const sortedHouses = filteredHouses.sort((a, b) => b.Prior - a.Prior);
      setHouses(sortedHouses);
      if (sortedHouses[0]) {
        setLatid(sortedHouses[0].Position.Latit);
        setLongit(sortedHouses[0].Position.Longi);
      }
    };

    getHouses();
  }, [houseId]);

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
  const postsPerPage = 12; // number of houses  per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = houses.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const remainingCards = houses.length - postsPerPage * (currentPage - 1);

  const shouldFillRemainingSpace = remainingCards < 8;

  //  number of dummy divs needed to fill the remaining space
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
        style={{ marginTop: '150px' }}
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
            <Link key={house.id} href={`/listings/${house.id}`} target="_blank">
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
            mapState={mapState}
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
            <div className="right-0 w-full lg:top-[9.5rem]">
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
                      <Popup closeButton={false}>
                        <div className="custom-popup">
                          <div className="relative w-[84%] rounded-md aspect-square">
                            <Image
                              src={house.Photo[0]}
                              fill={true}
                              className="rounded-2xl"
                            />
                          </div>
                          <Link
                            href={`/listings/${house.id}`}
                            className="flex flex-col pt-1 text-ellipsis fucktext"
                          >
                            <p className="text-base p-0 m-0 font-semibold max-w-[84%] line-clamp-2 text-zinc-800 fucktext">
                              {house.Name.split(" ").slice(0, 4).join(" ")}
                            </p>
                            <p className="w-[84%] text-xs text-zinc-500 text-ellipsis line-clamp-1 fucktext">
                              {house.Address.split("~").slice(0, 3).join(",")}
                            </p>
                            <p className="pt-1 font-bold text-zinc-600 fucktext">
                              {house.Price}₾/Night
                            </p>
                          </Link>
                        </div>
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
      <div
        className="fixed z-[19] -translate-x-1/2 cursor-pointer bottom-12 md:bottom-20 lg:bottom-12 left-1/2"
        onClick={() => {
          setMapLoadState(true);
        }}
      >
        <Link href={`/map/`}>
          <div className="flex flex-row items-center p-2 px-3 font-semibold text-white bg-gray-900 rounded-full gap-x-2">
            <p>Map</p>
            {!mapLoadState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
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
                  xmlns="http://www.w3.org/2000/svg"
                >
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
      <StaticFooter />
    </>
  );
};
export default Page;
