import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../App.css";

export default function App() {
  return (
    <Map center={[50.666327, 4.605879]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[50.666327, 4.605879]}>
      <Popup>Lac de Louvain-la-neuve</Popup>
    </Marker>
    </Map>
  );
}