import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import 'whatwg-fetch'
import FastClick from 'fastclick'
import VueAwasomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from './store'
import 'common/styles/global.styl'
import 'swiper/dist/css/swiper.css'
import confirm from 'components/confirm'
/* eslint-disable no-unused-vars */
import VConsole from 'vconsole/dist/vconsole.min.js'
let vConsole = new VConsole()
Vue.use(confirm)
Vue.use(VueLazyload)
Vue.use(VueAwasomeSwiper)
FastClick.attach(document.body)
Vue.use(VueLazyload, { // 此项目没有懒加载的素材图片
  preLoad: 1.3,
  error: './common/images/lazy.gif',
  loading: './common/images/lazy.gif',
  attempt: 1
})

new Vue({
  el: '#root',
  router,
  store,
  render: (h) => h(App)
})
