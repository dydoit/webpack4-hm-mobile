<template>
  <div class="user-center">
    个人中心
    <a href="javascript:;" id="start" @click="start">开始</a>
    <!-- <div class="dy-mask">
    </div>
    <div class="dy-dialog">
      <div class="dy-dialog-content">
        <h4>提示</h4>
        <p>
          <i class="iconfont icon-warning"></i>
          <span>删除后无法恢复，确认删除吗</span>
        </p>
        <div class="btn-group">
          <button class="btn-cancel">取消</button>
          <button class="btn-confirm">确认</button>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    start () {
      this.$confirm('你确认点了', '温馨提示', {
        cancelText: 'cancel',
        confirmText: 'confirm'
      }).then(() => {
        console.log('你点击了确认')
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  
            
</style>

