import React from 'react'

const ClothingStoreContext = React.createContext({
    loggedInUser: null,
    "onUserLoggedIn": () => {},
    "onUserLogout": () => {},
})

export default ClothingStoreContext