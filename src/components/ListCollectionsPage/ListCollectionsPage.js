import React from 'react';
import './ListCollectionsPage.css';

import ClothingStoreApiService from '../../services/clothing-store-api-service';

import { Link } from "react-router-dom";

import Collection from './Collection/Collection';

class ListCollectionsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: [],
      loaded: false,
      error: null
    }
  }

  componentDidMount() {
    ClothingStoreApiService.getCollections()
      .then(json => {
        this.setState({collections: json, loaded: true});
      })
      .catch(e => {
        this.setState({error: true});
      })
  }

  render() {
    let content = false
    if(this.state.error) {
      content = <div>Could not load collections. Please try again later.</div>
    }
    else if(!this.state.loaded) {
      content = <div>Loading...</div>
    }
    else { // loaded
      let collections = this.state.collections.map((c, i) => <Collection name={c.name} collectionId={c.id} key={i} />)
      content = <ul className="collection-list">{collections}</ul>
    }

    return (
      <div className="cart-page">
        <h1>Collections</h1>

        {content}

      </div>
    );
  }
}

export default ListCollectionsPage;
