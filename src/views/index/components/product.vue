<template>
  <div class="product">
    <PanelTitle :title="title"></PanelTitle>
  </div>
</template>
<script>
import PanelTitle from './panelTitle.vue'
export default {
  data () {
    return {
      title: '车用品'
    }
  },
  components: {
    PanelTitle
  }
}
</script>
<style lang="stylus" scoped>
  .product >>> .title-text
    color #fff
  .product
    padding 20px 8px 10px 11px
    background-color #444
</style>


