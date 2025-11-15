import "./ComputerThrow.css";

const ComputerThrow = ({ choice, isShuffling }) => {
  const images = {
    rock: "/images/rock.PNG",
    paper: "/images/paper.PNG",
    scissors: "/images/scissors.PNG",
    question: "/images/question-mark.PNG"
  };

  return (
    <div className="computer-throw">
      <h2>Computer</h2>
      <img
        src={choice ? images[choice] : images["question"]}
        alt="computer choice"
        className={isShuffling ? "shuffling" : ""}
      />
    </div>
  );
};

export default ComputerThrow;
