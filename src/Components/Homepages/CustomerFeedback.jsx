import React from "react";
import Slider from "react-slick";
import "./CustomerFeedback.css";
import Image from "../../Images/person.jpeg" // Custom CSS for styling

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Customer feedback data
const feedbacks = [
  {
    name: "John Doe",
    comment: "Great service and amazing products!",
    rating: 5,
    imageUrl: Image,
  },
  {
    name: "Jane Smith",
    comment: "I love the quality and attention to detail.",
    rating: 4,
    imageUrl: Image,
  },
  {
    name: "Alex Johnson",
    comment: "Fast shipping and great customer service!",
    rating: 5,
    imageUrl: Image,
  },
];

const CustomerFeedback = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "15%", // Show a bit of the background cards
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%", // Less padding on tablet screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "5%", // Even less padding on mobile
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0%", // No padding on very small screens
        }
      }
    ]
  };
  

  return (
    <div className="customer-feedback-container">
      <h2>Customer Feedback</h2>
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <div className="feedback-card-image">
              <img src={feedback.imageUrl} alt={feedback.name} />
            </div>
            <h3>{feedback.name}</h3>
            <p>{feedback.comment}</p>
            <div className="feedback-rating">
              {Array(feedback.rating)
                .fill()
                .map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerFeedback;
