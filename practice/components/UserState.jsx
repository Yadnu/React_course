import React from 'react'
import Counter from './Counter'
import TodoList from './TodoList'
import Profile from './Profile'
import ShoppingList from './ShoppingList'
const UserState = () => {
  return (
    <div>
        <Counter />
        <TodoList />
        <Profile />
        <ShoppingList />
    </div>
  )
}

export default UserState