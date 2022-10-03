import { useState, useEffect } from "react";
//import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen.js";
import PlayButton from "./buttons/PlayButton.js";
import FirstTimeButton from "./buttons/FirstTimeButton.js";
import FirstTime from "./FirstTime.js";
import NumGenerator from "./NumGenerator.js";
import Feedback from "./Feedback.js";
import Scores from './Scores.js';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [showPlay, setPlay] = useState(true);
  const [showFirst, setFirstTime] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [showFeedBack, setFeedBack] = useState(false);
  const [winner, setWinner] = useState(false);
  const [restart, setRestart] = useState(false);
  const [restartNums, setRestartNums] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correctNums, setCorrectNums] = useState(0);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [history, setHistory] = useState([]);




  function playClicked() {
    setPlay(!showPlay);
    handleFeedBack();
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
    setTimeout(() => setWrong(!wrong), 3000);
  }
  function handleFeedBack() {
    setFeedBack(!showFeedBack);
  }
  function handleWinner() {
    setWinner(!winner);
    handleRestart();
  }
  function handleRestart() {
    setRestart(!restart);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <>
      {!loading ? (
        <div>
          <h1>Master <img style={{maxHeight:"3em", maxWidth:"3em"}}src="./mastermind.svg" alt="Master Mind logo"/> Mind</h1>
          {showPlay && !showFirst ? (
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
              restartNums={restartNums}
            />
          )}
          {showFeedBack ? (
          <Feedback
            correctMatches={correctMatches}
            correctNums={correctNums}
            wrong={wrong}
            winner={winner}
            attempts={attempts}
            restart={restart}
            history={history}
            resetAttempt={setAttempts}
            resetHist={setHistory}
            resetNums={setRestartNums}
          /> )  : null}
          <br />
          {!showFeedBack ? (<FirstTimeButton id="firstTimeButton" clickFirst={firstClicked} />) : null }
          {showFirst ? <FirstTime clickGotIt={handleFirstTime} /> : null}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Main;
