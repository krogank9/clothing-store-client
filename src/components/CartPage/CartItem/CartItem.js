import React from 'react';
import { Link } from "react-router-dom";

import ClothingStoreContext from '../../../contexts/ClothingStoreContext.js';

import Utils from "../../../utils";

class CartItem extends React.Component {
  static contextType = ClothingStoreContext;

  constructor() {
    super();

    this.state = {
    }
  }

  onRemoveClicked = () => {
    this.context.removeFromCart(this.props.product.id)
  }

  getSize = () => {
    //this.props.size
    return false//"Medium"
  }

  getPrice = () => {
    return Utils.normalizePrice(this.props.product.price)
  }

  getQuantityPrice = () => {
    return Utils.normalizePrice(this.props.product.price * this.props.quantity)
  }

  render() {
    return (
      <tr>
        <td>
          <div className="cart-item">
            <div className="cart-item-img-container">
              <img className="cart-product-img" src={`${process.env.PUBLIC_URL}/assets/products/${Utils.normalizeName(this.props.product.name)}.jpg`}></img>
            </div>
            <div className="cart-item-info">
              <div>{this.props.product.name}</div>
              <small>{this.getSize()}</small>
            </div>
          </div>
        </td>
        <td>
          {this.props.quantity}
          <br />
          <Link to="#" onClick={this.onRemoveClicked}>Remove</Link>
        </td>
        <td>${this.getQuantityPrice()}</td>
      </tr>
    );
  }
}

export default CartItem;