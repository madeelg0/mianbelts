import React from "react";
import "./CardProduct.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.details}</p>
        <button className="card-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
