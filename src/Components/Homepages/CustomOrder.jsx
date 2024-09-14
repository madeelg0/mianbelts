import React from "react";
import { useNavigate } from "react-router-dom";
import "./CustomOrder.css";

const CustomOrder = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("./CustomOrderform");
  };
  return (
    <div className="Custom-container">
      <div className="overlay">
        <h1>Design your own master Piece</h1>
        
        <p>Your vision, our craftsmanship</p>
        <button className="custom-order-button" onClick={goToProducts}>
          Start Your Custom Order
        </button>
      </div>
    </div>
  );
};

export default CustomOrder;
