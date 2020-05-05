import React, { Component } from "react";
import {L,Icon} from 'leaflet';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../App.css";


var MyIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize:[25, 41],
  iconAnchor:[12.5, 41],
  popupAnchor: [0, -41],
})

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

    <Marker position={[50.6683333, 4.619444444444445]} icon={MyIcon}>
      <Popup>Place des Sciences</Popup>
    </Marker>

    <Marker position={[50.6655556, 4.62388888888889]}>
      <Popup>Cyclotron</Popup>
    </Marker>

    </Map>
  );
}