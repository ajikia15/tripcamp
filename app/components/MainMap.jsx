import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
          ]}>
          <Popup>
            {house.Name} - ${house.Price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MainMap;
