import React from "react";
import Accordion from "../Accordion";
import { ACCORDIONS_INFO } from "./constant";

function Accordions() {
  return (
    <div className="flex flex-col gap-5 ">
      {ACCORDIONS_INFO.map((accordion) => (
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
