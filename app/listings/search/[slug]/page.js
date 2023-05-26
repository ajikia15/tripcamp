"use client";
import { db } from "../../../../firebase-config";
import { collection, getDocs, query, orderBy, limit, startAfter, where } from "firebase/firestore";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Card from "../../../components/Card";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";
import L from "leaflet";

const Page = (props) => {

    const slug = decodeURIComponent(props.params.slug);
    const params = slug.split('&'); // Splitting the query parameters
    const [center, setCenter] = useState([42.6556, 44.6433])

    let guests = 1; // Default value for guests
    let minMax = [0, 400]; // Default values for min and max
    let searchTerm = "";
    let filterTerm = "";
    // Loop through the parameters to find and assign the specified values
    params.forEach(param => {
        const [key, value] = param.split('=');
        if (key === 'guests') {
            guests = parseInt(value);
        } else if (key === 'min') {
            minMax[0] = parseInt(value);
        } else if (key === 'max') {
            minMax[1] = parseInt(value);
        } else if (key === 'searchTerm') {
            const parts = value.split(", ").slice(0, 3);
            searchTerm = parts.join("~").toLowerCase();
        }
        else if (key === 'filterTerm') {
            filterTerm = value || null;
        }

    });

    const [houses, setHouses] = useState([]);
    const housesCollectionRef = collection(db, "Houses");
    useEffect(() => {
        const getHouses = async () => {
            const querySnapshot = query(housesCollectionRef, orderBy("CreatedAt", 'desc'));
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
                    house.Beds >= guests && house.Address.toLowerCase().includes(searchTerm) &&
                    (filterTerm === null || filterTerm.split(",").every((term) => house.Options.split(",").includes(term)))
            )
            const sortedHouses = filteredHouses.sort((a, b) => b.Prior - a.Prior);
            setHouses(sortedHouses);
            houses.length > 0 && (setCenter(useState[houses[0].Latit, houses[0].Longit]))
        };
        getHouses();
    }, []);

    return (

        <>
            {/* {slug} */}

            <div className="grid w-full md:grid-cols-[3fr_2fr] place-items-center min-h-[70vh]">
                <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {houses.map((house) => (
                        <Link
                            key={house.id}
                            href={`/listings/${house.id}`}>
                            <Card listing={house} />
                        </Link>
                    ))}
                </div>
                <div className="relative hidden w-full h-full sm:block">
                    <div className="sticky top-0 bottom-0 left-0 right-0">
                        <MapContainer
                            center={center}
                            zoom={13}
                            style={{ height: "100vh" }}
                            scrollWheelZoom={false}
                        >
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
                                            <div className="flex flex-col">
                                                <div className="relative w-full rounded-md aspect-square">
                                                    <Image src={house.Photo[0]} fill={true} className="rounded-md" />
                                                </div>
                                                <p className="text-lg font-bold">{house.Name}</p>
                                                <p className="truncate text-md text-zinc-500">{house.Address.split("~").join(" ")}</p>
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
                    </div>
                </div>
            </div>

        </>
    );


}
export default Page;

