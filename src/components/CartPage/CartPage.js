import React from 'react';
import { withRouter } from "react-router-dom";

import './CartPage.css';

import CartItem from './CartItem/CartItem';

import { Link } from "react-router-dom";
import utils from '../../utils';

class CartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: []
    }
  }

  getCartPriceTotal = () => {
    return utils.normalizePrice(0)
  }

  render() {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <table className="cart-table">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <CartItem product={{}} />
            <tr>
              <td colSpan="3">
                <span className="cart-continue"><Link to="/collections">Continue shopping</Link></span>
                <span className="cart-total">Total: ${this.getCartPriceTotal()}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="checkout-button-container">
          <Link className="checkout-button" to="/checkout">Checkout</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(CartPage);
