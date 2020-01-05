import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ClothingStoreApiService from '../../services/clothing-store-api-service';
import ClothingStoreContext from '../../contexts/ClothingStoreContext';

class CreateAccountPage extends Component {
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

    ClothingStoreApiService.registerUser(this.state.userName, this.state.password, this.state.profilePicture)
      .then(json => {
        ClothingStoreApiService.login(this.state.userName, this.state.password)
          .then(json => {
            this.context.onUserLoggedIn(json.authToken, json.userName, json.userId)
            this.props.history.goBack()
          })
          .catch(e => {
            this.setState({errorMessage: e.error})
          })
      })
      .catch(e => {
        this.setState({errorMessage: e.error})
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
          Create Account
        </h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-error">{this.state.errorMessage}</div>

          Username:&nbsp;
          <input type="text" name="userName" onChange={this.updateFormState} required />

          <br />

          Password:&nbsp;
          <input type="password" name="password" onChange={this.updateFormState} required />

          <br />

          <input type="submit" value="Create Account" />
        </form>
      </section>
    );
  }
}

export default withRouter(CreateAccountPage);