import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import 'whatwg-fetch'
import FastClick from 'fastclick'
import VueAwasomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/global.styl'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwasomeSwiper)
FastClick.attach(document.body)
new Vue({
  el: '#root',
  router,
  store,
  render: (h) => h(App)
})
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let intersect = new Set([...a].filter(item => !b.has(item)))
console.log(intersect)
