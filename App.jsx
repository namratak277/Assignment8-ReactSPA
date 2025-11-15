import { useState, useEffect } from "react";
import PlayerThrow from "./PlayerThrow";
import ComputerThrow from "./ComputerThrow";
import ResultDisplay from "./ResultDisplay";
import ScoreBoard from "./ScoreBoard";
import "./App.css";

const options = ["rock", "paper", "scissors"];

export default function App() {
  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");
  const [status, setStatus] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  useEffect(() => {
    if (!player) return;

    setSpinning(true);

    let idx = 0;
    const shuffle = setInterval(() => {
      setComputer(options[idx % 3]);
      idx++;
    }, 500);

    setTimeout(() => {
      clearInterval(shuffle);
      const finalPick = options[Math.floor(Math.random() * 3)];
      setComputer(finalPick);
      setSpinning(false);

      const result = checkWinner(player, finalPick);
      setStatus(result);

      setScore((prev) => ({
        wins: prev.wins + (result === "win" ? 1 : 0),
        losses: prev.losses + (result === "lose" ? 1 : 0),
        ties: prev.ties + (result === "tie" ? 1 : 0),
      }));

      // Reset player selection after round completes
      setTimeout(() => {
        setPlayer("");
      }, 1500);
    }, 2500);
  }, [player]);

  function checkWinner(p, c) {
    if (p === c) return "tie";
    if (
      (p === "rock" && c === "scissors") ||
      (p === "paper" && c === "rock") ||
      (p === "scissors" && c === "paper")
    ) {
      return "win";
    }
    return "lose";
  }

  function resetAll() {
    setPlayer("");
    setComputer("");
    setStatus("");
    setScore({ wins: 0, losses: 0, ties: 0 });
  }

  return (
    <div className="wrapper">
      <h1>Rock Paper Scissors</h1>

      <ScoreBoard score={score} />

      <button className="reset-button" onClick={resetAll}>
        Reset Game
      </button>

      <div className="board">
        <PlayerThrow selected={player} setPlayerChoice={setPlayer} />
        <ComputerThrow choice={computer} isShuffling={spinning} />
      </div>

      <ResultDisplay result={status} />
    </div>
  );
}
