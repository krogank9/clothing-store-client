import React from 'react';
import './ViewItemPage.css';

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
        <h1>Brown Plaid Shirt</h1>
        <div className="collection-grid">

          <div className="collection-box">
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
            </div>
            <div>
              This brown plaid shirt is comfy and stylish. Buy now!
            </div>
            <div className="item-buttons-container">
              <Link className="item-button">Favorite Item</Link>
              <Link className="item-button">Add to cart</Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ViewCollectionPage;