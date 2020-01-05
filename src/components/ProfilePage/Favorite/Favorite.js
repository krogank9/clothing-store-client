import React from 'react';

import { Link } from "react-router-dom";
import Utils from "../../../utils";

class Favorite extends React.Component {

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
              <img className="cart-product-img" src={`${process.env.PUBLIC_URL}/assets/products/${Utils.normalizeName(this.props.product.name)}.jpg`}></img>
            </div>
            <div className="cart-item-info">
              <div>{this.props.product.name}</div>
              <small>{this.getSize()}</small>
              <br />
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
