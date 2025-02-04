import React, { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] =useState([]);
  const [value, setValue] = useState('');
  const handleClick = (e) =>{
        e.preventDefault();
        setTodos([...todos, value]);
        setValue('');
  }
  return (
    <div>
        <h1>TodoList</h1>
        <ul>
            {todos.map((todos, index) => <li key={index}>
                {todos}
            </li>)}
        </ul>
        <form action="">
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
            <button onClick={handleClick}> add Todo</button>

        </form>


    </div>
  )
}

export default TodoList