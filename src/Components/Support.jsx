import React from 'react'
import "./Support.css"
const Support = () => {
  return (
    <div className="support-container">
    <h1>Support</h1>
    <p>If you need assistance, feel free to contact us. We're here to help!</p>

    <div className="support-options">
      <div className="support-card">
        <h2>FAQ</h2>
        <p>Find answers to frequently asked questions.</p>
      </div>

      <div className="support-card">
        <h2>Contact Support</h2>
        <p>Email us at support@example.com or call us at (123) 456-7890.</p>
      </div>

      <div className="support-card">
        <h2>Live Chat</h2>
        <p>Chat with our support team for quick assistance.</p>
      </div>

      <div className="support-card">
        <h2>Submit a Ticket</h2>
        <p>Submit a support ticket and our team will get back to you shortly.</p>
      </div>
    </div>
  </div>
  )
}

export default Support
