"use client";
import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import list from "../../list";
import StaticFooter from "../../components/footer/StaticFooter";
import Link from "next/link";
import L from "leaflet";
import "./gallery/gallery.css"
import useRatings from "@/app/hooks/useRatings";
import moment from "moment";
import DeviceDetect from "@/app/components/DeviceDetect";
import QRCode from "react-qr-code";

export default function House(props) {
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const { ratings, avg } = useRatings(props.params.id)

  useEffect(() => {
    // Function to fetch the document
    const fetchHouse = async () => {
      try {
        const docRef = doc(db, "Houses", props.params.id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists) {
          // Document found
          setHouse(docSnapshot.data());
          const houseOptions = docSnapshot
            .data()
            .Options.split(",")
            .map(Number);
          setOptions(houseOptions);
        } else {
          // Document does not exist
          console.log("Document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHouse();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (house && house.Photo) {
        return (prevIndex + house.Photo.length - 1) % house.Photo.length;
      }
      return prevIndex;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (house && house.Photo) {
        return (prevIndex + 1) % house.Photo.length;
      }
      return prevIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevImage, handleNextImage]);
  useEffect(() => {
    if (house && house.Photo) {
      setCurrentImageIndex(0);
      setSelectedImageIndex(null);
    }
  }, [house]);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDifference = touchEndX - touchStartX;

    if (touchDifference > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + house.Photo.length) % house.Photo.length
      );
    } else if (touchDifference < 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % house.Photo.length);
    }
  };
  return (
    <>
          {isModalOpen && (
        <div
          className="overlay"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="modal">
            <button
              className="hidden md:block arrow-btn left"
              onClick={() =>
                setCurrentImageIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + house.Photo.length) % house.Photo.length
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z"
                  />
                </g>
              </svg>
            </button>
            <img
              className="modal-img"
              src={house.Photo[currentImageIndex]}
              alt={`Photo ${currentImageIndex}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
            <button
              className="hidden md:block arrow-btn right"
              onClick={() =>
                setCurrentImageIndex(
                  (prevIndex) => (prevIndex + 1) % house.Photo.length
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g transform="rotate(180 12 12)">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.121 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122L7.938 13.06Z"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
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
                  strokeWidth="2.5"
                  d="m7 7l10 10M7 17L17 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* Render the house data */}
      {loading && (
        <div role="status" className="w-11/12 mx-auto animate-pulse xl:w-4/5">
          <div className="flex flex-col justify-start w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="flex items-center justify-center w-full mb-2 bg-gray-300 rounded aspect-video dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>

            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && house && (
        <div className="flex flex-col w-11/12 mx-auto mt-4 xl:w-4/5">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm"> {house.Address.split("~").join(" ")}</p>
            <h1 className="flex justify-between w-full text-3xl font-bold">
              {" "}
              {house.Name}
            </h1>
          </div>
          <div className="relative flex mt-6 overflow-hidden rounded-2xl">
            <Link href={`/listings/${props.params.id}/gallery/`}>
              <div className="absolute z-10 p-2 px-4 font-semibold bg-white rounded-lg cursor-pointer bottom-3 right-3">
                All Photos
              </div>
            </Link>
            <div 
             onClick={() => {
              setIsModalOpen(true);
              setCurrentImageIndex(0);
              setSelectedImageIndex(0);
            }}
            className="relative w-1/2 mr-2 overflow-hidden aspect-square bg-zinc-800 rounded-l-2xl cursor-pointer">
              <Image
                className="object-cover rounded-l-2xl"
                src={house.Photo[0]}
                fill={true}
              />
            </div>
            <div className="grid w-1/2 grid-cols-2 gap-y-2 gap-x-2">
              {house.Photo.map((photo, index) => {
                if (index <= 4 && index >= 1) {
                  if (photo != null) {
                    return (
                      <div
                        key={index}
                        className="relative w-full h-full aspect-square bg-zinc-800 cursor-pointer"
                        onClick={() => {
                          setIsModalOpen(true);
                          setCurrentImageIndex(index);
                          setSelectedImageIndex(index);
                        }}
                      >
                        <Image
                          className="object-cover"
                          alt={`Photo of ${house.Name} House`}
                          src={house.Photo[index]}
                          fill={true}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="relative w-full h-full aspect-square bg-zinc-800 cursor-pointer"
                        key={index}
                        onClick={() => {
                          setIsModalOpen(true);
                          setCurrentImageIndex(index);
                          setSelectedImageIndex(index);
                        }}
                      >
                        <Image
                          src="/placeholder.png"
                          className="object-cover"
                          fill={true}
                        />
                      </div>
                    );
                  }
                }
                return null;
              })}
            </div>
          </div>
          <p className="mt-6 text-lg font-bold">₾{house.Price}/Night </p>
          <div className="relative flex flex-row">
            <div className="w-4/5">
              <div className="flex flex-row items-center ">
                <div className="flex flex-col py-5 border-b-2">
                  <p>{house.Description}</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="mb-4 text-xl"> Amenities </h2>
                <ul className="grid grid-cols-1 pb-4 border-b-2 md:grid-cols-2 gap-y-3">
                  {options
                    .filter((option) => option >= 50 && option < 80)
                    .map((option) => (
                      <li
                        className="flex flex-row items-center gap-x-2"
                        key={option}
                      >
                        <Image
                          src={`/${list.find((item) => item.id === option)?.id
                            }.svg`}
                          width={20}
                          height={20}
                        />
                        <p>{list.find((item) => item.id === option)?.name}</p>
                      </li>
                    ))}
                </ul>
                <h2 className="text-xl4"> Activities </h2>
                <ul className="grid grid-cols-1 pb-4 border-b-2 md:grid-cols-2 gap-y-3">
                  {options
                    .filter((option) => option >= 80 && option < 100)
                    .map((option) => (
                      <li
                        className="flex flex-row items-center gap-x-2"
                        key={option}
                      >
                        <Image
                          src={`/${list.find((item) => item.id === option)?.id
                            }.svg`}
                          width={20}
                          height={20}
                        />
                        <p>{list.find((item) => item.id === option)?.name}</p>
                      </li>
                    ))}
                </ul>
                <h2 className="text-xl"> Scenic Views </h2>
                <ul className="grid grid-cols-1 pb-4 border-b-2 gap-y-3">
                  {options
                    .filter((option) => option >= 41 && option < 50)
                    .map((option) => (
                      <li
                        className="flex flex-row items-center gap-x-2"
                        key={option}
                      >
                        <Image
                          src={`/${list.find((item) => item.id === option)?.id
                            }.svg`}
                          width={20}
                          height={20}
                        />
                        <p>{list.find((item) => item.id === option)?.name}</p>
                      </li>
                    ))}
                </ul>
                <h2 className="text-xl"> Features </h2>
                <ul className="grid grid-cols-1 pb-4 border-b-2 gap-y-3">
                  {options
                    .filter((option) => option >= 31 && option < 40)
                    .map((option) => (
                      <li
                        className="flex flex-row items-center gap-x-2"
                        key={option}
                      >
                        <Image
                          src={`/${list.find((item) => item.id === option)?.id
                            }.svg`}
                          width={20}
                          height={20}
                        />
                        <p>{list.find((item) => item.id === option)?.name}</p>
                      </li>
                    ))}
                </ul>
              </div>
              {/* <div className="pb-4 mb-4 border-b-2">
                                <div className="flex items-center justify-center w-full text-white rounded-lg bg-zinc-800 h-96">
                                    <p>Calendar</p>
                                </div>
                            </div> */}
            </div>
            <div>
              <div className="mt-4 p-4 sticky top-56 hidden  md:ml-2 h-64 flex-col lg:flex-row lg:justify-around lg:w-[360px]  bg-white shadow-lg rounded-lg text-white md:flex  justify-center items-center">
                <div className="relative flex items-center justify-center rounded-lg md:w-1/2 md:h-1/2 md:mb-2 lg:h-3/4 md:flex-row ">
                  {/* <Image src="/qr-code.svg" fill={true} /> */}
                  <QRCode
                    size={210}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={`https://pompok.app.link/${props.params.id}`}
                    viewBox={`0 0 210 210`}
                  />
                </div>
                <p className="text-sm w-36 text-zinc-800 md:text-center">
                  Scan code to Download Tripcamp application to make reservation
                </p>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div>
              <h2 className="mb-4 text-xl"> Location </h2>
              <div className="z-0 w-full h-full mb-2 overflow-hidden text-white rounded-lg bg-zinc-800">
                <MapContainer
                  style={{ height: "24rem" }}
                  scrollWheelZoom={false}
                  zoomControl={false}
                  doubleClickZoom={false}
                  touchZoom={false}
                  center={[house.Position.Latit, house.Position.Longi]}
                  zoom={13}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/" target="_blank">Carto</a> | Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[house.Position.Latit, house.Position.Longi]}
                    icon={L.divIcon({
                      className: "house-icon",
                      html: `<div><Image src="/11.svg" /></div>`,
                    })}
                  />
                </MapContainer>
              </div>
            </div>
          </div>
          {
            ratings.length ? (
              <div className="w-full flex/column">
                <ul class="grid grid-cols-1 pb-4 border-b-2 gap-y-3"></ul>
                <div className="pb-7 pt-5">
                  <span className="star">&#9733; </span> <span className="pl-2 pr-2">{avg}</span> <span>{ratings.length} reviews</span>
                </div>
                <div className="grid gap-5 grid-cols-1">
                  {
                    ratings.map(item => (
                      <div key={item.id}>
                        <h5>{item.FromName}</h5>
                        <span className="block text-sm text-gray-500 pt-1 pb-1">{moment(item.DateRev.seconds * 1000).format('MMMM D, YYYY')}</span>
                        {
                          [...Array(item.Points)].map(star => (
                            <span className="mr-1" style={{ color: '#ffc90f' }} key="star">&#9733;</span>
                          ))
                        }
                        <p className="pt-1">{item.Message}</p>
                        <ul class="grid grid-cols-1 pb-4 border-b-2 gap-y-3"></ul>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : null
          }
        </div>
      )}
      {
        house?.Price ? <DeviceDetect price={house?.Price} /> : null
      }
      <StaticFooter />
    </>
  );
}
