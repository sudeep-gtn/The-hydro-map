import React, { useEffect, useState } from "react";
import L from 'leaflet';
import { Marker, Popup } from "react-leaflet";


import hydroData from '../../data/hydro/hydropwers.json'

const officeIcon = L.icon({
    iconUrl: 'https://api.geoapify.com/v1/icon/?type=awesome&color=%2364b438&size=small&icon=landmark&iconSize=small&scaleFactor=2&apiKey=2d6a0e73bd9f4639b8172b46216c43f7',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

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


export function MarkerContents() {
    return (
        <>
            {hydroData.map((item , index) => (
                <Marker icon={getIcon(item["License Type"])} key={index} position={[item.Latitude, item.Longitude]}>
                    <Popup>{item.Project}</Popup>
                </Marker>
            ))}
            <Marker position={[27.708572067184317, 85.33439213989928]} icon={officeIcon} >
                <Popup>
                    <h1>Green Tick Nepal</h1> Contact us for IS edit.
                </Popup>
            </Marker>
        </>
    )
}

