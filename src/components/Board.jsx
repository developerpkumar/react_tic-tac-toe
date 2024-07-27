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

  const [ties, setTies] = useState(0);

  const [isTie, setIsTie] = useState(false);

  const [count, setCount] = useState(0);

  let updatedBoard = [...newBoard];

  let win = false;

  if (!isTie && !winner) {
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
    if (count === 9 && !win) {
      setIsTie(true);
      setCount(0);
    }
  }

  if (win) {
    setWinner(() => {
      if (activePlayer === player1.symbol) {
        return player2.name;
      } else {
        return player1.name;
      }
    });
  }

  const handlePlayAgain = () => {
    setNewBoard(initialBoard);
    setActivePlayer(player1.symbol);
    setCount(0);

    if (winner === player1.name) {
      setPlayers((prev) => {
        return {
          ...prev,
          player1: { ...prev.player1, wins: prev.player1.wins + 1 },
        };
      });
    } else if (winner === player2.name) {
      setPlayers((prev) => {
        return {
          ...prev,
          player2: { ...prev.player2, wins: prev.player2.wins + 1 },
        };
      });
    }

    if (!winner) setTies((prev) => prev + 1);

    setWinner(null);

    setIsTie(false);
  };

  const playerInfo = (
    <div className="player-card">
      <div className="center">
        <p>Wins: {player1.wins}</p>
        <p className="player-name">
          <span className="turn-btn red">X</span>
          {player1.name}
        </p>
      </div>
      <p className="center">Ties: {ties}</p>
      <div className="center">
        <p>Wins: {player2.wins}</p>
        <p className="player-name">
          <span className="turn-btn green">O</span>
          {player2.name}
        </p>
      </div>
    </div>
  );

  const winnerCard = (
    <p className="center border">
      <span
        className={winner === player1.name ? "red turn-btn" : "green turn-btn"}
      >
        {winner === player1.name ? "X" : "O"}
      </span>
      {winner} wins
      <span onClick={handlePlayAgain} className="play-again">
        Play Again!
      </span>
    </p>
  );

  const tieGameCard = (
    <p className="center border">
      Game Ties
      <span className="play-again" onClick={handlePlayAgain}>
        Play Again!
      </span>
    </p>
  );

  const turnCard = (
    <p className="center">
      <span className={activePlayer == "X" ? "red turn-btn" : "green turn-btn"}>
        {activePlayer}
      </span>
      Yours turn
    </p>
  );

  return (
    <div>
      <div className="game-info">
        {winner && winnerCard}
        {isTie && tieGameCard}
        {!isTie && !winner && turnCard}
      </div>

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

      <div>{playerInfo}</div>
    </div>
  );
};
export default Board;
