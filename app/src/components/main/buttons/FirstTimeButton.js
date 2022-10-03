import '../../../index.css'
import React from 'react';

const FirstTimeButton= ({clickFirst}) => {
  return (
    <div>
      <img className="firstbutton" src="./firsttime.svg" alt="First time" onClick={() => clickFirst()}/>
    </div>
  )
}

export default FirstTimeButton;