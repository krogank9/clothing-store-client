import React from 'react';
import './ListCollectionsPage.css';

import { Link } from "react-router-dom";

class ListCollectionsPage extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="cart-page">
        <h1>Collections</h1>
        <div className="collection-grid">

          <div className="collection-box">
            <Link to="/collections/shirts">
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
              </div>
              <div>
                Shirts
            </div>
            </Link>
          </div>
          <div className="collection-box">
            <Link to="/collections/pants">
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/products/pants.jpg`}></img>
              </div>
              <div>
                Pants
            </div>
            </Link>
          </div>
          <div className="collection-box">
            <Link to="/collections/socks">
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/products/socks.jpg`}></img>
              </div>
              <div>
                Socks
            </div>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default ListCollectionsPage;
