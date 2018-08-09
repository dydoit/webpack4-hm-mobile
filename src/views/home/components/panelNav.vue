<template>
  <div class="panel-nav">
    <div>
      <i class="iconfont icon-yuyueshijia"></i>
      <p>预约试驾</p>
    </div>
    <div>
      <i class="iconfont icon-xundijia"></i>
      <p>询底价</p>
    </div>
    <div>
      <i class="iconfont icon-shouyezixun"></i>
      <p>咨询</p>
    </div>
    <div>
      <i class="iconfont icon-gengduo"></i>
      <p>更多</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .panel-nav
    display flex
    justify-content space-between
    padding 15px 27px 10px
    background-color #444
    div
      text-align center
      i
        color $activeColor
        font-size 20px
      p
        margin-top 8px
        font-size 11px
        color #aaa
</style>


