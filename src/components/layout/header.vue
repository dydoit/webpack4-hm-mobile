<template>
  <div id="header">
      <router-link tag="div" to="/city">
        <i class="icon iconfont icon-dingwei1"></i>
        <span>{{city.alias}}</span>
      </router-link>
      <div>
        <img src="../../common/images/logo.png" alt="">
      </div>
      <div>
        <i class="icon iconfont icon-sousuotubiao"></i>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
  #header
    display:flex
    justify-content:center
    height:49px
    line-height:49px
    background-color:#000
    color:#fff
    div
      &:first-child,
      &:last-child
        position :absolute
        line-height 50px
      &:first-child
        left:11px
      &:last-child
        right:11px;
    img
      width:110px
</style>

