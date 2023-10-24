import React, { useState } from "react";
import { useData } from "../../context/dataContext";
import IconO from "./Images/IconO";
import IconX from "./Images/IconX";
import Logo from "../../assets/logo.svg";

function Game() {
  const { generateBoard, currUser, setCurrUser } = useData();
  const [board, setBoard] = useState(generateBoard(3));

  const handleClick = (r, c) => {
    !board[r][c] && (board[r][c] = currUser === "x" ? <IconX /> : <IconO />);
    setBoard([...board]);
    setCurrUser(currUser === "x" ? "o" : "x");
    if (checkForWin(board)) {
      console.log(currUser + "wins");
    }
  };

  const checkForWin = (board) => {
    //Horizontal
    for (let row of board) {
      let xCount = 0;
      let oCount = 0;
      for (let cell of row) {
        if (cell && cell.type === IconX) {
          xCount++;
        } else if (cell && cell.type === IconO) {
          oCount++;
        }
      }
      if (xCount === row.length || oCount === row.length) {
        return true;
      }
    }
    //Vertically
    for (let i = 0; i < board.length; i++) {
      let xCount = 0;
      let oCount = 0;
      for (let j = 0; j < board.length; j++) {
        const cell = board[j][i];
        if (cell && cell.type === IconX) {
          xCount++;
        } else if (cell && cell.type === IconO) {
          oCount++;
        }
      }
      if (xCount === board.length || oCount === board.length) {
        return true;
      }
    }

    //Diagonal
    let xCountDiagonal1 = 0;
    let oCountDiagonal1 = 0;
    let xCountDiagonal2 = 0;
    let oCountDiagonal2 = 0;
    for (let i = 0; i < board.length; i++) {
      const cell1 = board[i][i];
      const cell2 = board[i][board.length - i - 1];
      if (cell1 && cell1.type === IconX) {
        xCountDiagonal1++;
      } else if (cell1 && cell1.type === IconO) {
        oCountDiagonal1++;
      }
      if (cell2 && cell2.type === IconX) {
        xCountDiagonal2++;
      } else if (cell2 && cell2.type === IconO) {
        oCountDiagonal2++;
      }
    }
    if (xCountDiagonal1 === board.length || xCountDiagonal2 === board.length) {
      console.log("Diagonal win for X");
      return true;
    } else if (
      oCountDiagonal1 === board.length ||
      oCountDiagonal2 === board.length
    ) {
      console.log("Diagonal win for O");
      return true;
    }

    return false;
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark-navy">
      <div className="w-full h-full max-w-[490px] flex flex-col p-6">
        <div className="flex flex-row mb-16 justify-between">
          <div>
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="w-[96px] h-10 bg-semi-dark-navy text-silver flex justify-center items-center gap-[9px] shadow-custom-turn rounded-md p-4">
            <h3 className="uppercase font-bold">X</h3>
            <h3 className="uppercase text-sm font-bold">Turn</h3>
          </div>
        </div>
        {/* Game Board */}
        <div className="w-full flex flex-col justify-center items-center   ">
          {board.map((row, r) => (
            <div className="flex gap-5" key={r}>
              {row.map((cell, c) => (
                <div
                  key={c}
                  className="w-24 h-24 bg-semi-dark-navy shadow-custom-button mt-5 text-white text-[20px] rounded-[10px] inline-flex justify-center items-center "
                  onClick={() => handleClick(r, c)}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
