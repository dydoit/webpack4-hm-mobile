<template>
  <div class="loading">
    <img src="../../common/images/lazy.gif" alt="">
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
    text-align center
</style>


