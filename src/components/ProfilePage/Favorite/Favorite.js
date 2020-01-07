import React from 'react';

import { Link } from "react-router-dom";
import Utils from "../../../utils";

class Favorite extends React.Component {

  getProductLink = () => {
    return `/products/${Utils.normalizeName(this.props.product.name)}.${this.props.product.id}`
  }

  getSize = () => {
    // todo implement sizes for cart, favorite, & product pages
    //this.props.size
    return false//"Medium"
  }

  getPrice = () => {
    return Utils.normalizePrice(this.props.product.price)
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
            <div className="cart-item-info">
              <div><Link to={this.getProductLink()}>{this.props.product.name}</Link></div>
              <small>${this.getPrice()}</small>
              <br />
              <Link to="#" onClick={this.props.onRemoveClicked}>Remove Favorite</Link>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default Favorite;
