import React, { createContext, useContext, useMemo, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [detailedSeach, setDetailedSearch] = useState(false);

  const contextData = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
      searchTitle,
      setSearchTitle,
      detailedSeach,
      setDetailedSearch,
    }),

    [
      isDarkMode,
      setIsDarkMode,
      searchTitle,
      setSearchTitle,
      setDetailedSearch,
      detailedSeach,
    ]
  );

  console.log(detailedSeach)

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("There is no data!");
  }

  return context;
}
