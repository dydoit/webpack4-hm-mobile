<template>
  <div id="app">
    <keep-alive include="City">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus" scoped>
  #app 
    height 100%
</style>



