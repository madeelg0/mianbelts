import React from 'react'
import "./Products.css"
import CardProduct from './CardProduct'
import Image from "../../Images/belt1.jpg"
const Products = () => {
  const product = {
    name: "Leather Belt",
    details: "Premium quality leather belt for casual and formal wear.",
    image: Image // Replace with an actual image URL
  };

  return (
    <div className="App">
      <h1>Our Products</h1>
      <div className="carcontainer">
      <CardProduct product={product} />
      <CardProduct product={product} />
      <CardProduct product={product} />
      <CardProduct product={product} />
      <CardProduct product={product} />
      <CardProduct product={product} />
      </div>
    </div>
  );
}

export default Products
