<template>
  <div class="recommendCarList">
    <ul v-if="showList">
      <li v-for="item of carList" :key="item.carSeriesId">
        <div>
          <img v-lazy="item.mainPic" alt="">
        </div>
        <i :class="'iconfont icon-'+item.carSeriesId"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommendCarList',
  props: {
    carList: Array
  },
  computed: {
    showList () {
      return this.carList.length
    }
  }
}
</script>

<style lang='stylus' scoped>
  .recommendCarList
    margin 20px 0
    ul
      display flex
      justify-content space-between
      flex-wrap wrap
      li
        float left
        width 49%
        margin-bottom 5px
        text-align center
        div
          height 0
          overflow hidden
          padding-bottom 54.6916%
          img
            width 100%
</style>
