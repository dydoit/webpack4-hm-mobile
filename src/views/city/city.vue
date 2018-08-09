<template>
  <div id="city">
    <CityHeader :title = 'title'></CityHeader>
    <CityList :cityObj = 'cityObj' :locationCity = 'locationCity' :letter="letter"></CityList>
    <Alphabet :alphabets = 'alphabets' @change="handleLetterChange"></Alphabet>

  </div>
</template>
<script>
import CityHeader from './components/city-header.vue'
import CityList from './components/city-list.vue'
import Alphabet from './components/alphabet.vue'
import * as api from '@/api'
export default {
  name: 'City',
  data () {
    return {
      title: '选择城市',
      locationCity: {},
      cityObj: {},
      letter: ''
    }
  },
  computed: {
    alphabets () {
      return Object.keys(this.cityObj)
    }

  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  components: {
    CityHeader,
    CityList,
    Alphabet
  },
  created () {
    // 城市列表
    api.getCity({
      minLevel: 3,
      maxLevel: 3
    }).then(res => {
      if (res.code === 'success') {
        let { data } = res
        this.cityObj = data.slice().reduce((last, item) => {
          let lastCity = last[item.data.pyHead] ? last[item.data.pyHead] : []
          return {
            ...last,
            [item.data.pyHead]: [
              ...lastCity, item.data
            ]
          }
        }, {})
      }
    })
  },
  activated () {
    // 获取定位城市
    api.getLocation().then(res => {
      if (res.code === 'success') {
        let {data} = res
        this.locationCity = data
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
  #city
    position relative
    height:100vh;
    overflow hidden

</style>


