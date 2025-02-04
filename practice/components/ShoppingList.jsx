import React, { useState } from 'react'

const ShoppingList = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
  const [itemList, setItemList] = useState([
    {
        name: "Apple",
        price: "1.00"
    }
  ]);
  const handleChange = (e) => {
    e.preventDefault();
    setItemList([...itemList, {name: name, price: price}]);
    setName("");
    setPrice("");
  }

  return (
    <div>
        <h1>Shopping List</h1>
        <ul>
            {
                itemList.map((item, index) => <li key={index}>
                    <h2>Product Name: {item.name}</h2>
                    <p>Price: ${item.price}</p>
                </li>)
            }
        </ul>
        <form action="">
            <input type="text" value={name} onChange={(e)=> {
                setName(e.target.value);
            }} />
            <input type="text" value={price} onChange={(e)=>{
                setPrice(e.target.value);
            }} />
            <button onClick={handleChange}> Add Item</button>
        </form>

    </div>
  )
}

export default ShoppingList