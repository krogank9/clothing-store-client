import React, { Component } from 'react';

import Utils from "../../../utils";

import { Link } from 'react-router-dom';

class Collection extends Component {
  render() {
    return (
      <li className="collection-li margin-bottom-30">
        <Link to={`/collections/${Utils.normalizeName(this.props.name)}.${this.props.collectionId}`}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/collections/${Utils.normalizeName(this.props.name)}.jpg`}></img>
          </div>
          <div>
            {this.props.name}
          </div>
        </Link>
      </li>
    );
  }
}

export default Collection;