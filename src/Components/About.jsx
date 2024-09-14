import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to Mian Belts! We are committed to providing the best products and services to our customers.
        Our mission is to innovate and deliver top-notch solutions tailored to meet the needs of our audience.
      </p>

      <div className="about-section">
        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Founded in [Year], we started with a small idea and grew into a successful business. Our dedication to
            quality and customer satisfaction has been the key to our growth.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aim to lead the industry with our innovative products and exceptional customer service, ensuring a
            bright and sustainable future for our company and customers.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Team</h2>
          <p>
            Our team is made up of passionate and skilled professionals who are always ready to go the extra mile
            to ensure customer satisfaction. We value teamwork, creativity, and dedication.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
