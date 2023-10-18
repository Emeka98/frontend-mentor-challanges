import React, { useState } from "react";
import Button from "../../Button";
import Card from "./Card";
import AvatarAli from "../../../assets/avatar-ali.png";
import AvatarAnisha from "../../../assets/avatar-anisha.png";
import AvatarRichard from "../../../assets/avatar-richard.png";
import AvatarShanai from "../../../assets/avatar-shanai.png";

const cardsInfo = [
  {
    id: 1,
    image: AvatarAnisha,
    name: "Anisha Li",
    content:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    id: 2,
    image: AvatarAli,
    name: "Ali Bravo",
    content:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    id: 3,
    image: AvatarRichard,
    name: "Richard Watts",
    content:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    id: 4,
    image: AvatarShanai,
    name: "Shanai Gough",
    content:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const cardWidth = 340;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveIndex(index);
  };

  console.log(activeIndex);
  return (
    <div className="px-6 flex flex-col gap-16 mt-16 w-full   ">
      <h3 className="heading-2 text-center">What they've said</h3>
      <div className="overflow-x-auto snap-x " onScroll={handleScroll}>
        <div className="flex flex-row gap-[30px]  w-[1200px] md:w-[1800px]">
          {cardsInfo.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div className="mx-auto">
        <Button className="w-[137px] text-white bg-[#F3603C]">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Cards;
