import React, { createContext, useContext, useMemo, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const contextData = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
    }),

    [isDarkMode, setIsDarkMode]
  );

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
