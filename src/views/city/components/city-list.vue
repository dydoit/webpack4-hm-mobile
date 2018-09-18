<template>
  <Scroll id="cityList" ref="cityList" 
  :data = "cityList" 
  :listen-scroll = "listenScroll"
  :probeType = "probeType"
  @scroll = "scroll">
    <div class="wrapper">
      <dl ref="location">
        <dt>GPS定位</dt>
        <dd @click="selectCity(locationCity)">{{locationCity.alias}}</dd>
      </dl>
      <dl v-for="(value,key) of cityObj" :key="key" :ref = "key" class="list-group">
        <dt>{{key}}</dt>
        <dd v-for="item of value" :key="item.id" class="border-bottom"  @click="selectCity(item)">{{item.alias}}</dd>
      </dl>
      <div v-show="!listHeights.length" class="loading-container">
        <Loading></Loading>
      </div>
    </div>
  </Scroll>
</template>
<script>
import Scroll from '@/components/scroll/scroll.vue'
import Loading from '@/components/loading/loading.vue'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'cityList',
  data () {
    return {
      scrollY: -1,
      currentIndex: 0,
      listenScroll: true,
      probeType: 3,
      listHeights: []
    }
  },
  components: {
    Scroll,
    Loading
  },
  activated () {
    console.log('重新刷新')
    this.$refs.cityList.refresh()
  },
  computed: {
    ...mapState(['city']),
    cityList () {
      return Object.values(this.cityObj)
    }
  },
  props: {
    cityObj: Object,
    locationCity: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        let letter = this.letter
        this._scrollTo(letter)
      }
    },
    cityObj () {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    scrollY (newY) {
      const listHeights = this.listHeights
      const locationHeight = this.$refs.location.clientHeight
      if (newY > 0 || -newY < locationHeight) {
        this.currentIndex = 0
        this.$emit('popIndex', this.currentIndex)
        return
      }
      for (let i = 0; i < listHeights.length - 1; i++) {
        let height1 = listHeights[i]
        let height2 = listHeights[i + 1]
        if (-newY >= height1 && -newY < height2) {
          if (this.currentIndex !== i) {
            this.currentIndex = i
            this.$emit('popIndex', this.currentIndex)
          }
          return
        }
      }
      // 当滚动到底部，滚到最后一个元素
      if (this.currentIndex !== listHeights.length - 1) {
        this.currentIndex = listHeights.length - 1
        this.$emit('popIndex', this.currentIndex)
      }
    }
  },
  methods: {
    ...mapMutations(['setCity']),
    selectCity (item) {
      this.setCity(item)
      localStorage.setItem('city', JSON.stringify(item))
      this.$router.push('/')
    },
    scroll (pos) {
      this.scrollY = pos.y
    },
    _scrollTo (letter) {
      const element = this.$refs[this.letter][0]
      this.$refs.cityList.scrollToElement(element, 0)
    },
    _calculateHeight () {
      const lists = document.getElementsByClassName('list-group')
      let height = this.$refs.location.clientHeight
      this.listHeights.push(height)
      Array.from(lists).forEach(elem => {
        height += elem.clientHeight
        this.listHeights.push(height)
      })
      console.log(this.listHeights)
    }
  }
}
</script>
<style lang="stylus" scoped>
  #cityList
    position absolute
    left 0
    right:0
    top:49px;
    bottom:0;
  .wrapper
    dl
      dt
        padding-left 12px
        height 30px
        line-height 30px;
        background-color rgba(240,239,245,1)
        color #666
      dd
        padding-left 12px
        height 45px
        line-height 45px
        font-size 15px
        cursor pointer

</style>


