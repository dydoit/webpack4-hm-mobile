<template>
  <div class="recommended">
    <PanelTitle :title="title"></PanelTitle>
    <recommendedCarList :carList = "recommendedCarList"></recommendedCarList>
  </div>
</template>

<script>
import PanelTitle from './panelTitle'
import recommendedCarList from './recommendedCarList.vue'
export default {
  name: 'recommendedModel',
  data () {
    return {
      title: '推荐车型'
    }
  },
  props: {
    recommendedCarList: Array
  },
  components: {
    PanelTitle,
    recommendedCarList
  }
}
</script>

<style lang="stylus">
  .recommended
    padding 20px 10px 10px 10px
    background-color #fff

</style>
