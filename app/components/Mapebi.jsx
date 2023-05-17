import React, { useState } from "react";
import {
  GoogleMap,
  OverlayView,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

function MapComponent() {
  const initialMarkers = [
    {
      name: "Kutaisi",
      lat: 42.27814,
      lng: 42.8247,
    },
    {
      name: "Tbilisi",
      lat: 41.700523,
      lng: 44.815793,
    },
    {
      name: "Batumi",
      lat: 41.636944,
      lng: 41.692222,
    },
  ];
  const [markers, setMarkers] = useState(initialMarkers);

  return (
    <div>
      <h1>My Map</h1>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 41.700523, lng: 44.815793 }}
      >
        {markers.map((marker) => (
          <OverlayView
            key={marker.name}
            position={{ lat: marker.lat, lng: marker.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                background: "blue",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            />
          </OverlayView>
        ))}
      </GoogleMap>
    </div>
  );
}

const WrappedMapComponent = withScriptjs(withGoogleMap(MapComponent));

export default function Mapebi() {
  return (
    <WrappedMapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBpg4ev38WPO_lnjDy5PFz4-aIpJ4CNAnk`}
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "400px" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
}
