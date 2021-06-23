import React, { useState } from "react";
import {
  MapContainer,
  useMapEvents,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import redIcon from "../assets/marker.png";

export default function App() {
  const [center, setCenter] = useState({ lat: 52.05579, lng: 4.28593 }); //zuiderpark picked from google
  const [markerPosition, setMarkerPosition] = useState({
    lat: 52.05579,
    lng: 4.28593,
  });
  const ZOOM_LEVEL = 15;

  const myIcon = L.icon({
    iconUrl: redIcon,
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  const MapPinComponent = () => {
    useMapEvents({
      click: (e) => {
        const y = e.latlng.lat;
        const x = e.latlng.lng;
        console.log("You clicked the map at LAT: " + y + " and LNG: " + x);
        setMarkerPosition({
          lat: y,
          lng: x,
        });
      },
    });
    return null;
  };

  return (
    <div className="container">
      <MapContainer
        className="myMap"
        center={center}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
      >
        <MapPinComponent />
        <TileLayer
          //Do NOT change/remove this copyright - it can brake the App!
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={markerPosition} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
