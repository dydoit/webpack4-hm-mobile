<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id" @click.stop="go()">
        <img class="swiper-img" :src="item.imagePath" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
    .wrapper
      overflow hidden
      width:100%
      height:0
      padding-bottom 22.61%
      background-color #eee
      .swiper-img
        width: 100%
</style>

