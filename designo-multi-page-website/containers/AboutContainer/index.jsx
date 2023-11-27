import DescriptionBox from "@/components/DescriptionBox";
import React from "react";
import { aboutusInfo, talentInfo, dealInfo } from "./constant";
import LinksCard from "@/components/LinksCard";

function AboutContainer() {
  return (
    <div>
      <DescriptionBox item={aboutusInfo} onLeft={true} theme={"primary"} />
      <DescriptionBox
        className={"mt-0  md:mt-[120px] lg:mt-[160px]"}
        item={talentInfo}
        onLeft={false}
        theme={"secondary"}
      />
      <LinksCard />
      <DescriptionBox
        item={dealInfo}
        className={"mt-20  md:mt-[120px] lg:mt-[160px]"}
        onLeft={true}
        theme={"secondary"}
      />
    </div>
  );
}

export default AboutContainer;
