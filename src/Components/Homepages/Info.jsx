import React from "react";
import { useNavigate } from 'react-router-dom';
import backgroundvideo from "../../Videos/background.mp4"
import "./Info.css";


const Info = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('./AllProduct');
  };

  return (
    <div className="home-container">
     <div className="overlay">

      <video 
        className="background-video"
        src={backgroundvideo}
        autoPlay
        loop
        muted
        playsInline
        />

<h1>Welcome</h1>
      
      <p>Your vision, our craftsmanship</p>
      <button className="custom-order-button" onClick={goToProducts}> Shop Now</button>
        </div>
    </div>
  );
};

export default Info;
