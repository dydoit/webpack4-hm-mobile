<template>
  <div class="financialList">
    <ul>
      <li v-for="item of list" :key="item.productId">
        <div class="img-wrapper">
          <img :src="item.coverImg" alt="">
        </div>
        <p>{{item.planName}}</p>
        <p>
          <i :class="'iconfont icon-'+item.carSeriesId"></i>
          <span>{{ item.orgName }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'financialList',
  data () {
    return {

    }
  },
  props: {
    list: Array
  }
}
</script>
<style lang="stylus">
  .financialList
    margin 20px 0
    ul
      display flex
      justify-content space-between
      flex-wrap wrap
      li
        width 49%
        margin-bottom 12px
        padding-bottom 10px
        background #fff
        .img-wrapper
          height 0
          overflow hidden
          padding-bottom 62.5%
          img
            width 100%
        p
          display flex
          justify-content space-between
          padding 0 6px
          &:nth-of-type(1)
            margin 8px 0
            font-size 14px
            color #333
            font-weight 600
          span
            font-size 11px
            color #aaa
          i
            font-size 14px

</style>


