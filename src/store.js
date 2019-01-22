import Vue from 'vue'
import Vuex from 'vuex'
import items from './store/Items'
import cartItems from './store/Cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items,
    cartItems
  },
  getters: {
    getItems: (state) => state.items,
    getCartItems: (state) => state.cartItems 
  },
  mutations: {
    addCartItem(state, item) {
      state.cartItems.push(item);
    },
    deleteCartItem(state, item) {
      state.cartItems.splice(item, 1);
    },
    clearCart(state) {
      state.cartItems = [];
    }
  },
  actions: {
    addCartItem({commit}, item) {
      commit('addCartItem', item)
    },
    deleteCartItem({commit}, item) {
      commit('deleteCartItem', item);
    },
    clearCart({commit}) {
      commit('clearCart');
    }
  }
})
