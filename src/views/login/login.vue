<template>
  <div class="login">
    <Title :title="title"></Title>
    <div class="logo-wrapper">
      <img src= "../../common/images/haima-logo.png" alt="">
    </div>
    <div class="form-group">
      <div class="form-wrapper">
        <div class="username-wrapper border-bottom">
          <input type="tel" name="telephone" placeholder="请输入手机号码">
        </div>
        <div class="password-wrapper">
          <input type="password" name="password" placeholder="请输入密码">
        </div>
      </div>
      <div class="tip">
        <a href="javascript:;">忘记密码?</a>
        <a href="javascript:;">切换手机验证码登录</a>
      </div>
      <div class="btn-wrapper">
        <a href="javascript:;" class="login">立即登录</a>
        <a href="javascript:;" class="register">注册账号</a>
      </div>
      <div class="wechat-login">
        <i class="icon iconfont icon-weixin"></i>微信登录
      </div>
    </div>
    
  </div>
</template>

<script>
import Title from '@/components/layout/title.vue'
export default {
  data () {
    return {
      title: '手机验证码登录'
    }
  },
  components: {
    Title
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
    input 
      line-height 47.5px
      background transparent
      outline 0
      font-size 14px
  .tip
    display flex
    justify-content space-between
    margin-top 15px
    padding 0 10px
    line-height 1
    a
      font-size 14px
      color #999
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

