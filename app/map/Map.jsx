import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "../globals.css";
import Link from "next/link";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import L from "leaflet";

const Map = () => {
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
                <p className="text-lg font-bold">
                  {house.Name}
                </p>
                <p className="text-md text-zinc-500">
                  {house.Address.split("~").join(" ")}
                </p>
                <div className="flex items-center gap-x-2">
                  <p className="font-bold">
                    {house.Price}₾
                  </p>
                  <p className="text-md">Night</p>
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
