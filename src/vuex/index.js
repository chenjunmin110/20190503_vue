import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import order from './modules/order'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    order
  }
})
