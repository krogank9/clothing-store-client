import React from 'react';
import { withRouter } from "react-router-dom";

import './ViewCollectionPage.css';

import ClothingStoreApiService from '../../services/clothing-store-api-service';
import Utils from "../../utils";

import { Link } from "react-router-dom";

import Product from './Product/Product';

class ViewCollectionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collectionName: null,
      products: [],
      notFoundError: false,
      fetchError: false,
      loaded: false
    }
  }

  componentDidMount() {
    let collectionId = this.props.match.params.collectionName.split(".").pop();

    ClothingStoreApiService.getCollectionById(parseInt(collectionId))
      .then(json => {
        Utils.setCollectionURL(this.props.history, Utils.normalizeName(json.name), collectionId)
        const collectionName = json.name

        ClothingStoreApiService.getProductsInCollection(parseInt(collectionId))
          .then(json => {
            this.setState({ collectionName: collectionName, products: json, loaded: true });
          })
          .catch(e => {
            this.setState({ fetchError: true });
          })
      })
      .catch(e => {
        const notFound = e.error && e.error.message.indexOf("doesn't exist") >= 0;
        this.setState({ notFoundError: notFound, fetchError: !notFound });
      })
  }


  render() {
    let content = false

    if (this.state.fetchError) {
      content = <div>Error connecting to the server. Please try again later.</div>
    }
    else if (this.state.notFoundError) {
      content = <div>Collection not found. 404</div>
    }
    else if (!this.state.loaded) {
      content = <div>Loading...</div>
    }
    else { // loaded
      let products = this.state.products.map((p, i) => (
        <Product
          name={p.name}
          productId={p.id}
          key={i} />
      ))
      content = (
        <ul className="product-list">{products}</ul>
      )
    }

    return (
      <div className="cart-page">
        <h1>{this.state.collectionName}</h1>
        <div className="collection-grid">

          {content}

        </div>
      </div>
    );
  }
}

export default withRouter(ViewCollectionPage);