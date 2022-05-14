import React from 'react'

const FirstTime = ({clickGotIt}) => {
  return (
    <div>
      <h2>How to beat the Master Mind</h2>
      <h3>Victory Conditions:</h3>
      <ul>
        <li>Guess ALL the combination of numbers in the current mind</li>
      </ul>
      <h3>Rules:</h3>
      <ul>
        <li>10 attempts</li>
        <li>Mastermind will not spill the answers until the end of turn</li>
        <li>A combination is:</li>
          <ul>
            <li>The correct number</li>
            <li>The number's location in the list</li>
            <li>Hint: Think of each number, in their exact spot on a list, covered by a black cloth</li>
            <li>Hint: Numbers are not higher than 8 and can include 0</li>
          </ul>
      </ul>
      <button onClick={() => clickGotIt()}>Got it!</button>
    </div>
  )
};

export default FirstTime;