<template>
  <div class="financialActivity">
    <PanelTitle :title="title"></PanelTitle>
    <financialList :list="financialList"></financialList>
  </div>
</template>

<script>
import PanelTitle from './panelTitle.vue'
import financialList from './financialList.vue'
export default {
  name: 'financialActivity',
  data () {
    return {
      title: '金融活动'
    }
  },
  props: {
    financialList: Array
  },
  components: {
    PanelTitle,
    financialList
  }
}
</script>

<style lang="stylus" scoped>
  .financialActivity >>> .title-text
    color #fff
  .financialActivity
    padding 20px 10px 10px 10px
    background-color #444
</style>
