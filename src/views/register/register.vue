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
         <input type="password" v-model="password1" name="password1" @focus="errorMsg=''"  placeholder="请设置登录密码，6-16位数字和字母组合">
      </div>
      <div class="input-wrapper">
         <input type="password" v-model="password2" name="password2"  @focus="errorMsg=''" placeholder="请再次输入密码，6-16位数字和字母组合">
      </div>
      <div class="tip">
        <input type="checkbox" id="readed" v-model="readed">
        <label class="iconfont" for="readed"></label> 
        我已阅读并同意<span>《海马商城服务协议》</span>和<span>《隐私条款》</span>
        <p class="error">{{errorMsg}}</p>
      </div>
      <div class="btn-wrapper">
        <a href="javascript:;" class="active" @click="execute">{{submitText}}</a>
        <router-link to="/login">已有账号，立即登录</router-link>
        
      </div>
    </div>
     <code-model 
    @showKeyboard="showKeyboard" 
    @hideKeyboard="hideKeyboard" 
    @hideCodeModel="hideCodeModel"
    @valid="valid"
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
import * as api from '@/api'
import {codeModelMixin} from '@/common/js/mixin'
import md5 from 'js-md5'
export default {
  mixins: [codeModelMixin],
  data () {
    return {
      opr: '',
      title: '',
      submitText: '',
      readed: true,
      password1: '',
      password2: '',
      errorMsg: ''
    }
  },
  activated () {
    this.config()
  },
  components: {
    Title,
    CodeModel,
    Keyboard
  },
  methods: {
    config () {
      this.telephoneNum = ''
      this.authCode = ''
      let path = this.$route.path
      switch (path) {
        case '/register':
          this.title = '注册'
          this.opr = 'register'
          this.submitText = '提交注册'
          break
        case '/findPass':
          this.title = '找回密码'
          this.opr = 'changePwd'
          this.submitText = '确认修改'
          break
      }
    },
    sendAuthCode () {
      let telephoneNum = this.telephoneNum
      return api.sendAuthCode({
        mobileNo: telephoneNum,
        opr: 'register'
      })
    },
    validatorMobile (val) {
      if (!val) {
        this.errorMsg = '请输入手机号码'
        return false
      }
      if (!(/^1[3|5|8][0-9]{9}$/).test(val)) {
        this.errorMsg = '请输入正确的手机号码'
        return false
      }
      return true
    },
    validatorAuthCode () {
      let authCode = this.authCode
      if (!authCode) {
        this.errorMsg = '请输入验证码'
        return false
      }
      return true
    },
    validatorPassword () {
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,16}$/
      let password1 = this.password1
      let password2 = this.password2
      if (!reg.test(password1)) {
        this.errorMsg = '密码必须是6-16位数字和字母组合'
        return false
      }
      if (password1 !== password2) {
        this.errorMsg = '两次密码输入不一致，请重新输入'
        return false
      }
      return true
    },
    execute () {
      let opr = this.opr
      let message = opr === 'register' ? '注册成功' : '修改成功'
      if (this.validatorMobile(this.telephoneNum) && this.validatorAuthCode(this.authCode) && this.validatorPassword()) {
        if (!this.readed) {
          this.$refs.msg.show('请选择已阅读协议')
          return false
        }
        // 调用注册/找回密码接口
        let password = md5(this.password1)
        this.checkAuthCode(opr, password).then(res => {
          console.log(res)
          if (res.success) {
            this.$refs.msg.show(message)
            setTimeout(() => {
              this.$router.push('/login')
            }, 1000)
          } else {
            this.$refs.msg.show(res.message)
          }
        })
      }
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
    >input 
      width 100%
  .tip
    position relative
    padding 0 10px
    margin-top 15px
    font-size 11px
    .error
      margin 10px 0
      font-size 12px
      color #FF4B1F
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


