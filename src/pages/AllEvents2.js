import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import redIcon from "../assets/marker.png";
import cities from "../data/cities.json";
import citiesA from "../data/citiesA.json";
import citiesB from "../data/citiesB.json";
console.log(citiesA);
console.log(citiesB);

const markerIcon = new L.Icon({
  iconUrl: redIcon,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkersMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const [newCities, setNewCities] = useState(cities);
  console.log("whats is newCities", newCities);
  const ZOOM_LEVEL = 4;

  const handleChange = (e) => {
    const target = e.target.value;
    const number = parseInt(target);
    console.log("what is number", number);
    if (number === 1) {
      setNewCities(cities);
    }
    if (number === 2) {
      setNewCities(citiesA);
    }
    if (number === 3) {
      setNewCities(citiesB);
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>All Events 2</h2>
          <p>Loading basic map using layer from maptiler</p>
          <label for="allEvents">Select cities </label>
          <select name="allEvents" onChange={handleChange}>
            <option value={0}>Select</option>
            <option value={1}>List All</option>
            <option value={2}>List A</option>
            <option value={3}>List B</option>
          </select>

          <div className="map-container">
            <div className="map-frame">
              <MapContainer
                className="map-id"
                center={center}
                zoom={ZOOM_LEVEL}
              >
                <TileLayer
                  //Do NOT change/remove this copyright - it can brake the App!
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {newCities.map((city, idx) => (
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
      </div>
    </>
  );
};

export default MarkersMap;
