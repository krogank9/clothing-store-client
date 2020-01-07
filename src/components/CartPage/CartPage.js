import React from 'react';
import { withRouter } from "react-router-dom";

import './CartPage.css';

import ClothingStoreContext from '../../contexts/ClothingStoreContext.js';
import ClothingStoreApiService from '../../services/clothing-store-api-service';
import Utils from "../../utils";

import CartItem from './CartItem/CartItem';

import { Link } from "react-router-dom";
import utils from '../../utils';

class CartPage extends React.Component {
  static contextType = ClothingStoreContext;

  constructor() {
    super();

    this.state = {
    }
  }

  getCartPriceTotal = (cart) => {
    return Utils.normalizePrice(
      cart.reduce((total, product) => total + parseFloat(product.price), 0)
    )
  }

  getCartJSX = (cart) => {
    let cartHashmap = {}
    cart.forEach(p => {
      if (!cartHashmap[p.id]) {
        cartHashmap[p.id] = { quantity: 1, product: p }
      }
      else {
        cartHashmap[p.id].quantity++
      }
    })
    return Object.entries(cartHashmap).map((e, i) => <CartItem quantity={e[1].quantity} product={e[1].product} key={i} />)
  }

  render() {
    let cartContent

    return (
      <ClothingStoreContext.Consumer>
        {({ cart }) => (
          <div className="cart-page">
            <h1>Shopping Cart</h1>

            {cart.length === 0 ?
              (
                <div>
                  Your cart is currently empty.
                  Continue browsing <Link to="/collections">here</Link>.
                </div>
              )
              :
              (
                <>
                  <table className="cart-table">
                    <tbody>
                      <tr>
                        <th>Item</th>
                        <th className="desktop-only">Quantity</th>
                        <th className="desktop-only">Subtotal</th>
                      </tr>

                      {this.getCartJSX(cart)}

                      <tr>
                        <td colSpan="3">
                          <span className="cart-continue"><Link to="/collections">Continue shopping</Link></span>
                          <span className="cart-total">Total: ${this.getCartPriceTotal(cart)}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="checkout-button-container">
                    <Link className="checkout-button" to="/checkout">Checkout</Link>
                  </div>

                  <br /><br />
                </>
              )
            }
          </div>
        )}
      </ClothingStoreContext.Consumer>
    );
  }
}

export default withRouter(CartPage);
