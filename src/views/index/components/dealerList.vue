<template>
  <div class="dealer">
    <ul>
      <li class="dealer-item" v-for="(item, i) in dealerList" :key="i">
        <div class="dealer-item-name">
          <div class="img-wrapper">
            <img :src="item.shopLogoUrl" alt='经销商logo'>
          </div>
          <dl class="img-detail">
            <dt>{{item.shopName}}</dt>
            <dd>
              <star :score = "item.shopScore"></star>
            </dd>
            <dd class="address">
              <span>地址：</span>
              <span>{{item.shopAddress}}</span>
            </dd>
            <dd>电话：{{item.phone}}</dd>
          </dl>
        </div>
        <div class="dealer-intro" v-for="(act, index) of item.actList" :key="index">
          <i v-html="swicthType(act.actType)"></i>
          <span>{{act.title}}</span>
        </div>
        <div class="dealer-intro" v-for="(news, index) of item.newsList" :key="index">
          <i>新闻</i>
          <span>{{news.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Star from '@/components/star/star.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    dealerList: {
      type: Array,
      default: []
    }
  },
  components: {
    Star
  },
  methods: {
    swicthType (type) {
      if (type === '1') {
        return '优惠券'
      }
      if (type === '2') {
        return '代金券'
      }
      if (type === '3') {
        return '报名'
      }
      if (type === '4') {
        return '团购'
      }
      if (type === '5') {
        return '促销'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/common/styles/mixins.styl'
  .dealer
    padding 5px 10px
  .dealer-item
    padding:13px 9px
    margin-bottom 13px
    background-color #fff
  .dealer-item-name
      display flex
      .img-wrapper
        width 129px
        margin-right 9px
        img 
          width 129px
      .img-detail
        flex 1
        dt
          font-size 14px
        dd 
          margin 7px 0
          font-size 11px
          &.address
            display flex
            span 
              &:first-child
                width 36px
              &:last-child
                flex 1
    .dealer-intro
      margin 12px 0
      line-height 1
      font-size 11px
      color #999
      >i 
        padding 2px 3px 1px
        margin-right 7px
        background-color #FF4B1F
        font-size 10px
        font-style normal
        color #fff

</style>

