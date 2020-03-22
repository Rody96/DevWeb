import React from 'react';
import l from 'leaflet'
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height:${props => props.height};
`;

export default class Map extends React.Component{
    componentDidMount(){
        this.map = l.map('map',{
            center:[50.668081,4.6118324],
            zoom: 15,
            zoomControl: false
        });
        l.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);

    }

    render(){
        return <Wrapper width="500px" height="500px" id="map" />
    }
}