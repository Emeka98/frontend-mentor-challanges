"use client";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mapsInfo = [
  {
    id: 0,
  },
];

function AboutContainer() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[30px]">
      {/* Map */}
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
      <div className="w-full h-[320px] bg-[#fdf3f0] bg-mobile-circle bg-center md:rounded-[15px]">
        <div className="w-full h-full flex flex-col items-center justify-center md:items-start gap-6 md:px-[75px]">
          <h3 className="text-peach text-center text-[32px] font-medium leading-9">
            Australia
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:gap-40  ">
            <address className="text-center md:text-start text-base leading-6 text-[#333136]">
              <span className="font-bold">Designo AU Office</span> <br />
              19 Balonne Street <br />
              New South Wales 2443
            </address>
            <address className="text-center text-base leading-6 md:text-start text-[#333136]">
              <span className="font-bold">Contact</span> <br />
              P : (02) 6720 9092 <br />
              M:
              <a href="mailto:contact@designo.au">contact@designo.au</a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
