import {useState, useEffect} from 'react';
import axios from 'axios';


const api = process.env.REACT_APP_RANDOM_API_KEY;

const NumGenerator = ({userId}) => {
  const [randomNums, setRandomNums] = useState([])
  const listOfNums = randomNums.map((num) =>
  <li key={num.toString()}>{num}</li>)

  function fetchNums(){
    axios
    .post("https://api.random.org/json-rpc/4/invoke", {
      "jsonrpc": "2.0",
      "method": "generateIntegers",
      "params": {
          "apiKey": api,
          "n": 10,
          "min": 1,
          "max": 10,
    "replacement": false
      },
      "id": 1
  })
    .then(res => setRandomNums(res.data.result.random.data))
  }

  useEffect(() => {
    fetchNums()
  }, []);

  return(
    <div>
      <ul>{listOfNums}</ul>>
    </div>
  )
};

export default NumGenerator;