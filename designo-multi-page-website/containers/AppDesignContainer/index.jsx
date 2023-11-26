import React from "react";
import DesignHero from "@/components/DesignHero";
import Cards from "@/components/Cards";
import LinksContainer from "@/components/LinksContainer";
import { heroInfo, appDesignCards, cards } from "./constant";
function AppDesignContainer() {
  return (
    <div>
      <DesignHero title={heroInfo.title} content={heroInfo.content} />
      <Cards cards={appDesignCards} />
      <LinksContainer cards={cards} />
    </div>
  );
}

export default AppDesignContainer;
