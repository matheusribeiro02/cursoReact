import React from 'react'

const ChangeMessage = ( {handleMessage} ) => {
const messages = ["oi", "ola", "oi, tudo bem?"];

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage