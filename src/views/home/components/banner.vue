<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="item of bannerList" :key="item.id" @click.stop="go()">
        <img class="swiper-img" :src="item.imagePath" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'BannerSwipper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        observer: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.bannerList.length
    }
  },
  props: {
    bannerList: Array
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #ff8c00
  .wrapper
    overflow hidden
    width:100%
    height:0
    padding-bottom 35.41%
    background-color #eee
    .swiper-img
      width: 100%

</style>


