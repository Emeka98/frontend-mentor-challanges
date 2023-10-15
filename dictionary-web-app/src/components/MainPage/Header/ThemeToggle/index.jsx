import React from "react";
import { Switch } from "@headlessui/react";
import { useData } from "../../../context/ThemeContext";
function ThemeToggle() {
  const { theme, setTheme } = useData();

  return (
    <>
      <Switch
        checked={theme}
        onChange={setTheme}
        className={`${
          theme ? "bg-[#A445ED]" : "bg-[#757575]"
        } relative inline-flex h-5 w-10 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            theme ? "translate-x-5" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke="#838383"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </>
  );
}

export default ThemeToggle;
