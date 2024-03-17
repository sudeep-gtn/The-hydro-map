import React, { useState } from "react"
import L from 'leaflet';
import { Marker, useMapEvents, Popup, Circle, Tooltip, } from "react-leaflet"

interface Position {
  lat: number;
  lng: number;
};



const myLocationIcon = L.icon({
  iconUrl : 'https://api.geoapify.com/v1/icon/?type=circle&color=%23354a81&size=large&icon=wifi&iconType=awesome&iconSize=small&apiKey=2d6a0e73bd9f4639b8172b46216c43f7',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

function MyLocation() {

  const [position, setPosition] = useState<Position | null>(null);
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  console.log(position);
  return position === null ? null : (
    <>
      <Marker icon={myLocationIcon} position={position}>
        <Popup className="pop-up"></Popup>
        <Tooltip permanent>You are here !</Tooltip>
      </Marker>
      <Circle center={position} pathOptions={{ fillColor: 'blue' }} radius={200} />
    </>
  )
}

export default MyLocation;