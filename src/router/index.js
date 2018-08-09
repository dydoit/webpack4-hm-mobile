import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('../views/city/city.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/buy',
      name: 'Buy',
      component: () => import('../views/buy/buy.vue')
    },
    {
      path: 'customMade',
      name: 'CustomMade',
      component: () => import('../views/customMade/customMade.vue')
    },
    {
      path: '/hotActivity',
      name: 'HotActivity',
      component: () => import('../views/hotActivity/hotActivity.vue')
    },
    {
      path: '/forum',
      name: 'Forum',
      component: () => import('../views/forum/forum.vue')
    },
    {
      path: 'findShop',
      name: 'FindShop',
      component: () => import('../views/findShop/findShop.vue')
    },
    {
      path: '/sell',
      name: 'Sell',
      component: () => import('../views/sell/sell.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('../views/product/product.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/news/news.vue')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
