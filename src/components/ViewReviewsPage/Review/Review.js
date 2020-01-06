import React, { Component } from 'react';

import Utils from "../../../utils";

import { Link } from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <li className="review-li">
        <div>
          <div>
            {this.props.userName} says: {this.props.headline}
          </div>
          <div>{Utils.getRatingText(this.props.rating)}</div>
          <div>{this.props.content}</div>
        </div>
      </li>
    );
  }
}

export default Review;