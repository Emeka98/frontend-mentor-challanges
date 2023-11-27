import React from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { address } from "./constant";
const Maps = dynamic(() => import("@/components/Maps"), { ssr: false });

function LocationsContainer() {
  return (
    <div className="flex flex-col gap-[30px] md:gap-28 md:px-6 lg:px-0">
      {address.map((item, i) => (
        <div
          key={item.id}
          className={clsx("flex flex-col md:gap-[30px] lg:flex-row")}
        >
          <div
            className={clsx(" h-[320px] w-full lg:w-[35%]", {
              "lg:order-2": i % 2 === 0,
            })}
          >
            <Maps lat={item.lat} long={item.long} />
          </div>
          <div className="w-full h-[320px] bg-[#fdf3f0] bg-mobile-circle bg-center md:rounded-[15px]">
            <div className="w-full h-full flex flex-col items-center justify-center md:items-start gap-6 md:px-[75px]">
              <h3 className="text-peach text-center text-[32px] font-medium leading-9">
                {item.country}
              </h3>
              <div className="flex flex-col gap-6 md:flex-row md:gap-40  ">
                <address className="text-center md:text-start text-base leading-6 text-[#333136]">
                  <span className="font-bold">{item.office}</span> <br />
                  {item.street} <br />
                  {item.city}
                </address>
                <address className="text-center text-base leading-6 md:text-start text-[#333136]">
                  <span className="font-bold">Contact</span> <br />P :{" "}
                  {item.phone} <br />
                  M:
                  <a href={`mailto:${item.mail}`}>{item.mail}</a>
                </address>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationsContainer;
