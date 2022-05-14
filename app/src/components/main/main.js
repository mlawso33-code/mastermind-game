import { useState, useEffect } from "react";
//import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen.js";
import PlayButton from "./buttons/PlayButton.js";
import FirstTimeButton from "./buttons/FirstTimeButton.js";
import FirstTime from "./FirstTime.js";
import NumGenerator from "./NumGenerator.js";
import Feedback from "./Feedback.js";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [showPlay, setPlay] = useState(true);
  const [showFirst, setFirstTime] = useState(false);
  const [wrong, setWrong] = useState(false);
  //const [showFeedBack, setFeedBack] = useState(false);
  const [winner, setWinner] = useState(false)
  const [restart, setRestart] = useState(false)
  const [attempts, setAttempts] = useState(0);
  const [correctNums, setCorrectNums] = useState(0);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [history, setHistory] = useState([]);

  const listHistory = history.map((item) => (
    <li key={item.toString()}>{item}</li>
  ));

  function playClicked() {
    setPlay(!showPlay);
  }
  function firstClicked() {
    setFirstTime(!showFirst);
  }
  function handleFirstTime() {
    setFirstTime(!showFirst);
  }
  function increaseAttempts() {
    setAttempts(attempts + 1);
  }
  function increaseCorrectNums() {
    setCorrectNums(correctNums + 1);
  }
  function increaseCorrecMatches() {
    setCorrectMatches(correctMatches + 1);
  }
  function wrongGuesses() {
    setWrong(!wrong);
    setTimeout(() => setWrong(!wrong), 2000);
  }
  // function handleFeedBack() {
  //   setFeedBack(!showFeedBack);
  // }
  function handleWinner() {
    setWinner(!winner);
    handleRestart();
  }
  function handleRestart(){
    setRestart(!restart);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <>
      {!loading ? (
        <div>
          <h1>Master Mind</h1>
          {showPlay ? (
            <PlayButton clickPlay={playClicked} />
          ) : (
            <NumGenerator
              incCount={increaseAttempts}
              incCorrNums={increaseCorrectNums}
              incCorrMatches={increaseCorrecMatches}
              wrong={wrongGuesses}
              history={setHistory}
              //feedback={handleFeedBack}
              winner={handleWinner}
            />
          )}
          <p>Attempts: <span style={{color:"red", fontSize:"large", fontWeight:"bolder"}}>{attempts}</span></p>
          {/* {showFeedBack ? (
            <Feedback
            correctMatches={correctMatches}
            correctNums={correctNums}
            wrong={wrong}
            click={handleFeedBack}
            />
          ) : null} */}
          <Feedback
            correctMatches={correctMatches}
            correctNums={correctNums}
            wrong={wrong}
            winner={winner}
            attempts={attempts}
            restart={restart}
          />
          <br/>
          <h3 style={{color:"green", textDecoration:"underline"}}>Your Guess History</h3>
          {history.length > 0 ? <ul style={{color: "#0077b5"}}>{listHistory}</ul> : null}
          <br />
          <FirstTimeButton id="firstTimeButton" clickFirst={firstClicked} />
          {showFirst ? <FirstTime clickGotIt={handleFirstTime} /> : null}
        </div>
      ) : (
        <LoadingScreen />
        )}
    </>
  );
};

export default Main;
