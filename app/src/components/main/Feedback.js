import React from "react";

const Feedback = ({
  correctMatches,
  correctNums,
  wrong,
  //click,
  winner,
  attempts,
  restart,
}) => {
  function handleRestart() {
    window.location.reload(true);
  }
  return (
    <>
      {!winner ? (
        <div className="feedbackModal">
          <div className="feedbackmodalContent">
            <p>Number of correct matches: <span style={{color:"yellow", fontSize:"large", fontWeight:"bolder"}}>{correctMatches}</span></p>
            <p>Numbers found: <span style={{color:"#0077b5", fontSize:"large", fontWeight:"bolder"}}>{correctNums}</span></p>
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
      ): null}
    </>
  );
};

export default Feedback;
