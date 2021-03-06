import React from 'react';

import './NavBar.css';

import ClothingStoreContext from '../../contexts/ClothingStoreContext.js';

import { Link } from "react-router-dom";

class NavBar extends React.Component {
  static contextType = ClothingStoreContext

  constructor() {
    super();

    this.state = {
      loggedInUser: null,
      showDropdown: false
    }
  }

  toggleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown })
  }

  render() {
    return (
      <ClothingStoreContext.Consumer>
        {({ loggedInUser }) => (
          <nav>
            <div className="nav-header">

              <div className="nav-center desktop-only">
                <div className="inline-block">
                  <Link to="/collections/shirts.1" className="nav-button">Shirts</Link>
                </div>
                <div className="inline-block">
                  <Link to="/collections/pants.2" className="nav-button">Pants</Link>
                </div>
                <div className="inline-block">
                  <Link to="/collections" className="nav-button">All Collections</Link>
                </div>
              </div>

              <div className="nav-left">
                <Link to="/" className="nav-log-link">
                  <img className="nav-logo" src={`${process.env.PUBLIC_URL}/assets/logo_small.svg`} alt="Logan's Forum App"></img>
                </Link>
              </div>

              <div className="nav-right desktop-only">
                <div className="inline-block">
                  <div className="nav-icon cart-icon">
                    <Link to="/cart">
                      <div className="cart-length-text">
                        {this.context.cart.length}
                      </div>
                      <img src={`${process.env.PUBLIC_URL}/assets/cart.svg`} alt="Cart"></img>
                    </Link>
                  </div>
                </div>
                <div className="inline-block">
                  {loggedInUser ?
                    <Link to="/profile" className="nav-button">{loggedInUser.userName}</Link>
                    :
                    <Link to="/login" className="nav-button">Login</Link>
                  }
                </div>
              </div>

              <div className="nav-dropdown-button">
                <div className="inline-block">
                  <Link to="#" className="menu-button" onClick={this.toggleDropdown}>
                    <img src={`${process.env.PUBLIC_URL}/assets/menu-icon.svg`} className="menu-icon" alt="Navigation Menu"></img>
                  </Link>
                </div>
              </div>

            </div>

            {this.state.showDropdown ? (
              <div className="nav-dropdown-menu">
                <Link to="/">Home</Link>
                <Link to="/collections">Mens</Link>
                <Link to="/collections">Womens</Link>
                <Link to="/collections">Accessories</Link>
                <Link to="/cart">Cart</Link>
                {loggedInUser ?
                  <Link to="/profile">View Profile</Link>
                  :
                  <Link to="/login">Login</Link>
                }
              </div>
            ) : false}
          </nav>
        )}
      </ClothingStoreContext.Consumer>
    );
  }
}

export default NavBar;