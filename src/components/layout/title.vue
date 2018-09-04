<template>
  <div class="title">
    <i class="iconfont icon-biaotilanback" @click="returnBack"></i>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['title'],
  methods: {
    returnBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .title
    position relative
    height 49px
    line-height 49px
    text-align center
    font-size 15px
    font-weight 600
    color #333
    i 
      position absolute
      left 12px
      top 50%
      transform translateY(-50%)
    


</style>


