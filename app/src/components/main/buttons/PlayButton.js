import '../../../index.css'
import React from 'react';

const PlayButton = ({clickPlay}) => {
  return (
    <div>
      <img className="playbutton" src="./play.svg" alt="Play button" onClick={() => clickPlay()}/>
    </div>
  )
}

export default PlayButton;