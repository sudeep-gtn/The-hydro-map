"use client";
import React, { useState, useRef, RefObject } from "react";
import { Map, LeafletMouseEvent, LatLngTuple, map } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap, useMapEvent } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import "tailwindcss/tailwind.css";
import '../styles/map.css';




// const Map2 = () => {
//     const map = useMap();
//     const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 })
//     const ZOOM_LEVEL = 9
//     const mapRef = useRef<Map>(null);
//     const [location, setLocation] = useState({ loaded: false, error: null, coordinates: { lat: 27.696277881963407, lng: 85.36042867577738 } });

//     return (
//         <>

//             {/* -------------------------------------------------------------------------- */}
//             {/* <MapContainer center={[location.coordinates.lat, location.coordinates.lng]} zoom={13} scrollWheelZoom={false}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
//                     <Popup>
//                         A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                 </Marker>
//             </MapContainer> */}
//             {/* -------------------------------------------------------------------------- */}
//             <div className='container'>
//                 <div className='container'>
//                     <h1 className='text-center-mt-5'>OpenStreetMap Embeded</h1>
//                 </div>
//                 <div className='row'>
//                     <div className='col'>
//                         <div className='container'>
//                             <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//                                 <TileLayer
//                                     // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                                 />
// <Marker position={[location.coordinates.lat,location.coordinates.lng]}>
//     <Popup>
//         A pretty CSS3 popup. <br/> Easily customizable.
//     </Popup>
// </Marker>
//                             </MapContainer>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Map2

// =======================================================================================================================================
// function MyComponent() {
//     const map = useMapEvent('click', () => {
//         map.setView([51.505, -0.09])
//     })
// }
function MyMapComponent() {
  return (
    <div className="map-container"> {/* Apply custom styles to this container */}
      <MapContainer
        center={[27.708572067184317, 85.33439213989928]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%" }} // Set height and width inline
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[27.708572067184317, 85.33439213989928]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default MyMapComponent;
