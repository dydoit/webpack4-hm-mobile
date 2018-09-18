<template>
  <div id="alphabet">
    <ul id="text">
      <li v-for="(item,index) of alphabets" :key="item" :ref="item" :class="{active:currentIndex == index}"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { debounce } from '@/common/js/utils.js'
const alphabetHeight = 18
const alphabetOffsetTop = 80
export default {
  name: 'Alphabet',
  data () {
    return {
      touchStatus: false
    }
  },
  props: {
    alphabets: Array,
    currentIndex: Number
  },
  computed: {
    startY () {
      return this.$refs['A'][0].offsetTop
    }
  },
  methods: {
    handleLetterClick (e) {
      let letter = e.target.innerText
      let currentIndex = this.alphabets.findIndex(item => item === letter)
      let payload = {letter, currentIndex}
      this.$emit('change', payload)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        debounce(() => {
          const touchY = e.touches[0].clientY - alphabetOffsetTop
          const index = ((touchY - this.startY) / alphabetHeight) | 0
          if (index >= 0 && index < this.alphabets.length) {
            let letter = this.alphabets[index]
            this.$emit('change', {letter, currentIndex: index})
          }
        }, 16)()
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  #alphabet
    display flex
    flex-direction: column
    justify-content: center
    position absolute
    top 80px
    bottom 0
    right 0
    width 20px
    line-height 18px
    font-size 12px
    font-weight 600
    color #333
    li
      cursor pointer
      &.active
        color #ff8c00

</style>


