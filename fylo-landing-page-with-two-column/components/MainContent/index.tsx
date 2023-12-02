import React from "react";
import section1Img from "@/assets/icons/illustration-1.svg?url";

import Image from "next/image";

function MainContent() {
  return (
    <main className="px-6">
      <section>
        <div className="relative w-full h-[225px] ">
          <Image src={section1Img} alt="Section one image" fill />
        </div>
      </section>
    </main>
  );
}

export default MainContent;
