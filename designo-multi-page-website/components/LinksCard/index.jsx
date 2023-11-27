import React from "react";
import Image from "next/image";
import Button from "../Button";
import { cards } from "./constant";
function LinksCard() {
  return (
    <section className="flex flex-col gap-20  px-6 md:px-0 mt-[120px] lg:flex-row ">
      {cards.map((card, i) => (
        <div
          key={card.id}
          className="flex flex-col  lg:flex-col gap-8  w-full h-full items-center  lg:flex-1"
        >
          <div className="bg-circle bg-cover overflow-visible  ">
            <Image
              src={card.image}
              className="object-cover"
              alt={`${card.title} images'`}
            />
          </div>
          <div className="md:max-w-[439px] flex flex-col items-center">
            <h3 className="uppercase text-dark-grey text-[20px] font-medium tracking-[5px] leading-7 text-center md:text-start lg:text-center mb-8">
              {card.title}
            </h3>
            <Button path={card.path} theme={"dark"}>
              See Location
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default LinksCard;
