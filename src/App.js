import logo from "./images/images.jpeg";
import "./App.css";
import Player from "./components/Players";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tic-Tac-Toe</h1>
        </header>

        <div className="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </div>
      </div>
    </div>
  );
}

export default App;
