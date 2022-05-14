//import "./index.css";
import { useState, useEffect } from "react";
//import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen.js";
import PlayButton from "./PlayButton.js";
import NumGenerator from "./NumGenerator.js";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [showPlay, setPlay] = useState(true);

  function playClick() {
    setPlay(!showPlay);
    console.log(showPlay)
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <>
      {loading === false ? (
        <div>
          <h1>Master Mind</h1>
          {showPlay ? (<PlayButton onClick={playClick} />) : (<NumGenerator />)}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Main;
