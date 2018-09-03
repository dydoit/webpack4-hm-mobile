<template>
  <div id="footer">
    <ul class="foot-nav">
      <router-link tag="li" v-for="item of items" :key="item.id" :to="item.path" exact>
        <div :class="item.icon"></div>
        <span>
          {{item.name}}
        </span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          id: 'p001',
          name: '首页',
          icon: 'icon iconfont icon-shouye',
          path: '/index'

        },
        {
          id: 'p002',
          name: '活动',
          icon: 'iconfont icon-huodong',
          path: '/index'

        },
        {
          id: 'p003',
          name: '金融',
          icon: 'iconfont icon-jinrong',
          path: '/index'

        },
        {
          id: 'p004',
          name: '购物车',
          icon: 'iconfont icon-gouwucheicon',
          path: '/shopCar'

        },
        {
          id: 'p005',
          name: '我的',
          icon: 'iconfont icon-wode',
          path: '/user'

        }

      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  #footer
    width 100%
  .foot-nav
    display flex
    justify-content space-between
    position fixed
    bottom 0
    left 0
    box-sizing border-box
    width 100%
    height 50px
    background-color #fff
    padding 8px 30px 0
    
    li
      text-align center
      &.active
        color #ff8c00
      span 
        line-height 2
</style>


