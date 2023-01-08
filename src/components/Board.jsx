import React, { useEffect, useState } from "react";
import Square from "./Square";
import { themeChange } from "theme-change";
import ThemePicker from "./ThemePicker";
import Swal from "sweetalert2";

function Board({ deletePlayers }) {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("players")) ?? []
  );
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState("Next player: x");

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "x";
      setStatus("Next player: 0");
    } else {
      nextSquares[i] = "o";
      setStatus("Next player: x");
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  /*Initialize under useEffect */
  useEffect(() => {
    themeChange(false);
    // console.log(players);
  }, []);

  useEffect(() => {
    handleWinner(players, calculateWinner(squares));
  }, [squares]);

  function handleWinner(players, id) {
    for (const player of players) {
      if (player.id === id) {
        player.points += 1;
        localStorage.setItem("players", JSON.stringify(players));
        setWinner(player.name);
        break;
      }
    }
  }

  const hasNoButtonsClickable = !squares.includes(null);

  function restartGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setStatus("next player x");
    setWinner(null);
  }

  function resetGame() {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reset the game!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        localStorage.clear("players");
        setPlayers([]);
        deletePlayers();
      }
    });
  }

  return (
    <div className=" flex justify-center h-screen w-screen items-center flex-col ">
      <ThemePicker />
      <div className="flex w-full justify-around   flex-row">
        {players.map((player, index) => (
          <p key={index} className="text-4xl">
            {player.name} ({player.id}): {player.points}
          </p>
        ))}
      </div>
      <div className="status text-3xl ">
        {winner ? <span>{winner} won!</span> : status}
      </div>
      <div className="grid grid-cols-3 ">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div>
        {winner || hasNoButtonsClickable ? (
          <button onClick={() => restartGame()} className="btn btn-success ">
            play again
          </button>
        ) : null}
        <button
          className="btn btn-outline btn-error"
          onClick={() => resetGame()}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Board;