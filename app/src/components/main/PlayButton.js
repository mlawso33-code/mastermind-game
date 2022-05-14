import React from 'react';

const PlayButton = ({onClick}) => {
  return (
    <div>
      <img id="playbutton" src="./play.svg" alt="Play button" onClick={() => onClick()}/>
    </div>
  )
}

export default PlayButton