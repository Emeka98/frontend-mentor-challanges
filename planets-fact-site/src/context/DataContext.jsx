import React, { createContext, useContext } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const contextData = "Güney";
  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("There is no Context!");
  }
  return context;
};
