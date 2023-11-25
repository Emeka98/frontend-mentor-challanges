import DesignHero from "@/components/DesignHero";
import React from "react";
import Cards from "@/components/Cards";
import { heroInfo, webDesignCards } from "./constant";

function WebDesignContainer() {
  return (
    <div>
      <DesignHero title={heroInfo.title} content={heroInfo.content} />
      <Cards cards={webDesignCards} />
    </div>
  );
}

export default WebDesignContainer;
