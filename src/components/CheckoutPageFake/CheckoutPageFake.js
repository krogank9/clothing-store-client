import React from 'react';
import './CheckoutPageFake.css';

import { Link } from "react-router-dom";

class CheckoutPageFake extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="checkout-page-description">
        <h1>Thanks for trying out my app!</h1>
        <p>In a production setting, upon checkout you would be able to input your payment info at this stage and place an order for the products you've selected.</p>
        <p>This demo was intended to showcase my knowledge of web frameworks and my ability to combine into a fully featured app.</p>
        <p><a href="https://github.com/krogank9/forum-client">Client</a>: React, HTML, CSS. <a href="https://github.com/krogank9/forum-server">Server</a>: Node, ExpressJS, PostgreSQL.</p>
        <p>Created by <a href="http://ltkdigital.com">Logan Krumbhaar</a>.</p>
      </div>
    );
  }
}

export default CheckoutPageFake;
