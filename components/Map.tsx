"use client";
import React, { useState, useRef, RefObject, useEffect } from "react";

import L, { LatLngTuple, divIcon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Rectangle, Polyline, GeoJSON, useMap } from "react-leaflet";
import VectorTileLayer from "react-leaflet-vector-tile-layer";


// CSS-files
import "tailwindcss/tailwind.css";
import '../styles/map.css';

// sub components
import MyLocation from "./maps/DetectYourLocation";
import {MarkerContents} from "./maps/Marker";
//GeoJSON files 
import districtTiles from '../data/map-tiles/nepal-districts-new.json';
import provinceTiles from '../data/map-tiles/states.json';
import provinceProps from '../data/map-tiles/province-props.json';



const myStyles = { color: 'black', fillColor: 'none', weight: 1 };

// Icon style
const officeIcon = L.icon({
  iconUrl: 'https://api.geoapify.com/v1/icon/?type=awesome&color=%2364b438&size=small&icon=landmark&iconSize=small&scaleFactor=2&apiKey=2d6a0e73bd9f4639b8172b46216c43f7',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

// conditional rendering for Province and District Tiles
function DistrictGeo({ visible, data }: any) {
  return visible ? <GeoJSON data={data} style={myStyles} /> : null;
}
function ProvinceGeoJSON({ visible, data }: any) {
  return visible ? <GeoJSON data={data} style={myStyles} /> : null;
}



function MyMapComponent() {
  const rectangle: LatLngTuple[] = [
    [30.5056, 80.058],
    [26.3475, 88.3015] 
  ];

  const [zoomLevel, setZoomLevel] = useState(7.5);


  // Map contents tilelayer, marker, retangle and so on ..............
  function MapContent() {
    const map = useMap();

    useEffect(() => {
      const updateZoomLevel = () => {
        setZoomLevel(Math.round(map.getZoom()));
      };

      map.on('zoomend', updateZoomLevel);

      return () => {
        map.off('zoomend', updateZoomLevel);
      };
    }, [map]);


    return (
      <>
        <TileLayer
          minZoom={7}
          attribution='sudeep'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render either district or province GeoJSON based on zoom level */}
        {zoomLevel > 8.5 ? <DistrictGeo visible={true} data={districtTiles} /> : <ProvinceGeoJSON visible={true} data={provinceTiles} />}
        {zoomLevel > 7.6 ? <MarkerContents /> : null }
        <MyLocation />
        <Marker position={[27.708572067184317, 85.33439213989928]} icon={officeIcon} >
            <Popup className="pop-up-gtn">
                <h1>Green Tick Nepal</h1> Visit :  <a href="https://www.gtn.com.np" about="blank">gtn.com.np</a>
            </Popup>
        </Marker>
      </>
    );
  }

  return (
    <div className="map-container">
      <MapContainer
        center={[28.054508481737447, 84.1650599076575]}
        zoom={zoomLevel}
        scrollWheelZoom={true}
        style={{ height: "100%" }}>

        <MapContent />
        <Rectangle opacity={0.8} bounds={rectangle} pathOptions={{fillColor: 'black', fillOpacity: 0.05,color:'black' , weight : 1 }} />
      </MapContainer>
    </div>
  );
}
export default MyMapComponent;
