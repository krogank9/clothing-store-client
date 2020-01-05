import React from 'react';
import { withRouter } from "react-router-dom";

import './ViewProductPage.css';

import TokenService from '../../services/token-service';
import CartService from '../../services/cart-service';
import ClothingStoreApiService from '../../services/clothing-store-api-service';
import ClothingStoreContext from '../../contexts/ClothingStoreContext';

import Utils from "../../utils";

import { Link } from "react-router-dom";

class ViewProductPage extends React.Component {
  static contextType = ClothingStoreContext

  constructor() {
    super();

    this.state = {
      product: null,
      loaded: false,
      error: null,
      message: "",
      messageIsError: true,
    }
  }

  favoriteProduct = () => {
    ClothingStoreApiService.postFavorite(TokenService.getAuthToken(), this.state.product.id)
      .then(json => {
        this.setState({ message: "Successfully favorited item", messageIsError: false });
      })
      .catch(e => {
        this.setState({ message: "Couldn't favorite item", messageIsError: true });
      })
  }

  addToCart = () => {
    if (this.context.pushToCart(this.state.product.id)) {
      this.setState({ message: "Added item to cart", messageIsError: false });
    }
    else {
      this.setState({ message: "Cart is full. Please remove some items or checkout with your current selection.", messageIsError: true });
    }
  }

  componentDidMount() {
    let productId = this.props.match.params.productName.split(".").pop();

    ClothingStoreApiService.getProductInfo(productId)
      .then(json => {
        Utils.setProductURL(this.props.history, Utils.normalizeName(json.name), productId)
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
    else { // loaded
      content = (
        <div className="item-page">
          <h1>{this.state.product.name}</h1>
          <div>

            <div>
              <Link to={`/products/${Utils.normalizeName(this.state.product.name)}.${this.state.product.id}/reviews`} className="review-link">
                {Utils.getRatingText(this.state.product.rating, this.state.product.numReviews, false)}
              </Link>
            </div>

            <br />

            <div className="collection-box">
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/products/shirt.jpg`}></img>
              </div>
              <div>
                {this.state.product.description}
              </div>
              <div className="item-buttons-container">
                <Link to="#" className="item-button" onClick={this.favoriteProduct}>Favorite Item</Link>
                <Link to="#" className="item-button" onClick={this.addToCart}>Add to cart</Link>
              </div>
              <div className={this.state.messageIsError ? "form-error" : "form-success"}>
                {this.state.message}
              </div>
            </div>

          </div>
        </div>
      );
    }

    return content;
  }
}

export default withRouter(ViewProductPage);