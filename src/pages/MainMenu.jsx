import React, { useState } from "react";

function MainMenu({ startGame }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-base-200 rounded-lg p-8">
        <h1 className="text-2xl  text-center mb-4">
          Tic Tac Toe <strong>23</strong>
        </h1>
        <div className="mb-4">
          <label className="block font-bold mb-2 " htmlFor="player1">
            Player 1
          </label>

          <input
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="input input-bordered input-primary w-full max-w-xs"
            maxLength="20"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 " htmlFor="player2">
            Player 2
          </label>
          <input
            value={player2}
            maxLength="20"
            onChange={(e) => setPlayer2(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>

        <button
          className="btn  btn-accent"
          onClick={() => startGame(player1, player2)}
          disabled={!player1 || !player2}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
