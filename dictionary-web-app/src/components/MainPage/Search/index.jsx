import React, { useState , useRef } from "react";
import Logo from "./Logo";
import { useData } from "../../context/ThemeContext";
function Search() {
  const { theme, search, setSearch, getData } = useData();

const handleSubmit = (e) => {
  e.preventDefault()
  setSearch(e.target[0].value)
  getData()
}



  return (
    <form className="relative mt-7 md:mt-[50px]" onSubmit={(e) => handleSubmit(e)}   >
      <input
        className={`w-full h-12 md:h-16 rounded-2xl font-bold outline-[#a445ed]   px-6  ${
          theme ? "bg-[#1f1f1f] " : "bg-[#f4f4f4]"
        } `}

        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for any word…"

      />
      <Logo />
    </form>
  );
}

export default Search;
