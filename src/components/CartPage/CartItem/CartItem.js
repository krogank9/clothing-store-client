import React from 'react';
import { Link } from "react-router-dom";

import ClothingStoreContext from '../../../contexts/ClothingStoreContext.js';

import Utils from "../../../utils";

class CartItem extends React.Component {
  static contextType = ClothingStoreContext;

  static defaultProps = {
    product: {},
    quantity: 0
  }

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

  getProductLink = () => {
    return `/products/${Utils.normalizeName(this.props.product.name)}.${this.props.product.id}`
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
              <Link to={this.getProductLink()}>
                <img className="cart-product-img" src={`${process.env.PUBLIC_URL}/assets/products/${Utils.normalizeName(this.props.product.name)}.jpg`}></img>
              </Link>
            </div>
            <div className="cart-item-info padding-15">
              <div><Link to={this.getProductLink()}>{this.props.product.name}</Link></div>
              {this.getPrice()}
              <div className="mobile-only">
                Qty: {this.props.quantity}
                <br />
                <Link to="#" onClick={this.onRemoveClicked}>Remove</Link>
              </div>
            </div>
          </div>
        </td>
        <td className="desktop-only">
          <div className="padding-5">
            {this.props.quantity}
            <br />
            <Link to="#" onClick={this.onRemoveClicked}>Remove</Link>
          </div>
        </td>
        <td className="desktop-only">
          <div className="padding-5">
            ${this.getQuantityPrice()}
          </div>
        </td>
      </tr>
    );
  }
}

export default CartItem;