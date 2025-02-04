import React, { useState } from 'react'


const Counter = () => {
    
    const [Counter, setCounter] = useState(0);
    const handleChange = () => {
        setCounter(Counter + 1);
    }
  return (
    <div>
        <h1>The count is {Counter}</h1>
        <button onClick={handleChange}> Increment</button>
    </div>
  )
}

export default Counter