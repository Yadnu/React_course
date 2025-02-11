import React from 'react'
import { data } from './UserContext';
import { useContext } from 'react';
const UserProfile = () => {
  const name = useContext(data);
  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {name}</p>
    </div>
  )
}

export default UserProfile