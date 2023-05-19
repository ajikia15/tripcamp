"use client"
import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import list from "../../list"
import StaticFooter from "@/app/components/footer/StaticFooter";
import Link from "next/link";
export default function house(props) {
    const [house, setHouse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);
    useEffect(() => {
        // Function to fetch the document
        const fetchHouse = async () => {
            try {
                const docRef = doc(db, "Houses", props.params.id);
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists) {
                    // Document found
                    setHouse(docSnapshot.data());
                    const houseOptions = docSnapshot.data().Options.split(',').map(Number);
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
    return (
        <>
            {/* Render the house data */}
            {loading &&
                <div role="status" class=" animate-pulse w-11/12 xl:w-4/5 mx-auto">
                    <div className="flex flex-col justify-start w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></div>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="flex items-center justify-center w-full aspect-video bg-gray-300 rounded  dark:bg-gray-700 mb-2">
                            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                        </div>
                        <div class="w-full">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>

                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }
            {!loading && house && (
                <div className="flex flex-col w-11/12 mx-auto xl:w-4/5">
                    <div className='pl-1 mb-2'>
                        <p className="text-sm"> {house.Address.split("~").join(" ")} </p>
                        <h1 className="text-3xl font-bold"> {house.Name} </h1>
                    </div>
                    <div className="relative flex gap-2 overflow-hidden rounded-2xl">
                        <Link href={`/listings/${props.params.id}/gallery/`}>
                            <div className="absolute z-10 p-2 px-4 font-semibold bg-white rounded-lg cursor-pointer bottom-3 right-3">
                                All Photos
                            </div>
                        </Link>
                        <div className="relative w-1/2 overflow-hidden aspect-square bg-zinc-800">
                            <Image src={house.Photo[0]} fill={true} />
                        </div>
                        <div className="grid w-1/2 grid-cols-2 gap-y-2 gap-x-2">

                            {house.Photo.map((photo, index) => {
                                if (index <= 4 && index >= 1) {
                                    return (
                                        <div key={index} className="relative w-full h-full aspect-square bg-zinc-800">
                                            <Image src={photo ? photo : house.Photo[0]} fill={true} />
                                        </div>
                                    );
                                }
                                return null;
                            })}

                        </div>
                    </div>
                    <div className="relative flex flex-row">
                        <div className="w-4/5">
                            <div className="flex flex-row items-center mt-12 mb-4">
                                <div className="flex flex-col pb-4 border-b-2 gap-y-4">
                                    <div>
                                        <p className="font-bold"> Location details </p>
                                        <p>
                                            {house.Description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <h2 className="mb-4 text-xl"> Amenities </h2>
                                <ul className="grid grid-cols-1 border-b-2 md:grid-cols-2 gap-y-3 pb-4">
                                    {options.filter((option) => option >= 50 && option < 80).map((option) => (
                                        <li key={option}>{list[option]}</li>
                                    ))}
                                </ul>
                                <h2 className="text-xl4"> Activities </h2>
                                <ul className="grid grid-cols-1 border-b-2 md:grid-cols-2 gap-y-3 pb-4">
                                    {options.filter((option) => option >= 80 && option < 100).map((option) => (
                                        <li key={option}>{list[option]}</li>
                                    ))}
                                </ul>
                                <h2 className="text-xl"> Scenic Views </h2>
                                <ul className="grid grid-cols-1 border-b-2 gap-y-3 pb-4">
                                    {options.filter((option) => option >= 41 && option < 50).map((option) => (
                                        <li key={option}>{list[option]}</li>
                                    ))}
                                </ul>
                                <h2 className="text-xl"> Features </h2>
                                <ul className="grid grid-cols-1 border-b-2 gap-y-3 pb-4">
                                    {options.filter((option) => option >= 31 && option < 40).map((option) => (
                                        <li key={option}>{list[option]}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pb-4 mb-4 border-b-2">
                                <div className="flex items-center justify-center w-full text-white rounded-lg bg-zinc-800 h-96">
                                    <p>Calendar</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-4 p-4 sticky top-2 hidden md:w-[284px] md:h-[340px] md:ml-2 md:flex-col lg:flex-row lg:justify-around lg:w-[360px] lg:h-64 bg-white shadow-lg rounded-lg text-white md:flex lg:flex justify-center items-center">
                                <div className="flex items-center justify-center rounded-lg md:w-1/2 md:h-1/2 md:mb-2 lg:h-3/4 md:flex-row bg-zinc-800">QR</div>
                                <p className="text-sm w-36 text-zinc-800 md:text-center">Scan code to Download Tripcamp application to make reservation</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full ">
                        <div>
                            <h2 className="mb-4 text-xl"> Location </h2>
                            <div className="z-0 w-full h-full mb-2 overflow-hidden text-white rounded-lg bg-zinc-800">
                                <MapContainer style={{ height: "24rem" }} scrollWheelZoom={false} center={[house.Position.Latit, house.Position.Longi]} zoom={13}>
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Marker position={[house.Position.Latit, house.Position.Longi]}>
                                        <Popup>{`herro`}</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                        <div className="pb-4 mb-4 border-b-2">
                            <p className="text-lg">  ${house.Price}/Night </p>
                        </div>

                    </div>
                </div>
            )
            }
            <StaticFooter />
        </ >
    );
}
