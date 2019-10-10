import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  /*mode: 'history',
  base: process.env.BASE_URL,*/
  routes: [
    {
      path: '/',
      name: 'loginView',
      component: () => import('./views/loginView.vue')
    },
    {
      path: '/mainView',
      name: 'mainView',
      component: () => import('./views/mainView.vue')
    }
  ]
})
