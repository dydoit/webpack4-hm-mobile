<template>
  <div class="star">
    <div class="star-wrapper">
      <span v-for="(item, i) of totalNum" :key="i"  class="iconfont icon-Star" @click="selectScore(i)"></span>
    </div>
    <div class="star-mask" :style="starStyle">
      <span v-for="(item, i) of totalNum" :key="i"  class="iconfont icon-Star"></span>
    </div>
  </div>
</template>
<script>
const total = 5
export default {
  data () {
    return {
      totalNum: total,
      temporaryVal: 0
    }
  },
  props: {
    score: {
      type: Number,
      default: 1
    }
  },
  computed: {
    starStyle () {
      const spanWidth = 16.91
      const score = this.score
      const marginLeft = 3
      if (score > 1) {
        return {
          width: `${spanWidth * score + marginLeft * (score - 1)}px`
        }
      }
      return {
        width: `${spanWidth * score}px`
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
  .star
    position relative
  .star-wrapper
    span 
      color #ccc
    span + span
      margin-left 3px
  .star-mask
    position absolute
    left 0
    top 0
    overflow hidden
    span 
      color #ff8c00
      &+span
        margin-left 3px        
</style>

