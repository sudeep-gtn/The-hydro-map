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
        {/* <GeoJSON data={provinceProps} pointToLayer={setIcon} /> */}
        <MyLocation />

        <MarkerContents />
      </>
    );
  }

  return (
    <div className="map-container"> {/* Apply custom styles to this container */}
      <MapContainer
        center={[28.054508481737447, 84.1650599076575]}
        zoom={zoomLevel}
        scrollWheelZoom={true}
        style={{ height: "100%" }} // Set height and width inline
      >

        <MapContent />
        <Rectangle opacity={0.8} bounds={rectangle} pathOptions={{fillColor: 'black', fillOpacity: 0.05,color:'black' , weight : 1 }} />
      </MapContainer>
    </div>
  );
}
export default MyMapComponent;
