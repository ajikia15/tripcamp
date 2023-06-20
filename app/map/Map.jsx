// // import "leaflet/dist/leaflet.css";
// // import Image from "next/image";

// // import "../globals.css";
// // import Link from "next/link";

// // import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// // import L from "leaflet";

// // const Map = ({ filteredHouses }) => {
// //   return (
// //     <MapContainer
// //       center={[42.3, 43.6433]}
// //       zoom={7.5}
// //       style={{ height: "90vh" }}
// //     >
// //       <TileLayer
// //         url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
// //         attribution='&copy; <a href="https://carto.com/" target="_blank">Carto</a> | Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
// //       />

// //       {filteredHouses.map((house) => (
// //         <Marker
// //           key={house.id}
// //           position={[house.Position.Latit, house.Position.Longi]}
// //           icon={L.divIcon({
// //             className: "custom-icon",
// //             html: `<div>₾${house.Price}</div>`,
// //           })}
// //         >
// //           <Popup>
// //             <Link href={`/listings/${house.id}`}>
// //               <div className="flex flex-col gap-y-2">
// //                 <div className="relative w-full rounded-md aspect-square">
// //                   <Image
// //                     src={house.Photo[0]}
// //                     fill={true}
// //                     className="rounded-lg"
// //                   />
// //                 </div>
// //                 <p className="text-lg font-bold">{house.Name}</p>
// //                 <p className="truncate text-md text-zinc-500">
// //                   {house.Address.split("~").join(" ")}
// //                 </p>
// //                 <div className="flex items-center gap-x-2">
// //                   <p className="font-bold">{house.Price}₾</p>
// //                   <p className="text-md">Night</p>
// //                 </div>
// //               </div>
// //             </Link>
// //           </Popup>
// //         </Marker>
// //       ))}
// //     </MapContainer>
// //   );
// // };

// // export default Map;

// import "leaflet/dist/leaflet.css";
// import Image from "next/image";
// import "../globals.css";
// import Link from "next/link";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import L from "leaflet";

// const Map = ({ filteredHouses }) => {
//   const customCloseButton = L.divIcon({
//     className: "custom-close-button",
//     html: "Close",
//     iconSize: [50, 50],
//   });

//   return (
//     <MapContainer
//       center={[42.3, 43.6433]}
//       zoom={7.5}
//       style={{ height: "90vh" }}
//     >
//       <TileLayer
//         url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
//         attribution='&copy; <a href="https://carto.com/" target="_blank">Carto</a> | Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
//       />

//       {filteredHouses.map((house) => (
//         <Marker
//           key={house.id}
//           position={[house.Position.Latit, house.Position.Longi]}
//           icon={L.divIcon({
//             className: "custom-icon",
//             html: `<div>₾${house.Price}</div>`,
//           })}
//         >
//           <Popup closeButton={false}>
//             <div className="custom-popup">
//               <Link href={`/listings/${house.id}`}>
//                 <div className="flex flex-col gap-y-2">
//                   <div className="relative w-full rounded-md aspect-square">
//                     <Image
//                       src={house.Photo[0]}
//                       fill={true}
//                       className="rounded-lg"
//                     />
//                   </div>
//                   <p className="text-lg font-bold">{house.Name}</p>
//                   <p className="truncate text-md text-zinc-500">
//                     {house.Address.split("~").join(" ")}
//                   </p>
//                   <div className="flex items-center gap-x-2">
//                     <p className="font-bold">{house.Price}₾</p>
//                     <p className="text-md">Night</p>
//                   </div>
//                 </div>
//               </Link>
//               <button
//                 className="custom-close-button"
//                 onClick={() => {
//                   // handle close button click
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;

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
              <div className="relative w-full rounded-md aspect-square">
                <Image
                  src={house.Photo[0]}
                  fill={true}
                  className="rounded-lg"
                />
                <button
                  className="absolute top-0 right-0 w-6 h-6 p-1 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={() => {
                    // handle close button click
                  }}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 6.066 4.652a1 1 0 00-1.414 1.414L8.586 10l-3.934 3.934a1 1 0 101.414 1.414L10 11.414l3.934 3.934a1 1 0 001.414-1.414L11.414 10l3.934-3.934a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <Link href={`/listings/${house.id}`}>
                <div className="flex flex-col gap-y-2">
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
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
