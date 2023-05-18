import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MainMap = ({ houses }) => {
  const position = [
    houses[0].Position.Latit,
    houses[0].Position.Longi,
  ];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
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
            html: `<div class="bg-white rounded-full font-semibold border-gray-500 border text-gray-600 w-12 h-8 grid place-items-center">$${house.Price}</div>`,
          })}>
          <Popup>{house.Name} CARD HERE</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MainMap;
