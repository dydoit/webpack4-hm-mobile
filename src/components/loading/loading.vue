<template>
  <div class="loading">
    <img src="./loading.gif" alt="">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'

    }
  }
}
</script>
<style lang="stylus" scoped>
  .loading
    padding-top 10px
    text-align center
    font-size 10px
    img 
      width 50px
      margin-bottom 6px
</style>


