import {useState} from "react";
import Scores from './Scores.js'

const Feedback = ({
  correctMatches,
  correctNums,
  wrong,
  //click,
  winner,
  attempts,
  restart,
  history,
}) => {
  const [scores, setScores] = useState([]);
  const listHistory = history.map((item) => (
    <li key={item.toString()}>{item}</li>
  ));

  function handleRestart() {
    setScores(prevScores => [...prevScores, attempts])
    window.location.reload(true);
  }
  return (
    <section>
      {!winner ? (
        <div className="feedbackModal">
          <div className="feedbackmodalContent">
            <p>
              Attempts:{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "large",
                  fontWeight: "bolder",
                }}
              >
                {attempts}
              </span>
            </p>
            <p>
              Number of correct matches:{" "}
              <span
                style={{
                  color: "yellow",
                  fontSize: "large",
                  fontWeight: "bolder",
                }}
              >
                {correctMatches}
              </span>
            </p>
            <p>
              Numbers found:{" "}
              <span
                style={{
                  color: "#0077b5",
                  fontSize: "large",
                  fontWeight: "bolder",
                }}
              >
                {correctNums}
              </span>
            </p>
          </div>
        </div>
      ) : null}
      {winner ? (
        <div>
          <p>YOU WON!! WINNER WINNER CHICKEN DINNER!!</p>
        </div>
      ) : attempts === 10 ? (
        <div>
          <p>Hehehehe You Could Not Defeat Me!!</p>
        </div>
      ) : null}
      {wrong && !winner ? (
        <div>
          <p>Wrong!</p>
        </div>
      ) : null}
      {restart || attempts === 10 ? (
        <button onClick={() => handleRestart()}>Restart Game</button>
      ) : null}
      <h3 style={{ color: "green", textDecoration: "underline" }}>
        Your Guess History
      </h3>
      {history.length > 0 ? (
        <ul style={{ color: "#0077b5" }}>{listHistory}</ul>
      ) : null}
      <Scores scores={scores}/>
    </section>
  );
};

export default Feedback;
