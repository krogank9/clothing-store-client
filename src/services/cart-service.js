import config from '../config'

const CartService = {
  getCartItems() {
    let cartArray = JSON.parse(window.localStorage.getItem(config.CART_KEY))
    if(!Array.isArray(cartArray)) {
      cartArray = []
    }
    return cartArray
  },
  pushCartItem(id) {
    let curCart = CartService.getCartItems()
    if(!Array.isArray(curCart)) {
      curCart = []
    }
    window.localStorage.setItem(config.CART_KEY, JSON.stringify([...curCart, id]))
  },
  setCart(cart) {
    window.localStorage.setItem(config.CART_KEY, JSON.stringify(cart))
  },
  clearCart() {
    window.localStorage.removeItem(config.CART_KEY)
  },
}

export default CartService