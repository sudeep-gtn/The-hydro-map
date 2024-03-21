"use client";
import React, { useState, useRef, RefObject, useEffect } from "react";
import L, { LatLngTuple, divIcon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Rectangle, Polyline, GeoJSON, useMap } from "react-leaflet";
import VectorTileLayer from "react-leaflet-vector-tile-layer";


// CSS-files
import "tailwindcss/tailwind.css";
import '../../styles/map.css';
import '../../styles/legend.css';

// sub components
import MyLocation from "./DetectYourLocation";
import MarkerContents from "./Marker";
//GeoJSON files 
import districtTiles from '../../data/map-tiles/nepal-districts-new.json';
import provinceTiles from '../../data/map-tiles/states.json';
import provinceProps from '../../data/map-tiles/province-props.json';
import FilterContainerBar from "../filterBars/FilterBar";


const myStyles = { color: 'black', fillColor: 'none', weight: 1 };

// Icon style
// conditional rendering for Province and District Tiles
function DistrictGeo({ visible, data }: any) {
  return visible ? <GeoJSON data={data} style={myStyles} /> : null;
}
function ProvinceGeoJSON({ visible, data }: any) {
  return visible ? <GeoJSON data={data} style={myStyles} /> : null;
}


interface HydropowerData {
  Project: string;
  Province: string;
  District: string;
  Municipality: string;
  Capacity: number;
  River: string;
  LicenseNo: number;
  IssueDate: string;
  Validity: string;
  Promoter: string;
};

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
      const legend = L.control({ position: 'topright' });


      // Define legend content
      legend.onAdd = function (map: any) {
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
        <h4 class="text-base font-semibold mb-2 text-center">Legends</h4>
        <div class="legend-item flex items-center mb-1 border-b border-gray-100">
          <img src="https://api.geoapify.com/v1/icon/?type=awesome&color=%23ffcf24&size=small&icon=lightbulb&iconSize=small&noWhiteCircle&apiKey=2d6a0e73bd9f4639b8172b46216c43f7" alt="Lightbulb Icon" class="mr-2" />
          <span class="legend-label">Survey</span>
        </div>
        <div class="legend-item flex items-center mb-1 border-b border-gray-100">
          <img src="https://api.geoapify.com/v1/icon/?type=awesome&color=%231774f1&size=small&icon=hammer&iconSize=small&textSize=small&noWhiteCircle&apiKey=2d6a0e73bd9f4639b8172b46216c43f7" alt="Lightbulb Icon" class="mr-2" />
          <span class="legend-label">Under Construction</span>
        </div>
        <div class="legend-item flex items-center mb-1 border-b border-gray-100">
          <img src="https://api.geoapify.com/v1/icon/?type=awesome&color=%2326a615&size=small&icon=tree&iconSize=small&textSize=small&noWhiteCircle&apiKey=2d6a0e73bd9f4639b8172b46216c43f7" alt="Lightbulb Icon" class="mr-2" />
          <span class="legend-label">Operation</span>
        </div>
      `;
        return div;
      };

      // Add legend to map
      legend.addTo(map);

      const updateZoomLevel = () => {
        setZoomLevel(Math.round(map.getZoom()));
      };

      map.on('zoomend', updateZoomLevel);

      return () => {
        map.off('zoomend', updateZoomLevel);
        legend.remove();
      };
    }, [map]);


    return (
      <>
        <TileLayer
          minZoom={7}
          attribution='sudeep'
          // url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=isWJpZkXVOqxIPlUJPNc"
          // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          // url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}@2x.png?key=isWJpZkXVOqxIPlUJPNc"
          // url="https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=isWJpZkXVOqxIPlUJPNc"
          url="https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=isWJpZkXVOqxIPlUJPNc"
        />

        {/* Render either district or province GeoJSON based on zoom level */}
        {zoomLevel > 8.5 ? <DistrictGeo visible={true} data={districtTiles} /> : <ProvinceGeoJSON visible={true} data={provinceTiles} />}
        {zoomLevel > 7.6 ? <MarkerContents /> : null}
        <MyLocation />
      </>
    );
  }
  return (
    <>
      <div className="map-container">
        <MapContainer
          center={[28.054508481737447, 84.1650599076575]}
          zoom={zoomLevel}
          scrollWheelZoom={true}
          zoomDelta={1}
          zoomAnimation={true}
          style={{ height: "100%" }}>

          <MapContent />
          <Rectangle opacity={0.8} bounds={rectangle} pathOptions={{ fillColor: 'black', fillOpacity: 0.05, color: 'black', weight: 1 }} />
          {/* <Legend /> */}
        </MapContainer>
      </div>
    </>
  );
}
export default MyMapComponent;
