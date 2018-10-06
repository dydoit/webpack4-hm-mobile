<template>
  <div class="login" ref="login">
    <Title :title="title"></Title>
    <div class="logo-wrapper">
      <img src= "../../common/images/haima-logo.png" alt="">
    </div>
    <div class="form-group">
      <div class="form-wrapper">
        <div class="username-wrapper border-bottom">
          <input type="tel" name="telephone" placeholder="请输入手机号码" @focus="errorMsg=''" v-model="telephoneNum">
        </div>
        <div class="password-wrapper" v-if="isShowPassword">
          <input type="password" v-model="password" name="password" key="password" placeholder="请输入密码">
        </div>
        <div class="password-wrapper" v-else>
          <input type="number" v-model="authCode" name="auth-code" key="authCode" placeholder="请输入验证码">
          <button class="btn" @click="showCodeModel">{{btnText}}</button>
        </div>
      </div>
      <div class="tip-wrapper">
        <div class="tip">
          <a href="javascript:;">忘记密码?</a>
          <a href="javascript:;" @click="toggle" v-text="switcherText"></a>
        </div>
        <p class="error">{{errorMsg}}</p>
      </div>
      <div class="btn-wrapper">
        <a href="javascript:;" class="login" @click="login">立即登录</a>
        <a href="javascript:;" class="register">注册账号</a>
      </div>
      <div class="wechat-login">
        <i class="icon iconfont icon-weixin"></i>微信登录
      </div>
    </div>
    <code-model 
    @showKeyboard="showKeyboard" 
    @hideKeyboard="hideKeyboard" 
    @hideCodeModel="hideCodeModel"
    @countdown="countdown"
    :is-show-code-model="isShowCodeModel"></code-model>
    <keyboard :isShow="isShowKeyboard"></keyboard>
    <msg ref="msg"></msg>
  </div>
</template>

<script>
import Title from '@/components/layout/title.vue'
import CodeModel from './codeModel.vue'
import Keyboard from '@/components/keyboard/keyboard'
import Msg from '@/components/msg/msg.vue'
import * as api from '@/api'
export default {
  data () {
    return {
      title: '手机验证码登录',
      started: false,
      authCode: '',
      password: '',
      btnText: '获取验证码',
      telephoneNum: '',
      isShowPassword: true,
      isShowKeyboard: false,
      isShowCodeModel: false,
      errorMsg: ''
    }
  },
  computed: {
    switcherText () {
      return this.isShowPassword ? '切换手机验证码登录' : '切换手机密码登录'
    }
  },
  methods: {
    toggle () {
      this.isShowPassword = !this.isShowPassword
      this.password = ''
      this.authCode = ''
    },
    showKeyboard () {
      this.isShowKeyboard = true
    },
    hideKeyboard () {
      this.isShowKeyboard = false
    },
    showCodeModel () {
      let tel = this.telephoneNum
      if (this.started) {
        return
      }
      if (this.validatorMobile(tel)) {
        this.isShowCodeModel = true
      }
    },
    hideCodeModel () {
      this.isShowCodeModel = false
    },
    sendAuthCode () {
      let telephoneNum = this.telephoneNum
      return api.sendAuthCode({
        mobileNo: telephoneNum,
        opr: 'login'
      })
    },
    countdown () {
      this.started = true
      let total = 60
      this.btnText = `${total}秒后重新获取`
      // 调用发送手机验证码
      this.sendAuthCode()
      let timer = setInterval(() => {
        total--
        if (total <= 0) {
          clearInterval(timer)
          this.btnText = '获取验证码'
          this.started = false
          return
        }
        this.btnText = `${total}秒后重新获取`
      }, 1000)
    },
    validatorMobile (val) {
      if (val.length < 1) {
        this.errorMsg = '请输入手机号码'
        return false
      }
      if (!(/^1[3|5|8][0-9]{9}$/).test(val)) {
        this.errorMsg = '请输入正确的手机号码'
        return false
      }
      return true
    },
    checkAuthCode (opr) {
      let telephoneNum = this.telephoneNum
      let authCode = this.authCode
      return api.checkAuthCode({
        mobileNo: telephoneNum,
        randomCode: authCode,
        opr
      })
    },
    login () {
      let loginFromAuthCode = !this.isShowPassword
      if (loginFromAuthCode) {
        this.checkAuthCode('login').then(res => {
          if (res.success) {
            this.$refs.msg.show('登录成功')
          }
        })
      }
    }
  },
  components: {
    Title,
    CodeModel,
    Keyboard,
    Msg
  }
}
</script>

<style lang="stylus">
  .logo-wrapper
    padding 30px 0 60px
    text-align center
    img 
      height 72px
  .form-group
    margin 0 11px
  .form-wrapper
    padding: 0 10px
    height 96px
    border-radius 2px
    background-color #f5f5f5
    >div
      display flex
      align-items center
      height 47.5px
    input 
      background transparent
      outline 0
      font-size 14px
    .password-wrapper
      justify-content space-between
      .btn
        width 113px
        height 32px
        line-height 32px
        border-radius 4px
        background-color #ff8c00
        font-size 14px
        color #fff
  .tip-wrapper
    padding 0 10px
    line-height 1
    .tip
      display flex
      justify-content space-between
      margin-top 15px
      a
        font-size 14px
        color #999
    .error
      margin 10px 0
      font-size 14px
      color #FF4B1F
  .btn-wrapper
    a
      display block
      line-height 47px
      margin-top 10px
      margin-bottom 36px
      text-align center
      font-size 15px
      color #333
      &.login
        border-radius 4px
        background-color #ff8c00
        color #fff
  .wechat-login
    text-align center
    font-size 12px
    color #999
    i 
      vertical-align middle
      margin-right 10px
</style>

