import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pages',
      component: resolve => require(['@/pages'], resolve)
    },
    {
      path: '/pages',
      name: 'pages',
      component: resolve => require(['@/pages'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['@/pages/home'], resolve),
          children: [{
            path: 'sk1',
            name: 'sk1',
            component: resolve => require(['@/pages/home/sk1'], resolve),
            beforeEnter: (to, from, next) => {
              console.log(to, 'beforeEnterto')
              console.log(from, 'beforeEnterfrom')
              next()
            },
            beforeLeave: (to, from, next) => {
              console.log(to, 'beforeLeaveto')
              console.log(from, 'beforeLeavefrom')
              next()
              // ...
            }
          }]
        },
        {
          path: 'order',
          name: 'order',
          component: resolve => require(['@/pages/order'], resolve)
        },
        {
          path: 'mine',
          name: 'mine',
          component: resolve => require(['@/pages/mine'], resolve)
        },
        {
          path: 'demo',
          name: '<router-view/>',
          component: resolve => require(['@/pages/demo'], resolve)
        }
      ]
    },
    {
      path: '/sk2',
      name: 'sk2',
      component: resolve => require(['@/pages/home/sk2'], resolve)
    },
    {
      path: '/shop',
      name: 'shop',
      component: resolve => require(['@/pages/shop'], resolve)
    }
  ]
})
