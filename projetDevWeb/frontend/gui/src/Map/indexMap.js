import React, { Component } from "react";
import {L,Icon, control} from 'leaflet';
import Control from 'react-leaflet-control';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../App.css";


var sciences = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  iconSize:[25, 41],
  iconAnchor:[12.5, 41],
  popupAnchor: [0, -41],
})

var lac = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize:[25, 41],
  iconAnchor:[12.5, 41],
  popupAnchor: [0, -41],
})

var cyclo = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize:[25, 41],
  iconAnchor:[12.5, 41],
  popupAnchor: [0, -41],
})

var jardin = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  iconSize:[25, 41],
  iconAnchor:[12.5, 41],
  popupAnchor: [0, -41],
})

var moulinsart = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  iconSize:[25, 41],
  iconAnchor:[12.5, 41],
  popupAnchor: [0, -41],
})

function categories(){
  var div = document.getElementById("categ");
  for (var i = 0; i < 4; i++) {
    div.innerHTML += '<form><input id='+ i +'type="checkbox"/></form><label for='+ i +'>'+ i +'</label>';
  }

  return div;
}

export default function App() {
  return (
    <Map center={[50.666327, 4.605879]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[50.666327, 4.605879]} icon={lac} class="lac">
      <Popup>Lac de Louvain-la-neuve</Popup>
    </Marker>

    <Marker position={[50.6683333, 4.619444444444445]} icon={sciences} class="sci">
      <Popup>Place des Sciences</Popup>
    </Marker>

    <Marker position={[50.6655556, 4.62388888888889]} icon={cyclo} class="cyclo">
      <Popup>Cyclotron</Popup>
    </Marker>

    <Marker position={[50.666434, 4.618033]} icon={jardin} class="jardin">
      <Popup>Jardin Botanique</Popup>
    </Marker>

    <Marker position={[50.660679, 4.607957]} icon={moulinsart} class="moulin">
      <Popup>parc de Moulinsart</Popup>
    </Marker>

    <Control position="topright">
        <div id="categ" onLoad={categories}>Point d'intérêts</div>
    </Control>

    </Map>
  );
}