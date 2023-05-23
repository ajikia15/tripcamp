"use client"

import "leaflet/dist/leaflet.css";
import { useState, useEffect, useRef } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import "../globals.css"
import Image from "next/image";

import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";
import L from "leaflet";

const MainMap = () => {

    const [isBrowser, setIsBrowser] = useState(false);
    const [houses, setHouses] = useState([]);
    const housesCollectionRef = collection(db, "Houses");
    const [position, setPosition] = useState([]);
    useEffect(() => {
        setIsBrowser(true);
        const getHouses = async () => {
            const data = await getDocs(housesCollectionRef);
            setHouses(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))

            );
        };
        getHouses();
    }, []);




    useEffect(() => {
        if (houses.length > 0 && houses[0].Position) {
            const { Latit, Longi } = houses[0].Position;
            setPosition([Latit, Longi]);
        }
    }, [houses]);
    if (!isBrowser) {
        return null;
    }
    return (
        <>
            <div className="fixed z-20 -translate-x-1/2 cursor-pointer bottom-12 left-1/2">
                <Link href={`/`}>
                    <div
                        className="flex flex-row items-center p-2 px-3 font-semibold text-white bg-gray-900 rounded-full gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 0H5v4h4V5zm4 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5zm6 0h-4v4h4V5zM3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4zm6 0H5v4h4v-4zm4 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4zm6 0h-4v4h4v-4z" /></svg>
                        <p>Show Listings</p>
                    </div>
                </Link>
            </div>
            <MapContainer
                center={[42.6556, 44.6433]}
                zoom={13}
                style={{ height: "60vh" }}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/" target="_blank">Carto</a> | Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
                />

                {houses.map((house) => (
                    <Marker
                        key={house.id}
                        position={[
                            house.Position.Latit,
                            house.Position.Longi,
                        ]}
                        icon={L.divIcon({
                            className: "custom-icon",
                            html: `<div>$${house.Price}</div>`,
                        })}>
                        <Popup>
                            <Link href={`/listings/${house.id}`}>
                                <div className="flex flex-col gap-y-2">
                                    <div className="relative w-full rounded-md aspect-square">
                                        <Image src={house.Photo[0]} fill={true} />
                                    </div>
                                    <p className="text-lg font-bold">{house.Name}</p>
                                    <p className="text-md text-zinc-500">{house.Address.split("~").join(" ")}</p>
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
        </>
    );
};

export default MainMap;
