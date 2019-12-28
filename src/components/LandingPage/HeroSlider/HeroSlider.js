import React, { Component } from 'react';
import './HeroSlider.css';
import { Link } from "react-router-dom";

class HeroSlider extends Component {
  render() {
    return (
      <div className="hero-slider">
        <div className="hero-text-container">
          <div className="hero-maintext">Welcome to my clothing store</div>

          <div className="hero-subtext">(DEMO APP)</div>

          <div className="shop-buttons-container">
            <Link to="/collections" className="shop-button">Shop Mens</Link>
            <Link to="/collections" className="shop-button">Shop Womens</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSlider;