import React from "react";

function Card({ card }) {
  return (
    <div className="w-full  flex flex-col items-center gap-6 px-5 bg-[#FAFAFA]">
      <div className="w-[72px] h-[72px] rounded-full mt-[-36px] ">
        <img src={card.image} alt="profile photo" />
      </div>

      <h3 className="text-[16px] text-[#242d52] font-bold  tracking-[-0.286px] text-center">
        {card.name}
      </h3>
      <p className="text-custom text-center">{card.content}</p>
    </div>
  );
}

export default Card;
