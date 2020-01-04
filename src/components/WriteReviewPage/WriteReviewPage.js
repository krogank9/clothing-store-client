import React from 'react';
import './WriteReviewPage.css';

import { Link } from "react-router-dom";

import StarRatingInput from "./StarRatingInput/StarRatingInput";

class WriteReviewPage extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="reviews-page">
        <h1>Create Review</h1>
        <div>Brown Plaid Shirt</div>
        <div><Link to="#">View Product</Link> &nbsp; <Link to="/products/brown-plaid-shirt/reviews">View All Reviews</Link></div>
        
        <form>

          <h3>Overall rating</h3>
          <StarRatingInput />

          <h3>Add a headline</h3>
          <div><input type="text" placeholder="What's most important to know?"></input></div>

          <h3>Write your review</h3>
          <div><textarea placeholder="What did you like or dislike? What did you use this product for?"></textarea></div>

          <input type="submit"></input>

        </form>
      </div>
    );
  }
}

export default WriteReviewPage;