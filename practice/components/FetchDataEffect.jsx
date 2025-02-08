import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
    useEffect(()=>{
        async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);}
        fetchData();
  }
);
  return (
    <div>
      <h1>
      FetchDataEffect
      </h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

    </div>
  )
}

export default FetchDataEffect