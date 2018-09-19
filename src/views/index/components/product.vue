<template>
  <div class="product">
    <ul>
      <li v-for="item of productList" :key="item.productId">
        <div class="img-wrapper">
          <img :src="item.mainPicUrl" alt="">
        </div>
        <p>{{item.productName}}</p>
        <div class="info">
          <p>
            <span>{{item.specification.realPrice}}元</span>
            <del>{{item.specification.price}}</del>
          </p>
          <span>已售{{item.sold}}件</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    productList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/common/styles/mixins.styl'
  .product
    padding 11px
    ul
      display flex
      justify-content space-between
      flex-wrap wrap
      li
        width 48.5%
        margin-bottom 12px
        padding-bottom 10px
        background-color #fff
        .img-wrapper
          height 0
          overflow hidden
          padding-bottom 100%
          img
            width 100%
        >p
          padding 0 14px
          margin-top 8px
          color #333
          font-size 13px
          ellipsis()
        .info
          display flex
          justify-content space-between
          padding 0 14px
          margin-top 9px
          >span 
            font-size 9px
            color #aaa
          >p
           span 
            font-size 13px
            color #ff8c00
          del
            font-size 10px
            color #9A9A9A          
            

</style>


