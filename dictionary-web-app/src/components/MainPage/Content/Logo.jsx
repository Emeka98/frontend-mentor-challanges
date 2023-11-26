import React, {useState } from "react";

function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 md:h-[75px] md:w-[75px]"
        viewBox="0 0 75 75"
        fill="none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          fill="#A445ED"
          className={` transition-opacity ${
            isHovered ? "opacity-100" : "opacity-25"
          }`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 27V48L50 37.5L29 27Z"
          fill="#A445ED"
          className={` transition-fill ${isHovered ? 'fill-white' : ''}`}
        />
      </svg>
    </>
  );
}

export default Logo;
