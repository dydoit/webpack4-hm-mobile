import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home/home.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/index/index.vue')
        },
        {
          path: 'buy',
          name: 'Buy',
          component: () => import('../views/buy/buy.vue')
        }
      ]
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
      path: '/register',
      name: 'Register',
      component: () => import('../views/register/register.vue')
    },
    {
      path: '/findPass',
      name: 'findPass',
      component: () => import('../views/register/register.vue')
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
      path: '/shopCar',
      name: 'ShopCar',
      component: () => import('../views/shopCar/index.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('../views/user/index.vue')
    }
  ]
})
