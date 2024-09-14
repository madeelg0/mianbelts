import React, { useState } from 'react'
import "./CustomOrderform.css"

const CustomOrderform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview the uploaded image
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message, image });
  };

  return (
    <div className="custom-order-container">
      <h1>Custom Order</h1>
      <div className="form-container">
        {/* Form for custom order details */}
        <form onSubmit={handleSubmit} className="custom-order-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />

          <button type="submit">Submit Order</button>
        </form>

        {/* Image preview */}
        {imagePreview && (
          <div className="image-preview">
            <h2>Uploaded Image Preview:</h2>
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomOrderform;
