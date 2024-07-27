import React from "react";
import Square from "./Square";
import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Board = ({ players, setPlayers }) => {
  const { player1, player2 } = players;

  const [newBoard, setNewBoard] = useState(initialBoard);

  const [activePlayer, setActivePlayer] = useState(player1.symbol);

  const [winner, setWinner] = useState(null);

  const playerInfo = (
    <div className="player-card">
      <div>
        <p>Wins: {player1.wins}</p>
        <p>{player1.name}</p>
      </div>
      <p>Ties: 0</p>
      <div>
        <p>Wins: {player2.wins}</p>
        <p>{player2.name}</p>
      </div>
    </div>
  );

  let updatedBoard = [...newBoard];

  let win = false;

  if (
    (updatedBoard[0][0] !== null &&
      updatedBoard[0][0] === updatedBoard[0][1] &&
      updatedBoard[0][1] === updatedBoard[0][2]) ||
    (updatedBoard[1][0] !== null &&
      updatedBoard[1][0] === updatedBoard[1][1] &&
      updatedBoard[1][1] === updatedBoard[1][2]) ||
    (updatedBoard[2][0] !== null &&
      updatedBoard[2][0] === updatedBoard[2][1] &&
      updatedBoard[2][1] === updatedBoard[2][2]) ||
    (updatedBoard[0][0] !== null &&
      updatedBoard[0][0] === updatedBoard[1][0] &&
      updatedBoard[1][0] === updatedBoard[2][0]) ||
    (updatedBoard[0][1] !== null &&
      updatedBoard[0][1] === updatedBoard[1][1] &&
      updatedBoard[1][1] === updatedBoard[2][1]) ||
    (updatedBoard[0][2] !== null &&
      updatedBoard[0][2] === updatedBoard[1][2] &&
      updatedBoard[1][2] === updatedBoard[2][2]) ||
    (updatedBoard[0][0] !== null &&
      updatedBoard[0][0] === updatedBoard[1][1] &&
      updatedBoard[1][1] === updatedBoard[2][2]) ||
    (updatedBoard[0][2] !== null &&
      updatedBoard[0][2] === updatedBoard[1][1] &&
      updatedBoard[1][1] === updatedBoard[2][0])
  ) {
    win = true;
  }

  if (win) {
    setWinner(() => {
      if (activePlayer === player1.symbol) return player2.name;
      else return player1.name;
    });
    setNewBoard(initialBoard);
  }

  return (
    <div>
      {winner && <p>{winner} wins</p>}
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
                    setNewBoard={setNewBoard}
                    newBoard={newBoard}
                    rIndex={rIndex}
                    cIndex={cIndex}
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
