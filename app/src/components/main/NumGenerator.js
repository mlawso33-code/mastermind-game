import '../../index.css'
import { useState, useEffect } from "react";
import axios from "axios";

const api = process.env.REACT_APP_RANDOM_API_KEY;

const NumGenerator = ({
  incCount,
  incCorrNums,
  incCorrMatches,
  wrong,
  history,
  //feedback,
  winner,
  restartNums,
}) => {
  const [randomNums, setRandomNums] = useState([]);
  const [userNumGuess1, setNumGuess1] = useState(0);
  const [userNumGuess2, setNumGuess2] = useState(0);
  const [userNumGuess3, setNumGuess3] = useState(0);
  const [userNumGuess4, setNumGuess4] = useState(0);
  // const [userGuess, setUserGuess] = useState({
  //   '0':0,
  //   '1':0,
  //   '2':0,
  //   '3':0
  // })

  function fetchNums() {
    axios
      .post("https://api.random.org/json-rpc/4/invoke", {
        jsonrpc: "2.0",
        method: "generateIntegers",
        params: {
          apiKey: api,
          n: 4,
          min: 0,
          max: 8,
          replacement: false,
        },
        id: 1,
      })
      .then((res) => setRandomNums(res.data.result.random.data)).then(restartNums = false);
  }

  function checkNums() {
    const playerGuess = [
      Number(userNumGuess1),
      Number(userNumGuess2),
      Number(userNumGuess3),
      Number(userNumGuess4),
    ];
    const allMatch = JSON.stringify(randomNums) === JSON.stringify(playerGuess);
    console.log('player guess:::: ' + playerGuess)
    console.log('mastermind:::: ' + randomNums)
    if (!allMatch) {
      incCount();
      for (var i = 0; i < playerGuess.length; i++) {
        checkMatches(playerGuess, randomNums);
      }
    } else {
      winner();
    }
    history((prevHistory) => [...prevHistory, playerGuess]);
    //feedback()
  }

  function checkMatches(player, mastermind) {
    for (var i = 0; i < player.length; i++) {
      for (var j = 0; j < mastermind.length; j++) {
        const indexMatch = j === i;
        const numMatch = player[i] === mastermind[j];
        if (indexMatch && numMatch) {
          incCorrMatches();
          incCorrNums();
        } else if (!indexMatch && !numMatch) {
          let findNum = mastermind.indexOf(player[i]) > -1;
          if (findNum) {
            incCorrNums();
          } else {
            wrong();
          }
        }
      }
    }
  }

  useEffect(() => {
    fetchNums();
  }, [restartNums]);

  return (
    <div>
      <p>What numbers do you think I have?</p>
      <div className="guessInputs">

      <input
        value={userNumGuess1}
        onChange={(e) => setNumGuess1(e.target.value)}
        style={{color:"lightgreen", backgroundColor:"black", maxWidth:"4em", textAlign:"center"}}
      ></input>
      <input
        value={userNumGuess2}
        onChange={(e) => setNumGuess2(e.target.value)}
        style={{color:"lightgreen", backgroundColor:"black", maxWidth:"4em", textAlign:"center"}}
      ></input>
      <input
        value={userNumGuess3}
        onChange={(e) => setNumGuess3(e.target.value)}
        style={{color:"lightgreen", backgroundColor:"black", maxWidth:"4em", textAlign:"center"}}
      ></input>
      <input
        value={userNumGuess4}
        onChange={(e) => setNumGuess4(e.target.value)}
        style={{color:"lightgreen", backgroundColor:"black", maxWidth:"4em", textAlign:"center"}}
      ></input>
      </div>
      <br />
      <div style={{display: "flex"}}>
      <button style={{marginLeft: "auto", marginRight:"auto", color:"red", backgroundColor:"black", fontSize:"large"}} onClick={() => checkNums()}>Guess</button>

      </div>
    </div>
  );
};

export default NumGenerator;
