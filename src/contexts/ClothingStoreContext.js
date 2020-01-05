import React from 'react'

const ClothingStoreContext = React.createContext({
    loggedInUser: null,
    "onUserLoggedIn": () => {},
    "onUserLogout": () => {},
    cart: [],
    "pushToCart": () => {},
    "removeFromCart": () => {},
})

export default ClothingStoreContext