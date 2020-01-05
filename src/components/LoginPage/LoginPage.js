import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";

import ClothingStoreApiService from '../../services/clothing-store-api-service';
import ClothingStoreContext from '../../contexts/ClothingStoreContext';

class LoginPage extends Component {
  static contextType = ClothingStoreContext

  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      errorMessage: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    ClothingStoreApiService.login(this.state.userName, this.state.password)
      .then(json => {
        console.log("logged in ")
        this.context.onUserLoggedIn(json.authToken, json.userName, json.userId)
        this.props.history.goBack()
      })
      .catch(e => {
        const errorMessage = e.error
        this.setState({errorMessage})
      })
  }

  updateFormState = (evt) => {
    let name = evt.target.getAttribute("name")

    this.setState({ [name]: evt.target.value })
  }

  render() {
    return (
      <section>
        <h2>
          Login
        </h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-error">{this.state.errorMessage}</div>

          Username:&nbsp;
          <input type="text" name="userName" onChange={this.updateFormState} required />

          <br />

          Password:&nbsp;
          <input type="password" name="password" onChange={this.updateFormState} required />

          <br />

          <input type="submit" value="Log In" />

          <br/><br/>

          <span>No account? <Link to="create-account">Create one here</Link></span>
        </form>
      </section>
    );
  }
}

export default withRouter(LoginPage);