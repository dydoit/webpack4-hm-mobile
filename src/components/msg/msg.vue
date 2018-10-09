<template>
  <fade-in>
    <div class="msg" v-show="isShowMsg">
      {{msg}}
    </div>
  </fade-in>
</template>
<script>
import FadeIn from '@/components/animations/fade.vue'
export default {
  data () {
    return {
      msg: '',
      isShowMsg: false
    }
  },
  components: {
    FadeIn
  },
  methods: {
    show (text) {
      this.msg = text
      this.isShowMsg = true
      setTimeout(() => {
        this.isShowMsg = false
      }, 1500)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .msg
    position fixed
    top 50%
    left 50%
    z-index 999
    transform translate(-50%,-50%)
    height 40px
    line-height 40px
    padding 0 10px
    background-color rgba(0,0,0,.5)
    border-radius 4px
    font-size 12px
    font-weight 600
    color #fff
    
</style>


