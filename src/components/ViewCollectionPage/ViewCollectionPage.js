import React from 'react';
import './ViewCollectionPage.css';

import { Link } from "react-router-dom";

class ViewCollectionPage extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="cart-page">
        <h1>Shirts</h1>
        <div className="collection-grid">

          <div className="collection-box">
            <Link to="/items/brown-plaid-shirt">
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
              </div>
              <div>
                Brown Plaid Shirt
            </div>
            </Link>
          </div>
          <div className="collection-box">
            <Link to="/items/brown-plaid-shirt">
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
              </div>
              <div>
                Brown Plaid Shirt
            </div>
            </Link>
          </div>
          <div className="collection-box">
            <Link to="/items/brown-plaid-shirt">
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
              </div>
              <div>
                Brown Plaid Shirt
            </div>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default ViewCollectionPage;