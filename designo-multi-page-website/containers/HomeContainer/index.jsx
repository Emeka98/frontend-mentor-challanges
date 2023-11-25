import React from "react";
import HomeHero from "@/components/HomeHero";
import LinksContainer from "@/components/LinksContainer";
import { cards } from "./constant";
import HomeInfo from "@/components/HomeInfo";
function HomeContainer() {
  return (
    <div>
      <HomeHero />
      <LinksContainer cards={cards} />
      <HomeInfo />
    </div>
  );
}

export default HomeContainer;
