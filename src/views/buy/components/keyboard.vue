<template>
  <div id="keyboard" v-show="isShow">
    <div v-for="(item,index) of keyList" :key="index"  @click="tabed">
        <i v-for="val of item" :key="val" :class="[{'key-tab':val==='↑'},{'key-dele':val==='✖'}]">{{val}}</i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'keyboard',
  data () {
    return {
      keyList: [],
      inputContents: [],
      lowercase: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['↑', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '✖']
      ],
      upperCase: [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['↑', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '✖']
      ]
    }
  },
  props: {
    isShow: Boolean
  },
  created () {
    this.keyList = this.lowercase
  },
  methods: {
    tabed (e) {
      let {target: i} = e
      if (i.tagName === 'I') {
        i.className = 'active'
        let text = i.innerText
        switch (text) {
          case '↑':
            this.keyList = this.keyList === this.upperCase ? this.lowercase : this.upperCase
            break
          case '✖':
            this.inputContents.pop()
            break
          default:
            this.inputContents.push(text)
        }
        setTimeout(() => {
          i.className = ''
        }, 300)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  #keyboard
    position fixed
    z-index 999
    left 0
    right 0
    bottom 0
    background-color #eee
    font-size 18px
    div
      display flex
      justify-content center
      width 96%
      margin 0.5em auto
      &:nth-child(2)
        width 85%
      i
        display block
        flex 1
        height 44px
        line-height 44px
        margin 0 1%
        text-align center
        border-radius 4px
        background-color #fff
        &.key-tab
          flex-grow 1.5
          background #cccdd0;
          color #fff;
        &.key-dele
          flex-grow 1.5
          color #d9534f
          background #d7d7d8
        &.active
          background-color darken(#ccc, 10%);


</style>


