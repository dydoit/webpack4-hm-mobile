import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: debug, // 检测state的修改是否来自mutation，有性能损耗，生产上不要开启。
  plugins: debug ? [createLogger()] : []
})
