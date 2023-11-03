import React from "react";
import { useData } from "../../context/DataContext";
import classNames from "classnames";

function index() {
  const { isActiveAside } = useData();
  return (
    <aside
      className={classNames(
        "h-full",
        "fixed",
        "bg-black-900",
        "text-white",
        "z-20",
        "top-0",
        "left-0",
        "overflow-x-hidden",
        "transition-all",
        "duration-500",
        { "w-[250px]": isActiveAside, "w-[0]": !isActiveAside }
      )}
    >
      aside bar
    </aside>
  );
}

export default index;
