<template>
  <div class="login">
    <Title :title="title"></Title>
    <div class="logo-wrapper">
      <img src= "../../common/images/haima-logo.png" alt="">
    </div>
    <div class="form-wrapper">
      
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
</style>

