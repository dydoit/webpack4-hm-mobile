<template>
  <div class="activityList" v-if="showList">
    <ul>
      <li v-for="item of list" :key="item.actId">
        <div class="img-wrapper">
          <span>优惠券</span>
          <img :src="item.coverImg" alt="">
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
    list: Array
  },
  computed: {
    showList () {
      return this.list.length
    }
  }

}
</script>
<style lang="stylus" scoped>
  .activityList
    margin 20px 0
    ul
      display flex
      justify-content space-between
      flex-wrap wrap
      li
        width 49%
        margin-bottom 12px
        padding-bottom 10px
        .img-wrapper
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
            background url(../../../images/bgcover.png)
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


