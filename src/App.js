import React, { Component } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//it has to be a class
export default function App() {
  const myCoord = [52.05579, 4.28593]; //zuiderpark (pick from google)
  return (
    <div className="container">
      <MapContainer
        className="myMap"
        center={myCoord}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="ZuiderPark"
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={myCoord}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
