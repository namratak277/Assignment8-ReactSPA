import "./css/ResultDisplay.css";

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  const messages = {
    win: "You Win!",
    lose: "You Lose!",
    tie: "It's a Tie!"
  };

  return <h2 className="result">{messages[result]}</h2>;
};

export default ResultDisplay;
