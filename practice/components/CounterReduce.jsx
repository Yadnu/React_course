import React, { useState } from 'react';
import reducer from '../utils/counterReducer';
import { useReducer } from 'react';

const CounterReduce = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Count : {state.count}</h1>

      <button onClick={( )=>{dispatch({type: 'increment'})}}>+</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>-</button>
      <button onClick={()=> {dispatch({type : 'reset'})}}>reset</button>
      <div>
        <input type="number" onChange={(e)=>{setValue(e.target.value)}} value={value} />
        <button onClick={()=>{dispatch({type: 'incrementByAmount', payload:Number(value)})}}>IncrementByAmount</button>
        <button onClick={()=>{dispatch({type:"decrementByAmount", payload: Number(value)})}}>DecrementByAmount</button>
      </div>
    </div>
  )
}

export default CounterReduce;