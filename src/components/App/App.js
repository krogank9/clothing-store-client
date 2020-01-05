import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

import ClothingStoreContext from '../../contexts/ClothingStoreContext.js';

import CartService from '../../services/cart-service';
import TokenService from '../../services/token-service';
import ClothingStoreApiService from '../../services/clothing-store-api-service';

import NavBar from '../NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import CreateAccountPage from '../CreateAccountPage/CreateAccountPage';
import LandingPage from '../LandingPage/LandingPage';
import CartPage from '../CartPage/CartPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import CheckoutPageFake from '../CheckoutPageFake/CheckoutPageFake';
import ListCollectionsPage from '../ListCollectionsPage/ListCollectionsPage';
import ViewCollectionPage from '../ViewCollectionPage/ViewCollectionPage';
import ViewProductPage from '../ViewProductPage/ViewProductPage';
import ViewReviewsPage from '../ViewReviewsPage/ViewReviewsPage';
import WriteReviewPage from '../WriteReviewPage/WriteReviewPage';

class App extends React.Component {
  static contextType = ClothingStoreContext

  constructor() {
    super();

    this.state = {
      cart: []
    }
  }

  pushToCart = (product) => {
    const newCart = [...this.state.cart, product]
    if(newCart.length >= 30) {
      return false
    }
    this.setState({ cart: newCart });
    CartService.setCart(newCart)
    return true
  }

  removeFromCart = (productId) => {
    const newCart = this.state.cart.filter(p => p.id !== productId)
    this.setState({ cart: newCart });
    CartService.setCart(newCart)
  }

  onUserLogout = (authToken, userName, userId) => {
    TokenService.clearAuthToken();
    this.setState({ loggedInUser: null });
  }

  onUserLoggedIn = (authToken, userName, userId) => {
    TokenService.saveAuthToken(authToken)
    this.setState({
      loggedInUser: { userName: userName, id: userId }
    })
  }

  tryRefreshLogin = () => {
    let authToken = TokenService.getAuthToken();

    if (authToken && authToken.length > 0) {
      ClothingStoreApiService.refresh(authToken).then(json => {
        this.onUserLoggedIn(json.authToken, json.userName, json.userId)
      })
    }
  }

  componentDidMount() {
    // Try to refresh the JWT token & log in on page load
    this.tryRefreshLogin();
    // Sync cart length
    this.state.cart = CartService.getCartItems()
  }

  render() {
    let contextValue = {
      ...(this.state),
      "onUserLoggedIn": this.onUserLoggedIn,
      "onUserLogout": this.onUserLogout,
      cart: this.state.cart,
      "pushToCart": this.pushToCart,
      "removeFromCart": this.removeFromCart,
    };
    return (
      <ClothingStoreContext.Provider value={contextValue}>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create-account" component={CreateAccountPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/checkout" component={CheckoutPageFake} />
            <Route exact path="/collections" component={ListCollectionsPage} />
            <Route exact path="/collections/:collectionName" render={(props) => (
              // Added render with key to this so component get remounted each time the route changes
              <ViewCollectionPage key={props.match.params.collectionName} {...props} />
            )} />
            <Route exact path="/products/:productName/reviews" render={(props) => (
              <ViewReviewsPage key={props.match.params.productName+"/reviews"} {...props} />
            )} />
            <Route exact path="/products/:productName/write-review" render={(props) => (
              <WriteReviewPage key={props.match.params.productName+"/write-review"} {...props} />
            )} />
            <Route exact path="/products/:productName" render={(props) => (
              <ViewProductPage key={props.match.params.productName} {...props} />
            )} />
            <Route component={LandingPage} />
          </Switch>
        </div>
      </ClothingStoreContext.Provider>
    );
  }
}

export default App;
