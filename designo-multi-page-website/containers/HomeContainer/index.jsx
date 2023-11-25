import React from "react";
import HomeHero from "@/components/HomeHero";
import LinksContainer from "@/components/LinksContainer";
import { cards } from "./constant";
function HomeContainer() {
  return (
    <div>
      <HomeHero />
      <LinksContainer cards={cards} />
    </div>
  );
}

export default HomeContainer;
