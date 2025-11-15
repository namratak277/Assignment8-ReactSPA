import "./ScoreBoard.css";

const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreboard">
      <p>Wins: {score.wins}</p>
      <p>Losses: {score.losses}</p>
      <p>Ties: {score.ties}</p>
    </div>
  );
};

export default ScoreBoard;