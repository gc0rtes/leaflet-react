import React, { useState } from "react";
import Leaflet from "leaflet";
import {
  MapContainer,
  useMapEvents,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

let DefaultIcon = Leaflet.icon({
  ...Leaflet.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

//Map Component start HERE
export default function MapComp({ coords, myMarker }) {
  const [markerPosition, setMarkerPosition] = useState(myMarker);

  const MapPinComponent = () => {
    useMapEvents({
      click: (e) => {
        const y = e.latlng.lat;
        const x = e.latlng.lng;
        console.log("You clicked the map at LAT: " + y + " and LNG: " + x);
        setMarkerPosition([y, x]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      classsName="map"
      center={coords}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnClick coords={coords} />

      <MapPinComponent />

      <Marker position={markerPosition} icon={DefaultIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
