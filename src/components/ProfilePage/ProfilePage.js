import React from 'react';
import { withRouter } from "react-router-dom";

import './ProfilePage.css';

import ClothingStoreContext from '../../contexts/ClothingStoreContext.js';
import TokenService from '../../services/token-service';
import ClothingStoreApiService from '../../services/clothing-store-api-service';

import Favorite from './Favorite/Favorite';

import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
  static contextType = ClothingStoreContext;

  constructor() {
    super();

    this.state = {
      favorites: [],
      fetchError: false,
      removeError: false,
      loaded: false
    }
  }

  onRemoveFavoriteClicked = (id) => {
    ClothingStoreApiService.deleteFavorite(TokenService.getAuthToken(), id)
      .then(json => {
        this.setState({ removeError: false, favorites: this.state.favorites.filter(f => f.id !== id) });
      })
      .catch(e => {
        this.setState({ removeError: true });
      })
  }

  componentDidMount() {
    ClothingStoreApiService.getMyFavorites(TokenService.getAuthToken())
      .then(json => {
        console.log(json)
        this.setState({ favorites: json, loaded: true });
      })
      .catch(e => {
        this.setState({ fetchError: true });
      })
  }

  logoutUser = () => {
    this.context.onUserLogout();
    this.props.history.push("/")
  }

  render() {
    let content

    if (!this.context.loggedInUser) {
      return (
        <div className="profile-page">
          <h1>Not logged in</h1>
          <div className="logout-button-container">
            <Link className="logout-button" to="/login">Login Here</Link>
          </div>
        </div>
      )
    }
    else if (this.state.fetchError) {
      content = <div>Error getting favorites. Please try again later.</div>
    }
    else if (!this.state.loaded) {
      content = <div>Loading...</div>
    }
    else {
      let favorites = this.state.favorites.map((f, i) => (
        <Favorite product={f.product} key={i} onRemoveClicked={() => this.onRemoveFavoriteClicked(f.id)} />
      ))

      content = (
        <>
          <div className="form-error">{this.state.removeError ? "Error removing favorite." : false}</div>
          <table className="cart-table">
            <tbody>
              <tr>
                <th>Favorites</th>
              </tr>

              {favorites}
            </tbody>
          </table>
        </>
      );
    }

    return (
      <div className="cart-page">
        <h1>Your Profile</h1>
        <div className="logout-button-container">
          <Link className="logout-button" to="#" onClick={this.logoutUser}>Logout</Link>
        </div>

        <h2>Favorites</h2>
        {content}

        <br />
      </div>
    )
  }
}

export default withRouter(ProfilePage);
