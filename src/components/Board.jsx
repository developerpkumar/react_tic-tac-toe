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

  const [ties, setTies] = useState(false);

  const [count, setCount] = useState(0);

  let updatedBoard = [...newBoard];

  let win = false;

  if (ties === false && !winner) {
    console.log("Check", count);
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
  }

  if (win) {
    setWinner(() => {
      if (activePlayer === player1.symbol) return player2.name;
      else return player1.name;
    });

    if (count === 9 && !winner) {
      setTies((pre) => true);
    }
  }

  const handlePlayAgain = () => {
    setNewBoard(initialBoard);
    setActivePlayer(player1.symbol);
    setCount(0);
    setWinner(null);
    setTies((pre) => false);
  };

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

  const winnerCard = (
    <div>
      <p>{winner} wins</p>
      <button onClick={handlePlayAgain}>Play Again!</button>
    </div>
  );

  const tieGameCard = (
    <div>
      <p>Game Ties</p>
      <button onClick={handlePlayAgain}>Play Again!</button>
    </div>
  );

  return (
    <div>
      {winner && winnerCard}
      {ties && !winner && tieGameCard}
      {
        <p>
          <span
            className={activePlayer == "X" ? "red turn-btn" : "green turn-btn"}
          >
            {activePlayer}
          </span>{" "}
          Yours turn
        </p>
      }
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
                    setCount={setCount}
                    winner={winner}
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
