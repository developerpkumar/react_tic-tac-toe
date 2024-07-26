import { useState } from "react";
import "./App.css";
import Players from "./components/Players";
import Board from "./components/Board";

function App() {
  const [game, setGame] = useState(false);

  const [players, setPlayers] = useState({});

  const playerName = (
    <Players players={players} setGame={setGame} setPlayers={setPlayers} />
  );

  return (
    <div className="app">
      {!game && playerName}
      {game && <Board players={players} />}
    </div>
  );
}

export default App;
