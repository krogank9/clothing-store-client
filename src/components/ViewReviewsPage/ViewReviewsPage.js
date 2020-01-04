import React from 'react';
import './ViewReviewsPage.css';

import { Link } from "react-router-dom";

class ViewReviewsPage extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="reviews-page">
        <h1>Brown Plaid Shirt</h1>
        <div><Link to="#">Go back</Link> &nbsp; <Link to="/products/brown-plaid-shirt/write-review">Write a review</Link></div>
        <h2>Reviews</h2>
        
        <div className="review-list">

          <div>
            Wow what a great item
            ★★★★✰
            <div>Yeah it's a real good item. But it shrank in the wash. 4 stars.</div>
          </div>

        </div>
      </div>
    );
  }
}

export default ViewReviewsPage;