<template>
  <div class="activity">
    <PanelTitle :title="title"></PanelTitle>
    <ActivityList :list="actList"></ActivityList>
  </div>
</template>
<script>
import PanelTitle from './panelTitle.vue'
import ActivityList from './activityList.vue'
export default {
  data () {
    return {
      title: '热门活动'
    }
  },
  props: {
    actList: Array
  },
  components: {
    PanelTitle,
    ActivityList
  }
}
</script>
<style lang="stylus"scoped>
  .activity >>> .title-text
    color #fff
  .activity
    padding 20px 10px 10px 10px
    background-color #444
</style>

