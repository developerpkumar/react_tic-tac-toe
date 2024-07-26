import React from "react";
import { useState } from "react";

function Players({ setPlayers, setGame }) {
  const [player1, setPlayer1] = useState("Player1");
  const [player2, setPlayer2] = useState("Player2");

  const handleClick = (player1, player2) => {
    setPlayers({
      player1: { name: player1, symbol: "X", wins: 0 },
      player2: { name: player2, symbol: "O", wins: 0 },
    });
    setGame((prev) => !prev);
  };

  return (
    <div className="players">
      <p>Enter the Name of Players</p>
      <div>
        <input
          className="player-input"
          type="text"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          className="player-input"
          type="text"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
      </div>

      <div className="start-btn-container">
        <button
          className="start-btn"
          onClick={() => handleClick(player1, player2)}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Players;
