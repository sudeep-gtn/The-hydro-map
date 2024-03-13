'use client';
import React, { useState, useRef, RefObject } from 'react'
import { Map, LeafletMouseEvent, LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map2 = () => {
    const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 })
    const ZOOM_LEVEL = 9
    const mapRef = useRef<Map>(null);
    const [location, setLocation] = useState({ loaded: false, error: null, coordinates: { lat: 27.696277881963407, lng: 85.36042867577738 } });

    return (
        <>

            {/* -------------------------------------------------------------------------- */}
            {/* <MapContainer center={[location.coordinates.lat, location.coordinates.lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}
            {/* -------------------------------------------------------------------------- */}
            <div className='container'>
                <div className='container'>
                    <h1 className='text-center-mt-5'>OpenStreetMap Embeded</h1>
                </div>
                <div className='row'>
                    Lorem, ipsum dolor.
                    <div className='col'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio suscipit velit repudiandae, dolore aspernatur. Facere laudantium ea, sunt sit impedit saepe illum id quod quo doloribus cum quaerat quidem.
                        <div className='container'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam cum dicta, quae totam cupiditate! Quis voluptatum tenetur alias voluptate accusamus debitis, minus voluptas animi? Reprehenderit vel quae porro impedit.
                            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[location.coordinates.lat,location.coordinates.lng]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map2