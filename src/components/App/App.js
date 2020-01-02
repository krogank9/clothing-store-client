import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/create-account" component={CreateAccountPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/checkout" component={CheckoutPageFake} />
          <Route exact path="/collections" component={ListCollectionsPage} />
          <Route exact path="/collections/:collectionName" component={ViewCollectionPage} />
          <Route exact path="/products/:productName" component={ViewProductPage} />
          <Route component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
