<template>
  <div class="activityList">
    <ul>
      <li v-for="item of actList" :key="item.actId">
        <div class="img-wrapper">
          <span>优惠券</span>
          <img v-lazy="item.coverImg" alt="">
        </div>
        <p>{{item.title}}</p>
        <p>
          {{item.actBrief}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'activityList',
  data () {
    return {

    }
  },
  props: {
    actList: Array
  }
}
</script>
<style lang="stylus" scoped>
  .activityList
    padding 20px 10px 10px 10px
    ul
      display flex
      justify-content space-between
      flex-wrap wrap
      li
        width 48.5%
        margin-bottom 12px
        padding-bottom 10px
        .img-wrapper
          position relative
          height 0
          overflow hidden
          padding-bottom 100%
          span
            position absolute
            width 49px
            height 19px
            line-height 19px
            text-align center
            font-size 10px
            color #fff
            background url(../../../common/images/bgcover.png)
            background-size 100% 100%
          img
            width 100%
        p
          text-align justify
          &:nth-of-type(1)
            margin 4px 0
            font-size 14px
            color #fff
            font-weight 500
          &:nth-of-type(2)
            font-size 12px
            color #aaa

</style>


