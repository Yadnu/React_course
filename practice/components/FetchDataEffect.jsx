import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
    useEffect(async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(response);
  })
  return (
    <div>FetchDataEffect</div>
  )
}

export default FetchDataEffect