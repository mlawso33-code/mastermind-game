import React from 'react';

const PlayButton = ({clickPlay}) => {
  return (
    <div>
      <img id="playbutton" src="./play.svg" alt="Play button" onClick={() => clickPlay()}/>
    </div>
  )
}

export default PlayButton;