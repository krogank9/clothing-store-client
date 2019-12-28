import React from 'react';
import './CartPage.css';

import { Link } from "react-router-dom";

class CartPage extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <table className="cart-table">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Subtotal</th>
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
                </div>
              </div>
            </td>
            <td>1</td>
            <td>$19.99</td>
          </tr>
          <tr>
            <td colSpan="3">
              <span className="cart-continue"><Link to="/">Continue shopping</Link></span>
              <span className="cart-total">Total: $19.99</span>
            </td>
          </tr>
        </table>
        <div className="checkout-button-container">
          <Link className="checkout-button" to="/checkout">Checkout</Link>
        </div>
      </div>
    );
  }
}

export default CartPage;
