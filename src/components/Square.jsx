import React, { useState } from "react";

function Square({
  symbol,
  setActivePlayer,
  setNewBoard,
  newBoard,
  rIndex,
  cIndex,
  setCount,
  winner,
}) {
  const [mark, setMark] = useState("");

  const handleClick = () => {
    setMark(symbol);
    setCount((count) => count + 1);
    setNewBoard((prev) => {
      const newBoard = [[...prev[0]], [...prev[1]], [...prev[2]]];
      newBoard[rIndex][cIndex] = symbol;
      return newBoard;
    });

    if (symbol === "X") setActivePlayer("O");
    else setActivePlayer("X");
  };
  return (
    <button
      className={mark === "X" ? "col red" : "col green"}
      onClick={handleClick}
      disabled={newBoard[rIndex][cIndex] !== null || winner}
    >
      {newBoard[rIndex][cIndex]}
    </button>
  );
}

export default Square;
