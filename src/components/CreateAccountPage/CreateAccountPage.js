import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class CreateAccountPage extends Component {

  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      profilePicture: 1,
      errorMessage: ""
    }
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