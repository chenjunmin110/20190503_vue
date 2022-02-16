// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Grid from 'vue-js-grid'
import utils from './utils'
import vueTouch from 'kim-vue-touch'
// import './components/js/rem'
Vue.use(vueTouch)

Vue.use(Grid)
Vue.use(utils)
Vue.prototype.$http = axios
Vue.prototype.$center = new Vue()
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  console.log(to, 'to')
  console.log(from, 'from')
  console.log(next, 'next')
  // let token = router.app.$storage.fetch('token')
  // let needAuth = to.matched.some(item => item.meta.login)
  // if (!token && needAuth) return next({path: '/login'})
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
