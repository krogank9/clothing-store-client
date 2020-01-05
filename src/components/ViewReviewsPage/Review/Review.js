import React, { Component } from 'react';

import Utils from "../../../utils";

import { Link } from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <li className="review-li">
        <div>
          {this.props.userName}
          {this.props.headline}
          {Utils.getRatingText(this.props.rating)}
          <div>{this.props.content}</div>
        </div>
      </li>
    );
  }
}

export default Review;