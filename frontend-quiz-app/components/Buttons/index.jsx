"use client";
import React from "react";
import Button from "@/components/Button";
function Buttons({ buttons }) {
  return (
    <div className="flex flex-col gap-3">
      {buttons.map((item) => (
        <Button item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Buttons;
