import DesignHero from "@/components/DesignHero";
import React from "react";
import Cards from "@/components/Cards";
import { heroInfo, webDesignCards, cards } from "./constant";
import LinksContainer from "@/components/LinksContainer";

function WebDesignContainer() {
  return (
    <div>
      <DesignHero title={heroInfo.title} content={heroInfo.content} />
      <Cards cards={webDesignCards} />
      <LinksContainer cards={cards} />
    </div>
  );
}

export default WebDesignContainer;
