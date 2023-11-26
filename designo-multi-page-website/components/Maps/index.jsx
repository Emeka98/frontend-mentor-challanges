"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Maps() {
  return (
    <div className="w-full h-[320px] lg:max-w-[350px] ">
      <MapContainer
        className="w-full h-full md:rounded-[15px]"
        center={[43.662299, -79.314497]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Maps;
