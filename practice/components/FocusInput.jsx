import React, { useRef } from 'react'

const FocusInput = () => {
  const inputField = useRef(null);
  console.log(inputField);
  return (
    <div>
        <h1>FocusInput</h1>
        <input type="text" ref={inputField}/>
        <button onClick={()=>{inputField.current.focus()}}>Click Yadneya</button>
    </div>
  )
}

export default FocusInput