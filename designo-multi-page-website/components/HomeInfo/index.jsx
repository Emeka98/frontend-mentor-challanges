import React from "react";
import Image from "next/image";
import { cards } from "./constant";

function HomeInfo() {
  return (
    <section className="flex flex-col gap-20  px-6 md:px-0 mt-[120px] lg:flex-row ">
      {cards.map((card, i) => (
        <div
          key={card.id}
          className="flex flex-col md:flex-row lg:flex-col gap-8 md:gap-12 w-full h-full items-center lg:flex-1"
        >
          <div className="bg-circle bg-cover overflow-visible  ">
            <Image src={card.image} className="object-cover" />
          </div>
          <div className="md:max-w-[439px]">
            <h3 className="uppercase text-dark-grey text-[20px] font-medium tracking-[5px] leading-7 text-center md:text-start lg:text-center mb-8">
              {card.title}
            </h3>
            <p className="text-center text-dark-grey text-base font-normal leading-7 md:text-start lg:text-center ">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomeInfo;
