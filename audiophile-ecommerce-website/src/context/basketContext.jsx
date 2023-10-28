import React, { createContext, useContext, useState, useMemo } from "react";
const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [basket, setBasket] = useState(Array());
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  const contextData = useMemo(
    () => ({
      basket,
      setBasket,
      numberOfProduct,
      setNumberOfProduct,
    }),
    [basket, setBasket, numberOfProduct, setNumberOfProduct]
  );

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("there is no context provider");
  }

  return context;
}
