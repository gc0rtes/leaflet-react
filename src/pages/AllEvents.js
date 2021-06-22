import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import redIcon from "../assets/marker.png";
import cities from "../data/cities.json";

const markerIcon = new L.Icon({
  iconUrl: redIcon,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkersMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 4;
  const mapRef = useRef();

  return (
    <>
      <div>
        <div>
          <h2>React-leaflet - Adding Markers to react leaflet</h2>
          <p>Loading basic map using layer from maptiler</p>
          <div className="container">
            <MapContainer
              className="myMap"
              center={center}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
            >
              <TileLayer
                //Do NOT change/remove this copyright - it can brake the App!
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {cities.map((city, idx) => (
                <Marker
                  position={[city.lat, city.lng]}
                  icon={markerIcon}
                  key={idx}
                >
                  <Popup>
                    <b>
                      {city.city}, {city.country}
                    </b>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;
