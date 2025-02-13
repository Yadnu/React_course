import React from 'react'

const dummyData = [
    {
        name: "John Doe",
        email: "user1@example.com",
        location: { city: "San Francisco" },
    },
    {
        name: "Jane Smith",
        email: "user2@example.com",
        location: { city: "New York" },
    },
    {
        name: "Robert Brown",
        email: "user3@example.com",
        location: { city: "Los Angeles" },
    },
    {
        name: "John Doe",
        email: "user1@example.com",
        location: { city: "San Francisco" },
    },
    {
        name: "Jane Smith",
        email: "user2@example.com",
        location: { city: "New York" },
    },
    {
        name: "Robert Brown",
        email: "user3@example.com",
        location: { city: "Los Angeles" },
    },
    {
        name: "John Doe",
        email: "user1@example.com",
        location: { city: "San Francisco" },
    },
    {
        name: "Jane Smith",
        email: "user2@example.com",
        location: { city: "New York" },
    },
    {
        name: "Robert Brown",
        email: "user3@example.com",
        location: { city: "Los Angeles" },
    },
  
];
const MapMethod = (props) => {
    
  return (
    <div>
        <h1> Users list</h1>
        <ul>
            
                {dummyData.map((user) => {
                    return <li>
                        <h3>Name: {propuser.name}</h3>
                        <h2>Email: {user.email}</h2>
                        <h2>Location: {user.location.city}</h2>
                        </li>
                
                })}
            
        </ul>
    </div>
  )
}

export default MapMethod