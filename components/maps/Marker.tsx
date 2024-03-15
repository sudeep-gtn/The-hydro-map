import React, { useEffect, useState } from "react";
import L from 'leaflet';
import { Marker, Popup , Tooltip,CircleMarker} from "react-leaflet";

import 'tailwindcss/tailwind.css';
import './popup.css';



import hydroData from '../../data/hydro/hydropwers.json'

const officeIcon = L.icon({
    iconUrl: 'https://api.geoapify.com/v1/icon/?type=awesome&color=%2364b438&size=small&icon=landmark&iconSize=small&scaleFactor=2&apiKey=2d6a0e73bd9f4639b8172b46216c43f7',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
});
// const [zoomLevel, setZoomLevel] = useState(7.5);

const getIcon = (licenseType:string) => {
    let iconUrl;
    switch(licenseType){
        case 'Survey':
            iconUrl = 'https://api.geoapify.com/v1/icon/?type=awesome&color=%23ffcf24&size=small&icon=lightbulb&textSize=small&noWhiteCircle&apiKey=2d6a0e73bd9f4639b8172b46216c43f7';
            break;
        case 'Generation':
            iconUrl = 'https://api.geoapify.com/v1/icon/?type=awesome&color=%23264fc2&icon=hammer&textSize=small&noWhiteCircle&apiKey=2d6a0e73bd9f4639b8172b46216c43f7';
            break;
        case 'Operation':
            iconUrl = 'https://api.geoapify.com/v1/icon/?type=awesome&color=%2336b40c&size=small&icon=tree&textSize=small&noWhiteCircle&apiKey=2d6a0e73bd9f4639b8172b46216c43f7';
            break;
        default:
            iconUrl = 'https://api.geoapify.com/v1/icon/?type=awesome&color=%2364b438&size=small&icon=landmark&iconSize=small&scaleFactor=2&apiKey=2d6a0e73bd9f4639b8172b46216c43f7';
    }
    return L.icon({
        iconUrl : iconUrl,
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41],
    });
}


export function ProvinceMarker(){
    const text = L.divIcon({html:"Koshi Province" , className:"province-label"} )
    return(
        <CircleMarker center={[27.147517483555397, 87.55539534306457]} pathOptions={{fillColor:'black'}} radius={40}>
            
        </CircleMarker>
    );
}


export function MarkerContents() {
    return (
        <>
            {hydroData.map((item , index) => (
                <Marker icon={getIcon(item["License Type"])} key={index} position={[item.Latitude, item.Longitude]}>
                    <Popup className="pop-up"> <h1>{item.Project}</h1> </Popup>
                    <Tooltip>{item.Project} </Tooltip>
                </Marker>
            ))}
            <Marker position={[27.708572067184317, 85.33439213989928]} icon={officeIcon} >
                <Popup className="pop-up-gtn">
                    <h1>Green Tick Nepal</h1> Visit :  <a href="https://www.gtn.com.np" about="blank">gtn.com.np</a>
                </Popup>
            </Marker>
        </>
    )
}

