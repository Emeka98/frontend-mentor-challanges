import React from "react";
import DesignHero from "@/components/DesignHero";
import Cards from "@/components/Cards";
import LinksContainer from "@/components/LinksContainer";
import { heroInfo, graphicDesignCards, cards } from "./constant";
function GraphicDesignContainer() {
  return (
    <div>
      <DesignHero title={heroInfo.title} content={heroInfo.content} />
      <Cards cards={graphicDesignCards} />
      <LinksContainer cards={cards} />
    </div>
  );
}

export default GraphicDesignContainer;
