import React, { useState } from "react";

function Square({ symbol, setActivePlayer }) {
  const [mark, setMark] = useState("");

  const handleClick = () => {
    setMark(symbol);
    if (symbol === "X") setActivePlayer("O");
    else setActivePlayer("X");
    console.log(symbol);
  };
  return (
    <button
      className={mark === "X" ? "col red" : "col green"}
      onClick={handleClick}
    >
      {mark}
    </button>
  );
}

export default Square;
