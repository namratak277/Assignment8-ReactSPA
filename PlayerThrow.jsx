import "./PlayerThrow.css";

const PlayerThrow = ({ setPlayerChoice, selected }) => {
  const options = [
    { name: "rock", img: "/images/rock.PNG" },
    { name: "paper", img: "/images/paper.PNG" },
    { name: "scissors", img: "/images/scissors.PNG" }
  ];

  return (
    <div className="player-throw">
      <h2>You</h2>
      <div className="throw-options">
        {options.map((o) => (
          <img
            key={o.name}
            src={o.img}
            alt={o.name}
            className={selected === o.name ? "selected" : ""}
            onClick={() => setPlayerChoice(o.name)}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setPlayerChoice(o.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerThrow;
