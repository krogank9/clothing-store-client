import React from 'react';

import './NavBar.css';

import { Link } from "react-router-dom";

class NavBar extends React.Component {

  constructor() {
    super();

    this.state = {
      loggedInUser: null,
      showDropdown: false
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-header">

          <div className="nav-center">
            <div className="inline-block">
              <Link to="/collections" className="nav-button">Mens</Link>
            </div>
            <div className="inline-block">
              <Link to="/collections" className="nav-button">Womens</Link>
            </div>
            <div className="inline-block">
              <Link to="/collections" className="nav-button">Accessories</Link>
            </div>
          </div>

          <div className="nav-left">
            <Link to="/" className="nav-log-link">
              <img className="nav-logo" src={`${process.env.PUBLIC_URL}/assets/logo_small.svg`} alt="Logan's Forum App"></img>
            </Link>
          </div>

          <div className="nav-right">
            <div className="inline-block">
              <div className="nav-icon">
                <Link><img src={`${process.env.PUBLIC_URL}/assets/search.svg`} alt="Search"></img></Link>
              </div>
            </div>
            <div className="inline-block">
              <div className="nav-icon">
                <Link to="/cart"><img src={`${process.env.PUBLIC_URL}/assets/cart.svg`} alt="Cart"></img></Link>
              </div>
            </div>
            <div className="inline-block">
              <Link to="/login" className="nav-button">
                Login
              </Link>
              /
              <Link to="/profile" className="nav-button">
                Username
              </Link>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}

export default NavBar;