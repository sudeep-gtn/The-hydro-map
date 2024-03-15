import React ,{useState} from "react"
import { Marker,useMapEvents, Popup } from "react-leaflet"

interface Position {
    lat: number;
    lng: number;
};
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
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

export default MyLocation;