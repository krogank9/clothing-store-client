import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";

class LoginPage extends Component {

  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      errorMessage: ""
    }
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
          <input type="text" name="userName" required />

          <br />

          Password:&nbsp;
          <input type="password" name="password" required />

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