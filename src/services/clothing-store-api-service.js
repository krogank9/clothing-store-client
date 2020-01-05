import config from '../config'

const ClothingStoreApiService = {
  // Auth
  login(user_name, password) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name: user_name,
        password: password,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  refresh(authToken) {
    return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Collections
  getCollections() {
    return fetch(`${config.API_ENDPOINT}/collections`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCollectionById(id) {
    return fetch(`${config.API_ENDPOINT}/collections/${id}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Products
  getProductInfo(productId) {
    return fetch(`${config.API_ENDPOINT}/products/${productId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getProductsInCollection(collectionId) {
    return fetch(`${config.API_ENDPOINT}/products?collection_id=${collectionId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Favorites
  getMyFavorites(authToken) {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postFavorite(authToken, productId) {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        product_id: productId,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteFavorite(authToken, favoriteId) {
    return fetch(`${config.API_ENDPOINT}/favorites/${favoriteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Reviews
  getReviewsForProduct(productId) {
    return fetch(`${config.API_ENDPOINT}/reviews?product_id=${productId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postReview(authToken, productId, rating, headline, content) {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        product_id: productId,
        rating: rating,
        headline: headline,
        content: content,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteReview(authToken, reviewId) {
    return fetch(`${config.API_ENDPOINT}/favorites/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // Users
  registerUser(user_name, password, profile_picture) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name: user_name,
        password: password,
        profile_picture: profile_picture
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ClothingStoreApiService