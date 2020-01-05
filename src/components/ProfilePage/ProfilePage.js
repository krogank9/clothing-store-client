import React from 'react';
import { withRouter } from "react-router-dom";

import './ProfilePage.css';

import ClothingStoreContext from '../../contexts/ClothingStoreContext.js';

import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
  static contextType = ClothingStoreContext;

  constructor() {
    super();

    this.state = {
    }
  }

  logoutUser = () => {
    this.context.onUserLogout();
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="cart-page">
        <h1>Your Profile</h1>
        <div className="logout-button-container">
          <Link className="logout-button" to="#" onClick={this.logoutUser}>Logout</Link>
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

export default withRouter(ProfilePage);
