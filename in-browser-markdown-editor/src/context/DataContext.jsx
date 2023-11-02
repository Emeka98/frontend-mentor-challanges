import React, { createContext, useContext, useState, useMemo } from "react";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("There is no context!");
  }
  return context;
}
