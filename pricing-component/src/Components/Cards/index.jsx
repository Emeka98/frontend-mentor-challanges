import React from "react";
import { cardsInfo } from "./constant";
import Card from "./Card";

function Cards({ pricing }) {
  const billingType = pricing ? "monthly" : "annually";
  const items = cardsInfo[billingType];
  return (
    <div className="flex flex-col gap-8 w-full mt-20 md:mt-[64px] md:items-center md:flex-row md:justify-center  md:gap-0">
      {items.map((item, idx) => (
        <Card key={idx} item={item} idx={idx} />
      ))}
    </div>
  );
}

export default Cards;
