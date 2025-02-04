import React, { useState } from 'react'

const TodoList = () => {
  const [Todo, setTodo] = useState([]);
  const handleClick = (e) => {
    setTodo([...Todo, e.target.value]);
  }
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            {Todo.map((item, index) => {
                return <li key={index}> item</li>
            } )}
        </ul>
        <form action="post">
            <input type="text" />
            <button type="submit" onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}

export default TodoList