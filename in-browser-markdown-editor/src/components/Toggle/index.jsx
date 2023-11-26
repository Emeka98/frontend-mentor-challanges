import React from "react";
import { Switch } from "@headlessui/react";
import { useData } from "../../context/DataContext";
import { BiMoon, BiSun } from "react-icons/bi";

function Toggle({ ...props }) {
  const { theme, setTheme } = useData();

  return (
    <div {...props}>
      <BiSun
        onClick={() => setTheme(!theme)}
        className={`${theme ? "fill-black-500 " : "fill-white "}`}
      />
      <Switch
        checked={theme}
        onChange={setTheme}
        className={`${
          theme ? "bg-black-500" : "bg-black-500"
        } relative inline-flex h-6 w-12 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            theme ? "translate-x-8" : "translate-x-1"
          } inline-block h-3 w-3 transform rounded-full bg-white transition`}
        />
      </Switch>

      <BiMoon onClick={() => setTheme(!theme)} className={`${theme ? "fill-white" : "fill-black-500 "}`} />
    </div>
  );
}
export default Toggle;
