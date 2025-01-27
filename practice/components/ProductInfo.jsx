import React from 'react'

const ProductInfo = () => {
    let Product = {name: "Laptop",
        price:"$1200",
        availability: "In stock"}
  return (
    <div>
        Here are the product details:
        <h1>name: "{Product.name}"</h1>
        <h1>price: {Product.price}</h1>
        <h1>availability: "{Product.availability}"</h1>
    </div>
  )
}

export default ProductInfo