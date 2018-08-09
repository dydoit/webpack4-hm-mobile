<template>
  <div id="cityList" ref="cityList">
    <div class="wrapper">
      <dl>
        <dt>GPS定位</dt>
        <dd @click="selectCity(locationCity)">{{locationCity.alias}}</dd>
      </dl>
      <dl v-for="(value,key) of cityObj" :key="key" :ref = "key">
        <dt>{{key}}</dt>
        <dd v-for="item of value" :key="item.id" class="border-bottom"  @click="selectCity(item)">{{item.alias}}</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'cityList',
  data () {
    return {
      scroll: null
    }
  },
  computed: {
    ...mapState(['city'])
  },
  props: {
    cityObj: Object,
    locationCity: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    ...mapMutations(['setCity']),
    selectCity (item) {
      this.setCity(item)
      localStorage.setItem('city', JSON.stringify(item))
      this.$router.push('/')
    }
  },
  mounted () {
    let cityList = this.$refs.cityList
    this.scroll = new Bscroll(cityList)
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


