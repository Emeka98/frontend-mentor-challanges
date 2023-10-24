import React, { createContext, useContext, useState, useMemo } from "react";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [isPlayer, setIsPlayer] = useState(false);
  const [currUser, setCurrUser] = useState("x");

  const generateBoard = (size) => {
    const newBoard = [];
    for (let i = 0; i < size; i++) {
      newBoard.push([...Array(size)]);
    }
    return newBoard;
  };

  const contextData = useMemo(
    () => ({
      isPlayer,
      setIsPlayer,
      generateBoard,
      currUser,
      setCurrUser,
    }),
    [isPlayer, generateBoard, currUser, setCurrUser]
  );

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
