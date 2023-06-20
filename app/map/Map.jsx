import "leaflet/dist/leaflet.css";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const Map = ({ filteredHouses }) => {
  const customCloseButton = L.divIcon({
    className: "custom-close-button",
    html: "x",
    iconSize: [20, 20],
  });

  return (
    <MapContainer
      center={[42.3, 43.6433]}
      zoom={7.5}
      style={{ height: "90vh" }}
      className="p-0"
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
                className="flex flex-col pt-1 text-ellipsis"
              >
                <p className="text-base p-0 m-0 font-semibold max-w-[84%] line-clamp-2 text-zinc-800">
                  {house.Name.split(" ").slice(0, 4).join(" ")}
                </p>
                <p className="w-[84%] text-xs text-zinc-500 text-ellipsis line-clamp-1 ">
                  {house.Address.split("~").slice(0, 3).join(",")}
                </p>
                <p className="pt-1 font-bold text-zinc-600">
                  {house.Price}₾/Night
                </p>
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
