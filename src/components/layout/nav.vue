<template>
  <div id="nav" ref="nav">
    <ul class="auto" ref="navList">
      <router-link tag = "li" :to="{path:navItem.path}" v-for="navItem of navList" :key="navItem.name" exact>
        <a href="javacript:;">
          {{navItem.name}}
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scroll: '',
      navList: [
        {
          name: '推荐',
          path: '/index'
        },
        {
          name: '买车',
          path: '/buy'
        },
        {
          name: '快找找店',
          path: '/findShop'
        },
        {
          name: '火爆活动',
          path: '/hotActivity'
        },
        {
          name: '纯正备件',
          path: '/product'
        },
        {
          name: '定制车',
          path: '/customMade'
        },
        {
          name: '车友论坛',
          path: '/forum'
        },
        {
          name: '卖车',
          path: '/sell'
        },
        {
          name: '资讯',
          path: '/news'
        }
      ]
    }
  },
  methods: {
    setWidth () {
      let ul = this.$refs.navList
      let lis = ul.querySelectorAll('li')
      let width = [...lis].reduce((last, li) => {
        return last + li.offsetWidth
      }, 0)
      ul.style.width = width + 'px'
    }
  },
  mounted () {
    this.setWidth()
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/styles/variables.styl'
  #nav
    padding 0 11px
    background #444
    overflow auto
    height:43px
    line-height 43px
  ul
    li
      display inline-block
      padding 0 15px
      &:first-child
        padding-left 0
      a
        position relative
        display block
        width 100%
        font-size 14px
        color #fff
      &.active
        a
          color $activeColor
          &:after
            content:''
            position absolute
            bottom 6px
            left 0
            width 100%
            height 2px
            background $activeColor



</style>


