import React from 'react';
import './StarRatingInput.css';

import { Link } from "react-router-dom";

class StarRatingInput extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    }
  }

  whichChild(elem) {
    var i = 0;
    while ((elem = elem.previousSibling) != null)++i;
    return i;
  }

  starClicked = (evt) => {
    // get # of star clicked 1 thru 5
    let numStar = this.whichChild(evt.target) + 1
    this.setState({rating: numStar})

    if (this.props.onRatingChange) {
      this.props.onRatingChange(numStar)
    }
  }

  render() {
    return (
      <div className="reviews-page">
        <span className="input-star" onClick={this.starClicked}>{this.state.rating >= 1 ? "★" : "✰"}</span>
        <span className="input-star" onClick={this.starClicked}>{this.state.rating >= 2 ? "★" : "✰"}</span>
        <span className="input-star" onClick={this.starClicked}>{this.state.rating >= 3 ? "★" : "✰"}</span>
        <span className="input-star" onClick={this.starClicked}>{this.state.rating >= 4 ? "★" : "✰"}</span>
        <span className="input-star" onClick={this.starClicked}>{this.state.rating >= 5 ? "★" : "✰"}</span>
      </div>
    );
  }
}

export default StarRatingInput;