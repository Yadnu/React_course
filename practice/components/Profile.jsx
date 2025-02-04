import React, { useState } from 'react'

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState({
    name: 'Yadneya Joshi',
    age: 24
  });
  const handleClick = (e) =>{
    e.preventDefault();
    setUser({
        ...user,
        name: name,
        age: age
    });
    setAge(0);
    setName("");
  }
  
  return (
    <div>
        <h1>Profile</h1>
        <h2>Name : {user.name}</h2>
        <h2>Age : {user.age}</h2>
        <form action="">
        <input type="text" value={name} onChange={(e)=> {
            setName(e.target.value);
        }} />
        <input type="number" value={age} onChange={(e) => {
            setAge(e.target.value);
        }} />
        <button onClick={handleClick}> Update</button>
        </form>
    </div>
    
  )
}

export default Profile