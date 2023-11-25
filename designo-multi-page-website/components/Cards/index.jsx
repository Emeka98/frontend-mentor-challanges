import React from "react";
import Image from "next/image";

function Cards({ cards }) {
  return (
    <section className="flex flex-col gap-10 px-6 mt-24 lg:flex-row lg:flex-wrap lg:gap-[30px] justify-center lg:justify-center lg:px-0 ">
      {cards.map((card, i) => (
        <div
          key={card.id}
          className="w-full group  flex flex-col md:flex-row lg:flex-col lg:w-[31%] cursor-pointer"
        >
          <div className="w-full h-[320px] relative">
            <Image
              fill
              src={card.image}
              alt={`${card.title} picture`}
              className="rounded-t-[15px] md:rounded-l-[15px] md:rounded-tr-[0] lg:rounded-t-[15px] lg:rounded-b-none"
              placeholder="blur"
            />
          </div>
          <div className="w-full h-[157px] md:h-[320px] lg:h-[157px] bg-[#FDF3F0] group-hover:bg-peach rounded-b-[15px] md:rounded-b-none md:rounded-r-[15px] lg:rounded-b-[15px] lg:rounded-t-none ">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <h4 className="text-peach text-xl font-medium leading-7 tracking-[5px] uppercase group-hover:text-white ">
                {card.title}
              </h4>
              <p className="text-center leading-7 text-base text-[#333136] group-hover:text-white max-w-[30ch]">
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
