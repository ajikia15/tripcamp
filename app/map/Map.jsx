import "leaflet/dist/leaflet.css";
import Image from "next/image";

import "../globals.css";
import Link from "next/link";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const Map = ({ filteredHouses }) => {
  return (
    <MapContainer
      center={[42.3, 43.6433]}
      zoom={7.5}
      style={{ height: "80vh" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/" target="_blank">Carto</a> | Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
      />

      {filteredHouses.map((house) => (
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
              <div className="flex flex-col gap-y-2">
                <div className="relative w-full rounded-md aspect-square">
                  <Image
                    src={house.Photo[0]}
                    fill={true}
                    className="rounded-lg"
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
  );
};

export default Map;
