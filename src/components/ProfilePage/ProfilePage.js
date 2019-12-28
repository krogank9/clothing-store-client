import React from 'react';
import './ProfilePage.css';

import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="cart-page">
        <h1>Your Profile</h1>
        <div className="logout-button-container">
          <Link className="logout-button" to="/">Logout</Link>
        </div>

        <h2>Favorites</h2>
        <table className="cart-table">
          <tr>
            <th>Favorites</th>
          </tr>
          <tr>
            <td>
              <div className="cart-item">
                <div className="cart-item-img-container">
                  <img className="cart-product-img" src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
                </div>
                <div className="cart-item-info">
                  <div>Plain Shirt</div>
                  <small>Medium</small>
                  <br />
                  <small>$19.99</small>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="cart-item">
                <div className="cart-item-img-container">
                  <img className="cart-product-img" src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
                </div>
                <div className="cart-item-info">
                  <div>Plain Shirt</div>
                  <small>Medium</small>
                  <br />
                  <small>$19.99</small>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ProfilePage;
