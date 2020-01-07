import React, { Component } from 'react';

import Utils from "../../../utils";

import { Link } from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <tr className="review-li">
        <div className="review-content">
          <div>
            User: {this.props.userName}
          </div>
          <div>{Utils.getRatingText(this.props.rating)}  <b>{this.props.headline}</b></div>
          <div className="review-date">Reviewed on {Utils.dateToHumanReadable(this.props.reviewDate)}</div>
        <div>{this.props.content}</div>
        </div>
      </tr>
    );
  }
}

export default Review;