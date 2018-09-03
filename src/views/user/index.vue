<template>
  <div class="user-center">
    个人中心
    <a href="javascript:;" id="confirm">确认</a>
    <a href="javascript:;" id="cancel">取消</a>
    <a href="javascript:;" id="start" @click="start">开始</a>
  </div>
</template>
<script>
let Reconfirm = () => {
  return new Promise(function (resolve, reject) {
    document.getElementById('confirm').onclick = resolve
    document.getElementById('cancel').onclick = reject
  })
}

// import {Modal} from 'common/js/modal.js'
// let btn1 = document.getElementById('confirm')
// let btn2 = document.getElementById('cancel')
// let promise = function () {
//   return new Promise((resolve, reject) => {
//     btn1.conClick = resolve()
//     btn2.onClick = reject(new Error('no lyric'))
//   })
// }
// promise().then(() => {
//   console.log('你按了确认')
// }).catch(() => {
//   console.log('发生了啥2')
// })
export default {
  data () {
    return {

    }
  },
  methods: {
    start () {
      console.log('开始')
      Reconfirm().then(() => {
        console.log('你按了确认')
      }, () => {
        console.log('你取消了')
      })
    }
  },
  mounted () {
    console.log('cao')
  }
}
</script>
