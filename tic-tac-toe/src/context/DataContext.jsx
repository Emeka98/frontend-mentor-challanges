import React, { createContext, useContext } from "react";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const contextData = "Güney";

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("There is no context data");
  }
  return context;
}
