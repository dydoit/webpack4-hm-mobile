<template>
  <div class="register">
    <Title :title="title"></Title>
    <div class="logo-wrapper">
      <img src= "../../common/images/haima-logo.png" alt="">
    </div>
    <div class="form-group">
      <div class="form-wrapper">
        <div class="username-wrapper border-bottom">
          <input type="tel" name="telephone" placeholder="请输入手机号码" @focus="errorMsg=''" v-model="telephoneNum">
        </div>
        <div class="password-wrapper">
          <input type="number" v-model="authCode" name="auth-code" key="authCode" placeholder="请输入验证码">
          <button class="btn" @click="showCodeModel">{{btnText}}</button>
        </div>
      </div>
      <div class="input-wrapper">
         <input type="password" v-model="password" name="password" key="password" placeholder="请设置登录密码">
      </div>
      <div class="input-wrapper">
         <input type="password" v-model="password" name="password" key="password" placeholder="请再次输入密码">
      </div>
      <div class="tip">
        <input type="checkbox" id="readed">
        <label class="iconfont" for="readed"></label> 
        我已阅读并同意<span>《海马商城服务协议》</span>和<span>《隐私条款》</span>
      </div>
      <div class="btn-wrapper">
        <a href="javascript:;" class="active">提交注册</a>
        <router-link to="/login">已有账号，立即登录</router-link>
        
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
import CodeModel from '@/components/codeModel/codeModel.vue'
import Keyboard from '@/components/keyboard/keyboard'
import Msg from '@/components/msg/msg.vue'
import * as api from '@/api'
export default {
  data () {
    return {
      title: '注册',
      started: false,
      password: '',
      authCode: '',
      btnText: '获取验证码',
      telephoneNum: '',
      isShowKeyboard: false,
      isShowCodeModel: false,
      errorMsg: ''
    }
  },
  components: {
    Title,
    CodeModel,
    Keyboard,
    Msg
  },
  methods: {
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
    }
  }
}
</script>
<style lang="stylus" scoped>
  .register
    height 100vh
    .logo-wrapper
      padding 30px 0 60px
      text-align center
      img 
        height 72px
  input 
    background transparent
    outline 0
    font-size 14px
  .form-group
    margin 0 11px
  .form-wrapper
    padding: 0 10px
    height 96px
    border-radius 4px
    background-color #f5f5f5
    >div
      display flex
      align-items center
      height 47.5px
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
  .input-wrapper
    display flex
    align-items center
    padding: 0 10px
    margin-top 20px
    height 47px
    border-radius 4px
    background-color #f5f5f5
  .tip
    position relative
    padding 0 10px
    margin-top 15px
    font-size 11px
    >input 
      position absolute
      clip rect(0 0 0 0)
      &+label 
        vertical-align -1px
      &+label:before
        content '\e67f'
      &:checked+label:before
        content '\e68d'
        color #ff8c00
    >span 
      color #ff8c00
  .btn-wrapper
    margin-top 30px
    a
      display block
      line-height 47px
      margin-top 10px
      margin-bottom 24px
      text-align center
      font-size 15px
      color #333
      &.active
        border-radius 4px
        background-color #ff8c00
        color #fff

</style>


