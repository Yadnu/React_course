import React from 'react'

const Greeting = ({name}) => {
  return (
    <div>
        <h1> Hello {name} How are you?</h1>
        <p> Its {Date.now()} today!</p>
    </div>
  )
}

export default Greeting