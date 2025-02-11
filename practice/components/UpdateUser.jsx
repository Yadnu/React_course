import React from 'react'
import { data } from './UserContext';
import { useContext } from 'react';
const UpdateUser = () => {
  const name = useContext(data);
  return (
    <div>
        <h1>Update User</h1>
        <p>name: {name}</p>
        {name = "AJ"}
        <h1>Updated name: {name}</h1>

    </div>
  )
}

export default UpdateUser