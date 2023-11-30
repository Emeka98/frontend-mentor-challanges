import React from "react";
import Accordion from "../Accordion";
import { ACCORDİONS } from "./constant";

function Accordions() {
  return (
    <div className="flex flex-col gap-5 ">
      {ACCORDİONS.map((accordion) => (
        <Accordion
          key={accordion.id}
          title={accordion.title}
          content={accordion.content}
        />
      ))}
    </div>
  );
}

export default Accordions;
