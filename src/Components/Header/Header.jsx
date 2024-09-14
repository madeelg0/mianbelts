import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">Logo</a>
        </div>
        <nav>
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="CustomOrderform">Custom Order</a>
            </li>
            <li>
              <a href="AllProduct">Products</a>
            </li>
            <li>
              <a href="Support">Support</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
