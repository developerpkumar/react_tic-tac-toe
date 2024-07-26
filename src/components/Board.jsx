import React from "react";
import Square from "./Square";
import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Board = ({ players }) => {
  const { player1, player2 } = players;

  const [newBoard, setNewBoard] = useState(initialBoard);

  const [activePlayer, setActivePlayer] = useState(player1.symbol);

  console.log(activePlayer);

  const playerInfo = (
    <div className="player-card">
      <div>
        <p>Wins: {player1.wins}</p>
        <p>{player1.name}</p>
      </div>
      <p>Ties: 0</p>
      <div>
        <p>Wins: {player1.wins}</p>
        <p>{player1.name}</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="board-square">
        {newBoard.map((row, rIndex) => {
          return (
            <div className="row" key={rIndex}>
              {row.map((col, cIndex) => {
                return (
                  <Square
                    key={cIndex}
                    symbol={activePlayer}
                    setActivePlayer={setActivePlayer}
                  ></Square>
                );
              })}
            </div>
          );
        })}
      </div>
      {playerInfo}
    </div>
  );
};
export default Board;
