import React from 'react'
import "./ContactInfo.css"

const ContactInfo = () => {
  return (
<>
<div className="contact-page-container">
      <h2>Contact Us</h2>
      
      {/* Contact Info Section */}
      <div className="contact-info-section">
        <div className="contact-info-card">
          <h3>Our Office</h3>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
        <div className="contact-info-card">
          <h3>Call Us</h3>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="contact-info-card">
          <h3>Email Us</h3>
          <p>Email: info@example.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <form className="contact-form">
        <h3>Send Us a Message</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
</>
  )
}

export default ContactInfo
