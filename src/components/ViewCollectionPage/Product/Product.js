import React, { Component } from 'react';

import Utils from "../../../utils";

import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    return (
      <li className="product-li">
        <Link to={`/products/${Utils.normalizeName(this.props.name)}.${this.props.productId}`}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/products/${Utils.normalizeName(this.props.name)}.jpg`}></img>
          </div>
          <div>
            {this.props.name}
          </div>
        </Link>
      </li>
    );
  }
}

export default Product;