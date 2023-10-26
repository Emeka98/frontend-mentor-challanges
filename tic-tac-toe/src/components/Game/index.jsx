import React, { useEffect, useState } from "react";
import { useData } from "../../context/dataContext";
import IconO from "./Images/IconO";
import IconX from "./Images/IconX";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Game() {
  const { generateBoard, currUser, setCurrUser, isCpu, playerOneMark } =
    useData();
  const [board, setBoard] = useState(generateBoard(3));
  const [isOpen, setIsOpen] = useState(false);
  const [isRestart, setIsRestart] = useState(false);

  console.log("Is Cpu", isCpu);

  const handleClick = (r, c) => {
    !board[r][c] && (board[r][c] = currUser === "x" ? <IconX /> : <IconO />);
    setBoard([...board]);
    setCurrUser(currUser === "x" ? "o" : "x");
    if (checkForWin(board)) {
      console.log(currUser + "wins");
      console.log(board);
    }

    if (checkTied(board)) {
      console.log("Oyun Berabere");
    }
  };

  const autoMove = () => {
    const r = Math.floor(Math.random() * board.length);
    const c = Math.floor(Math.random() * board.length);

    setTimeout(() => {
      if (!board[r][c] && !checkForWin(board)) {
        board[r][c] = currUser === "x" ? <IconX /> : <IconO />;
        setBoard([...board]);
        setCurrUser(currUser === "x" ? "o" : "x");
      } else {
        autoMove();
      }
    }, 500);
  };

  const checkTied = (board) => {
    if (!checkForWin(board)) {
      for (let row of board) {
        for (let cell of row) {
          if (cell === undefined) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
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

  const restartGame = () => {
    const newBoard = generateBoard(3);
    setBoard(newBoard);
    setCurrUser("x");
  };

  useEffect(() => {
    if (
      (isCpu && currUser === "x" && playerOneMark === "o") ||
      (isCpu && currUser === "o" && playerOneMark === "x")
    ) {
      autoMove();
    }
    checkForWin(board);
    checkTied(board);
  });

  useEffect(() => {
    if (checkTied(board) || checkForWin(board)) {
      setTimeout(() => {
        restartGame();
      }, 5000000);
    }
  });

  useEffect(() => {
    if (checkForWin(board)) {
      console.log(currUser + " wins");
      console.log(board);
      setIsOpen(true);
    }
  }, [board, currUser]);

  useEffect(() => {
    if (checkTied(board)) {
      console.log("Oyun Berabere");
      setIsOpen(true);
    }
  }, [board]);

  const handleClose = () => {
    setIsOpen(false);
    setIsRestart(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsRestart(true);
  };

  const handleRestart = () => {
    handleClose();
    restartGame();
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark-navy relative">
      {/* ConTainer */}
      <div className="w-full h-full max-w-[490px] flex flex-col justify-center p-6 ">
        {/* Top Bar */}
        <div className="flex flex-row mb-16 justify-between">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-[96px] h-10 bg-semi-dark-navy text-silver flex justify-center items-center gap-[9px] shadow-custom-turn rounded-md p-4">
            {currUser === "x" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z"
                  fill="#A8BFC9"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM5.92593 10C5.92593 7.74995 7.74995 5.92593 10 5.92593C12.25 5.92593 14.0741 7.74995 14.0741 10C14.0741 12.25 12.25 14.0741 10 14.0741C7.74995 14.0741 5.92593 12.25 5.92593 10Z"
                  fill="#A8BFC9"
                />
              </svg>
            )}
            <h3 className="uppercase text-sm font-bold">Turn</h3>
          </div>
          {/* Reset Button */}
          <button onClick={handleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g filter="url(#filter0_i_0_729)">
                <rect width="40" height="40" rx="5" fill="#A8BFC9" />
              </g>
              <path
                d="M27.3262 12.3076H25.8799C25.6778 12.3074 25.5137 12.4712 25.5135 12.6735C25.5135 12.6794 25.5136 12.6854 25.5139 12.6913L25.6359 15.2176C24.2 13.5244 22.0921 12.5494 19.8729 12.5518C15.704 12.5518 12.3046 15.9563 12.3076 20.1278C12.3107 24.3061 15.6967 27.6922 19.8729 27.6922C21.7462 27.6949 23.5534 26.9994 24.9422 25.7414C25.0928 25.6064 25.1057 25.3749 24.9708 25.2241C24.9663 25.2191 24.9616 25.2141 24.9568 25.2093L23.9197 24.1715C23.7835 24.0352 23.565 24.0279 23.42 24.1547C21.1938 26.1146 17.8014 25.8975 15.8427 23.6699C13.8841 21.4422 14.101 18.0475 16.3272 16.0876C18.5534 14.1277 21.9458 14.3448 23.9045 16.5724C24.058 16.747 24.2 16.9314 24.3297 17.1244L21.2325 16.9758C21.0306 16.9662 20.8591 17.1222 20.8495 17.3243C20.8492 17.3302 20.849 17.3362 20.8491 17.3421V18.7893C20.8491 18.9916 21.0129 19.1556 21.2151 19.1556H27.3262C27.5284 19.1556 27.6923 18.9916 27.6923 18.7893V12.6739C27.6922 12.4716 27.5283 12.3076 27.3262 12.3076Z"
                fill="#1F3641"
              />
              <defs>
                <filter
                  id="filter0_i_0_729"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-4" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.418727 0 0 0 0 0.538482 0 0 0 0 0.590549 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_0_729"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
        {/* Game Board */}
        <div className="w-full flex flex-col justify-center items-center   ">
          {board.map((row, r) => (
            <div className="flex gap-5" key={r}>
              {row.map((cell, c) => (
                <div
                  key={c}
                  className="w-24 h-24 md:w-[140px] md:h-[140px] bg-semi-dark-navy shadow-custom-button mt-5 text-white text-[20px] rounded-[10px] inline-flex justify-center items-center "
                  onClick={() => handleClick(r, c)}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Score */}
        <div className="flex  gap-5 mt-5">
          <div className="flex-1 flex justify-center items-center h-16 bg-light-blue rounded-[10px]">
            <div className="h-full w-full  flex flex-col items-center justify-center ">
              <h3 className="custom-text text-dark-navy uppercase text-[12px] ">
                X(
                {isCpu && playerOneMark === "x"
                  ? "YOU"
                  : "CPU" || (!isCpu && "P2")}
                )
              </h3>
              <h6 className="heading-s text-dark-navy uppercase">14</h6>
            </div>
          </div>
          <div className="flex-1 h-16 bg-silver rounded-[10px] ">
            <div className="h-full w-full  flex flex-col items-center justify-center ">
              <h3 className="custom-text text-dark-navy uppercase text-[12px]">
                Ties
              </h3>
              <h6 className="heading-s text-dark-navy uppercase">14</h6>
            </div>
          </div>
          <div className="flex-1 h-16 bg-light-yellow rounded-[10px] ">
            <div className="h-full w-full flex flex-col items-center justify-center ">
              <h3 className="custom-text text-dark-navy uppercase text-[12px]">
                O(
                {isCpu && playerOneMark === "o"
                  ? "YOU"
                  : "CPU" || (!isCpu && "P1")}
                )
              </h3>
              <h6 className="heading-s text-dark-navy uppercase">14</h6>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black opacity-50"></div>}
        {isOpen && (
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[228px] md:h-[266px] bg-semi-dark-navy ">
            {isRestart && (
              <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <h2 className="heading-m">Restart Game?</h2>
                <div className="flex gap-4 items-center justify-center">
                  <button
                    onClick={handleClose}
                    className="w-[139px] h-[52px] flex-shrink-0 rounded-[10px] bg-silver hover:bg-silver-hover shadow-custom-cancel text-dark-navy text-[16px] tracking-[1px] font-bold uppercase "
                  >
                    No,Cancel
                  </button>
                  <button
                    onClick={handleRestart}
                    className="w-[151px] h-[52px] flex-shrink-0 rounded-[10px] bg-light-yellow hover:bg-light-yellow-hover shadow-custom-restart text-dark-navy text-[16px] tracking-[1px] font-bold uppercase "
                  >
                    Yes, Restart
                  </button>
                </div>
              </div>
            )}
            {checkTied(board) && (
              <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <h2 className="heading-m">Round Tied</h2>
                <div className="flex gap-4 items-center justify-center">
                  <Link
                    to={"/"}
                    className="w-[139px] h-[52px] flex-shrink-0 inline-flex justify-center items-center rounded-[10px] bg-silver hover:bg-silver-hover shadow-custom-cancel text-dark-navy text-[16px] tracking-[1px] font-bold uppercase "
                  >
                    Quit
                  </Link>
                  <button
                    onClick={handleRestart}
                    className="w-[151px] h-[52px] flex-shrink-0 rounded-[10px] bg-light-yellow hover:bg-light-yellow-hover shadow-custom-restart text-dark-navy text-[16px] tracking-[1px] font-bold uppercase "
                  >
                    Next Round
                  </button>
                </div>
              </div>
            )}

            {checkForWin(board) &&
              !checkTied(board) &&
              (isCpu ? (
                <div className="flex flex-col items-center justify-center gap-6">
                  {currUser !== playerOneMark ? (
                    <h3 className="custom-text uppercase font-bold mt-5">You Won!</h3>
                  ) : (
                    <h3 className="custom-text uppercase font-bold mt-5">Oh No,You lost...</h3>
                  )}
                  <div className="flex gap-6 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32ZM18.963 32C18.963 24.7998 24.7998 18.963 32 18.963C39.2002 18.963 45.037 24.7998 45.037 32C45.037 39.2002 39.2002 45.037 32 45.037C24.7998 45.037 18.963 39.2002 18.963 32Z"
                        fill="#F2B137"
                      />
                    </svg>
                    <h3 className="heading-m text-light-yellow">
                      Takes the round
                    </h3>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <Link
                      to={"/"}
                      className="w-[139px] h-[52px] flex-shrink-0 inline-flex justify-center items-center rounded-[10px] bg-silver hover:bg-silver-hover shadow-custom-cancel text-dark-navy text-[16px] tracking-[1px] font-bold uppercase "
                    >
                      Quit
                    </Link>
                    <button
                      onClick={handleRestart}
                      className="w-[151px] h-[52px] flex-shrink-0 rounded-[10px] bg-light-yellow hover:bg-light-yellow-hover shadow-custom-restart text-dark-navy text-[16px] tracking-[1px] font-bold uppercase "
                    >
                      Next Round
                    </button>
                  </div>
                </div>
              ) : (
                <div>Oyunu birisi kazandı</div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
