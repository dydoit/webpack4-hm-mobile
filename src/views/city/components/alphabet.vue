<template>
  <div id="alphabet">
    <ul>
      <li v-for="item of alphabets" :key="item" :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      touchStatus: false
    }
  },
  props: {
    alphabets: Array
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
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

</style>


