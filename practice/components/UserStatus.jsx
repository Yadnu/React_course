import React from 'react'

const admin = () =>{
    return <h1> hello admin</h1>
}
const user = () => {
    return <h1> hello user </h1>
}

const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    ( loggedIn && isAdmin && admin()  )
    || (loggedIn && user())
  );
}

export default UserStatus