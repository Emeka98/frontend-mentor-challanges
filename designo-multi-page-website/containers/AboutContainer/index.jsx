import DescriptionBox from "@/components/DescriptionBox";
import React from "react";
import { aboutusInfo, talentInfo } from "./constant";

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
    </div>
  );
}

export default AboutContainer;
