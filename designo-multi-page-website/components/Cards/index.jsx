import React from "react";
import Image from "next/image";

function Cards({ cards }) {
  return (
    <section className="flex flex-col gap-10 px-6 mt-24">
      {cards.map((card, i) => (
        <div key={card.id} className="w-full">
          <div className="w-full h-[320px] relative">
            <Image
              fill
              src={card.image}
              alt={`${card.title} picture`}
              className="rounded-t-[15px]"
              placeholder="blur"
            />
          </div>
          <div className="w-full h-[157px] bg-[#FDF3F0] rounded-b-[15px]">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <h4 className="text-peach text-xl font-medium leading-7 tracking-[5px] uppercase ">
                {card.title}
              </h4>
              <p className="text-center leading-7 text-base text-[#333136] max-w-[30ch]">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cards;
