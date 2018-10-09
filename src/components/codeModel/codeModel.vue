<template>
  <fade-in>
    <div class="code-mask" @click="hideKeyboard" v-show="isShowCodeModel">
      <div class="code-wrap" ref="codeWrap">
        <div class="off-wrap">
          <i class="off-btn" @click="hideCodeModel"></i>
        </div>
        <div class="code-content">
          <h4>请输入图形验证码</h4>
          <div class="code-img">
            <img :src="codeUrl" alt="">
          </div>
          <div class="code-again">
            <a href="javascript:;">看不清，换一组</a>
          </div>
          <ul class="code-input-wrapper" @click.stop="showKeyboard">
            <li>{{codeTexts[0]}}</li>
            <li>{{codeTexts[1]}}</li>
            <li>{{codeTexts[2]}}</li>
            <li>{{codeTexts[3]}}</li>
          </ul>
          <p class="error" v-show="inputWrong">
            <span class="icon">!</span> 验证码输入错误
          </p>
        </div>
      </div>
    </div>
  </fade-in>
</template>
<script>
import FadeIn from '@/components/animations/fade.vue'
import * as api from '@/api'
import {bus} from '@/components/bus/bus.vue'
export default {
  data () {
    return {
      code: '',
      codeUrl: '',
      codeTexts: [],
      inputWrong: false
    }
  },
  props: {
    isShowCodeModel: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShowCodeModel (newVal) {
      if (newVal) {
        this.codeTexts = []
        bus.$emit('initKeyboard')
        this.getCode()
      }
    }
  },
  created () {
    bus.$on('sendText', contents => {
      this.codeTexts = contents
      if (this.codeTexts.length === 4) {
        this.$emit('hideKeyboard')
        setTimeout(() => {
          this.checkCode()
        }, 200)
      }
    })
  },
  components: {
    FadeIn
  },
  methods: {
    getCode () {
      api.getCodeImg().then(res => {
        if (res.success) {
          this.code = res.data.code
          this.codeUrl = res.data.codeBase64
        }
      })
    },
    checkCode () {
      let inputCode = this.codeTexts.join('')
      if (inputCode.toLowerCase() === this.code.toLowerCase()) {
        console.log('进来美')
        this.$emit('valid')
        this.$emit('countdown')
      } else {
        this.inputWrong = true
        this.codeTexts = []
        bus.$emit('initKeyboard')
        this.getCode()
      }
    },
    showKeyboard () {
      this.$emit('showKeyboard')
      this.inputWrong = false
    },
    hideKeyboard () {
      this.$emit('hideKeyboard')
    },
    hideCodeModel () {
      this.$emit('hideCodeModel')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .code-mask
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 999
    background-color rgba(0,0,0,.4)
  .code-wrap
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    width 276px
    padding-bottom 10px
    border-radius 2px
    background-color #fff
    .off-wrap
      padding 10px
      text-align right
      i 
        display inline-block
        width 13px
        height 11px
        background url('~@/common/images/off.png')
    .code-content
      text-align center
      >h4
        margin-bottom 18px
        line-height 1
        font-size 14px
        font-weight 600
        color #333
      .code-img
        height 35px
        margin-bottom 10px
        text-align center  
      .code-again
        a
          margin-bottom 15px
          font-size 12px
          color #aaa
      .code-input-wrapper
        display flex
        justify-content space-between
        width 165px
        height 30px
        margin 15px auto
        >li 
          width 30px
          height 30px
          line-height 30px
          text-align center
          border 1px solid #979797
          border-radius 2px 
      .error
        font-size 11px
        color #FF4F4F
        >.icon
          display inline-block
          vertical-align bottom
          width 14px
          height 14px
          margin-right 5px
          line-height 14px
          border-radius 50%
          border 1px solid #FF4F4F
          font-size 10px
          text-align center
         
</style>


