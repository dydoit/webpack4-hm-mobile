<template>
  <div class="title">
    <div :class="[isHasClass?'blue':'']">
      {{title}}
      <span></span>
    </div>
    <div>
      <span>查看更多</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {

    }
  },
  props: {
    title: String,
    isHasClass: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
  .title
    display flex
    justify-content space-between
    padding 20px 10px 10px 10px
    div
      &:first-child
        position relative
        font-size 15px
        font-weight 600
        color #333
        span
          position absolute
          display block
          width 2em
          height 2px
          background-color #ff8c00
      &:last-child
        font-size 12px
        color #aaa
        i
          font-size 10px
      &.blue
        color #fff
</style>
