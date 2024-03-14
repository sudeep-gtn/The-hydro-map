// import React, { useRef, useEffect, useState } from 'react';
// import "leaflet/dist/leaflet.css";

// import L from "leaflet";

// import './map.css';

// import { MaptilerLayer } from "react-leaflet";

// const Map = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const center = { lng: 13.338414, lat: 52.507932 };
//   const [zoom] = useState(12);

//   useEffect(() => {
//     if (map.current) return; // stops map from intializing more than once

//     map.current = new L.Map(mapContainer.current, {
//       center: L.latLng(center.lat, center.lng),
//       zoom: zoom
//     });

//     // Create a MapTiler Layer inside Leaflet
//     const mtLayer = new MaptilerLayer({
//       // Get your free API key at https://cloud.maptiler.com
//       apiKey: "YOUR_MAPTILER_API_KEY_HERE",
//     }).addTo(map.current);

//   }, [center.lng, center.lat, zoom]);

//   return (
//     <div className="map-wrap">
//       <div ref={mapContainer} className="map"/>
//     </div>
//   )
// }

// export default Map;