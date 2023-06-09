import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      cartIsOpen: false,
      products: {},
      favorites: {},
      registeredUser: {
        firstname: '',
        lastname: '',
        adress: '',
        email: '',
        birthday: '',
        password: ''
      },
      contact: {
        email: ''
      },
      logClicks: [],
      clicks: ''
      // {
      //   allproducts: '',
      //   xbox: '',
      //   nintendo: '',
      //   pc: '',
      //   playstation: ''
      // }
    }
  },

  mutations: {
    addToCart(state, inputProduct) {
      const productId = inputProduct.id
      if (state.products[productId]) {
        state.products[productId].quantity++
      } else {
        state.products[productId] = { ...inputProduct, quantity: 1 }
      }
    },
    openCart(state) {
      state.cartIsOpen = true
    },
    closeCart(state) {
      state.cartIsOpen = false
    },
    toggleCart(state) {
      state.cartIsOpen = !state.cartIsOpen
    },
    deleteProduct(state, productId) {
      delete state.products[productId]
    },
    decreaseProduct(state, productId) {
      const product = state.products[productId]
      if (product.quantity > 1) {
        product.quantity--
      } else {
        delete state.products[productId]
      }
    },
    increaseProduct(state, productId) {
      const product = state.products[productId]
      {
        product.quantity++
        product.price++
      }
    },
    addOrRemoveFavorites(state, product) {
      if (state.favorites[product.id] !== undefined) {
        delete state.favorites[product.id]
      } else {
        state.favorites[product.id] = product
      }
    },
    removeFavorites(state, objectID) {
      delete state.favorites[objectID]
    },
    registerUser(state, registeredUser) {
      state.registeredUser = registeredUser
    },
    contactform(state, contact) {
      state.contact = contact
    },
    //Diagram
    statisticsLog(state, routes) {
      state.logClicks.push(routes)
      localStorage.setItem('log', JSON.stringify(state.logClicks))
    },
    clicksProducts(state, productClicks) {
      state.clicks = productClicks
      localStorage.setItem('clicks', JSON.stringify(state.clicks))
    }
  }
})

export default store
