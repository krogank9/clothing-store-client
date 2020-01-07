import React from 'react';
import { withRouter } from "react-router-dom";

import './WriteReviewPage.css';

import TokenService from '../../services/token-service';
import ClothingStoreApiService from '../../services/clothing-store-api-service';
import ClothingStoreContext from '../../contexts/ClothingStoreContext';

import Utils from "../../utils";

import { Link } from "react-router-dom";

import StarRatingInput from "./StarRatingInput/StarRatingInput";

class WriteReviewPage extends React.Component {
  static contextType = ClothingStoreContext

  constructor() {
    super();

    this.state = {
      product: null,
      loaded: false,
      error: null,
      reviewRating: null,
      reviewHeadline: "",
      reviewContent: "",
      errorMessage: ""
    }
  }

  updateFormState = (evt) => {
    let name = evt.target.getAttribute("name")

    this.setState({ [name]: evt.target.value })
  }

  handleSubmitReviewForm = (evt) => {
    evt.preventDefault();
    let data = new FormData(evt.target);

    if(!this.state.reviewRating) {  
      this.setState({errorMessage: "Please add a rating"})
      return
    }

    if(this.state.reviewContent && !this.state.reviewHeadline) {
      this.setState({errorMessage: "Please add a headline to go along with content"})
      return
    }

    const headline = this.state.reviewHeadline || ""
    const content = headline? this.state.reviewContent || "" : ""

    console.log("headline:",headline)
    console.log("content:",content)

    if (this.context.loggedInUser) {
      ClothingStoreApiService.postReview(TokenService.getAuthToken(), this.state.product.id, this.state.reviewRating, headline, content)
        .then(json => {
          this.props.history.push(`/products/${Utils.normalizeName(this.state.product.name)}.${this.state.product.id}/reviews`)
        })
        .catch(e => {
          this.setState({ errorMessage: e.error })
        })
    }
    else {
      this.setState({ errorMessage: "Please log in to add a review" });
    }
  }

  componentDidMount() {
    let productId = this.props.match.params.productName.split(".").pop();

    ClothingStoreApiService.getProductInfo(productId)
      .then(json => {
        Utils.setProductURL(this.props.history, Utils.normalizeName(json.name), productId, "/write-review")
        this.setState({ product: json, loaded: true });
      })
      .catch(e => {
        this.setState({ error: true });
      })
  }

  render() {
    let content;

    if (this.state.error) {
      content = (
        <div>
          <h1>404. Could not find item</h1>
          <Link to="/">Home</Link>
        </div>
      )
    }
    else if (!this.state.loaded) {
      content = <div>Loading...</div>
    }
    else {
      content = (
        <div className="reviews-page">
          <h1>Create Review</h1>
          <div>{this.state.product.name}</div>
          <div>
            <Link to={`/products/${Utils.normalizeName(this.state.product.name)}.${this.state.product.id}`}>View Product</Link>
            &nbsp;
            <Link to={`/products/${Utils.normalizeName(this.state.product.name)}.${this.state.product.id}/reviews`}>View All Reviews</Link>
          </div>

          <form onSubmit={this.handleSubmitReviewForm}>
            <br />

            <div className="form-error">{this.state.errorMessage}</div>

            <h3>Overall rating</h3>
            <StarRatingInput onRatingChange={(rating) => this.setState({reviewRating: rating})} />

            <h3>Add a headline</h3>
            <div>
              <input type="text" className="reviewHeadline" name="reviewHeadline" placeholder="What's most important to know?" value={this.state.reviewHeadline} onChange={this.updateFormState}></input>
            </div>

            <h3>Write your review</h3>
            <div>
              <textarea className="reviewContent" rows="5" name="reviewContent" value={this.state.reviewContent} placeholder="What did you like or dislike? What did you use this product for?" onChange={this.updateFormState}>
              </textarea>
            </div>

            <input type="submit"></input>

          </form>
        </div>
      )
    }

    return content
  }
}

export default withRouter(WriteReviewPage);