import React, { Component } from 'react';
import './LandingPage.css';

import HeroSlider from './HeroSlider/HeroSlider';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <HeroSlider />
        <div className="landing-page-description">
          <h1>Clothing Store Demo App</h1>
          <p>This is a Clothing Store demo app created with React, Node, and PostgreSQL. Click "Shop" above to start browsing our selection.</p>
          <p>To login to a demo account, use the username "test" with the password "abc123".</p>
          <p><a href="https://github.com/krogank9/forum-client">Client</a>: React, HTML, CSS. <a href="https://github.com/krogank9/forum-server">Server</a>: Node, ExpressJS, PostgreSQL.</p>
          <p>Created by <a href="http://ltkdigital.com">Logan Krumbhaar</a>.</p>
        </div>
      </div>
    );
  }
}

export default LandingPage;