import React, { createContext, useContext, useState, useMemo } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [planet, setPlanet] = useState(0);
  const [planetImage, setPlanetImage] = useState("planet");
  const [planetInfo, setPlanetInfo] = useState("overview");
  const contextData = useMemo(
    () => ({
      planet,
      setPlanet,
      planetImage,
      setPlanetImage,
      planetInfo,
      setPlanetInfo,
    }),
    [planet, setPlanet, planetImage, setPlanetImage, planetInfo, setPlanetInfo]
  );
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
