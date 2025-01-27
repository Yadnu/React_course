import React from 'react'


const MapMethod = () => {
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
        }
    ];
  return (
    <div>
        <h1> Users list</h1>
        <ul>
            
                {dummyData.map((user) => {
                    return <li>
                        <h3>Name: {user.name}</h3>
                        <h2>Email: {user.email}</h2>
                        <h2>Location: {user.location.city}</h2>
                        </li>
                
                })}
            
        </ul>
    </div>
  )
}

export default MapMethod