import React, { useState, useEffect } from 'react'

const CounterEffect = () => {
  const [count, setCount] = useState(0);
 useEffect(()=> {
    console.log('useEffect called');
    document.title = `Counter value is ${count}`;
  },[count]);
  const handleClick = ()=> {
    setCount(count + 1);
  }
  return (
    <div>
        <h1> Use effect in counter { count}</h1>
        <button onClick={handleClick}>Increment</button>   
    </div>
  )
}

export default CounterEffect