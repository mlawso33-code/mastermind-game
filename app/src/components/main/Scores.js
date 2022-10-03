import { useState, useEffect } from "react";
import axios from "axios";

//**** need to change to axios request laters ****

const Scores = ({ userId, scores }) => {
  const listScores = scores.map((item) => (
    <li style={{listStyleType:"none", color:"lightgreen", marginTop:"0.5em"}}key={item.toString()}>{item}</li>
  ));

  //const [scores, setScores] = useState([]);
  // function fetchScores(useriId) {
  //   axios
  //     .get(`/mastermind?id=${userId}&scores`)
  //     .then((res) => setScores(res.data.results));
  // }

  // useEffect(() => fetchScores(), []);

  return (
  <div style={{marginTop:"15%", display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
    <h1>Scores</h1>
    <p style={{fontSize:"small", textAlign:"center"}}>Based on # of attempts to beat the Master Mind</p>
    <ul>{listScores}</ul>
  </div>
  );
};

export default Scores;
