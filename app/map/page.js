"use client"
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

const MainMap = () => {
    const [houses, setHouses] = useState([]);
    const housesCollectionRef = collection(db, "Houses");
    const [position, setPosition] = useState([]);
    useEffect(() => {
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
                style={{ height: "24rem" }}>
                <TileLayer
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {houses.map((house) => (
                    <Marker
                        key={house.name}
                        position={[
                            house.Position.Latit,
                            house.Position.Longi,
                        ]}
                        icon={L.divIcon({
                            className: "custom-icon",
                            html: `<div class="bg-white rounded-full font-semibold border-gray-500 border text-gray-600 w-12 h-8 grid place-items-center hover:bg-blue-400 hover:text-white transition-all">$${house.Price}</div>`,
                        })}>
                        <Popup>{house.Name} CARD HERE</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default MainMap;
