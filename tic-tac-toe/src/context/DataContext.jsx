import React, { createContext, useContext, useState, useMemo } from "react";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [playerOneMark, setPlayerOneMark] = useState("o");
  const [isPlayer, setIsPlayer] = useState(false);
  const [isCpu, setIsCpu] = useState(false);
  const [currUser, setCurrUser] = useState("x");

  const generateBoard = (size) => {
    const newBoard = [];
    for (let i = 0; i < size; i++) {
      newBoard.push([...Array(size)]);
    }
    return newBoard;
  };

    // Restart Function



  const contextData = useMemo(
    () => ({
      isPlayer,
      setIsPlayer,
      generateBoard,
      currUser,
      setCurrUser,
      isCpu,
      setIsCpu,
      playerOneMark,
      setPlayerOneMark,

    }),
    [
      isPlayer,
      generateBoard,
      currUser,
      setCurrUser,
      isCpu,
      setIsCpu,
      playerOneMark,
      setPlayerOneMark,

    ]
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