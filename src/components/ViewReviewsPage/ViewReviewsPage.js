import React from 'react';
import { withRouter } from "react-router-dom";

import './ViewReviewsPage.css';

import ClothingStoreApiService from '../../services/clothing-store-api-service';
import Utils from "../../utils";

import Review from './Review/Review';

import { Link } from "react-router-dom";

class ViewReviewsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      product: null,
      reviews: [],
      loaded: false,
      error: null
    }
  }

  componentDidMount() {
    let productId = this.props.match.params.productName.split(".").pop();

    ClothingStoreApiService.getProductInfo(productId)
      .then(json => {
        Utils.setProductURL(this.props.history, Utils.normalizeName(json.name), productId, "/reviews")
        this.setState({ product: json });

        ClothingStoreApiService.getReviewsForProduct(productId)
          .then(json => {
            this.setState({ reviews: json, loaded: true });
          })
          .catch(e => {
            this.setState({ error: true });
          })
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
      console.log(this.state.reviews)
      let reviews = this.state.reviews.map((r, i) => <Review userName={r.user_name} reviewDate={r.date_created} headline={r.headline} rating={r.rating} content={r.content} key={i} />)

      content = (
        <div className="reviews-page cart-page">
          <h1>{this.state.product.name}</h1>
          <div>
            <Link to={`/products/${Utils.normalizeName(this.state.product.name)}.${this.state.product.id}`}>Go back</Link>
            &nbsp;
            <Link to={`/products/${Utils.normalizeName(this.state.product.name)}.${this.state.product.id}/write-review`}>Write a review</Link>
          </div>
          <h2>Reviews</h2>

          <table className="review-list cart-table">
            <tbody>
              <tr>
                <th>Reviews</th>
              </tr>

              {reviews}
            </tbody>
          </table>
        </div>
      );
    }

    return content
  }
}

export default withRouter(ViewReviewsPage);