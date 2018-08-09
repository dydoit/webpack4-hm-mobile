<template>
  <router-link tag ="div" id="cityHeader" to="/">
     <i class="iconfont icon-biaotilanback"></i>
     {{title}}
  </router-link>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang="stylus" scoped>
  #cityHeader
    position relative
    z-index 1
    line-height 49px;
    text-align center;
    font-size 15px;
    font-weight 600
    color #333;
    background-color #fff
    >i
      position absolute;
      left:11px;

</style>


