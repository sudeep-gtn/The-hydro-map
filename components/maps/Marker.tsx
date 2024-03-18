'use client';
import React, { useEffect, useState, createContext, useContext } from "react";
import L from 'leaflet';
import { Marker, Popup, Tooltip, CircleMarker } from "react-leaflet";
import 'tailwindcss/tailwind.css';

import hydroData from '../../data/hydro/hydropwers.json'

// hydroData context
import { useHydropower,HydropowerContext } from "../HydroContext";

// function useHydropower() {
//   return useContext(HydropowerContext);
// }


// CSS files
import './popup.css';




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

// Icons for different Hydropower status(survey , generation , operation )
const getIcon = (licenseType: string) => {
  let iconUrl;
  switch (licenseType) {
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
    iconUrl: iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
}


function MarkerContents() {
  const { selectedHydropower, updateSelectedHydropower } = useHydropower();
  const handleMarkerClick = (item :any) => {
    updateSelectedHydropower(item); // Update the selected hydropower data
  };
  return (
    <>
      {hydroData.map((item , index) => (
        <Marker
          icon={getIcon(item["License Type"])}
          key={index}
          position={[item.Latitude, item.Longitude]}
          eventHandlers={{
            click: () => handleMarkerClick(item)
          }}
        >
          <Popup className="pop-up">
            <h1>{item.Project}</h1>
          </Popup>
          <Tooltip sticky className="tooltipss"> {item.Project} </Tooltip>
        </Marker>
      ))}

      {/* <HydropowerProvider selectedHydropower={selectedHydropower} /> */}
    </>
  );
}

export default MarkerContents;
