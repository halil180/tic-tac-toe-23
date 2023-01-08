import { useEffect, useState } from "react";
import Board from "./components/Board";
import MainMenu from "./pages/MainMenu";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const deletePlayers = () => {
    setGameStarted(false);
  };

  const startGame = (p1, p2) => {
    localStorage.setItem(
      "players",
      JSON.stringify([
        { points: 0, name: p1, id: "x" },
        { points: 0, name: p2, id: "o" },
      ])
    );
    setGameStarted(true);
  };

  useEffect(() => {
    localStorage.getItem("players")
      ? setGameStarted(true)
      : setGameStarted(false);
  }, []);

  return (
    <div>
      {gameStarted ? (
        <Board deletePlayers={deletePlayers} />
      ) : (
        <MainMenu startGame={startGame} />
      )}
    </div>
  );
};
export default App;
