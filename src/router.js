import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/products'
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('./views/NotFound.vue')
    }
  ]
})
