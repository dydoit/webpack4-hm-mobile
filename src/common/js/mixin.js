import Msg from '@/components/msg/msg.vue'
export const codeModelMixin = {
  data () {
    return {
      btnText: '获取验证码',
      telephoneNum: '',
      started: false,
      isShowKeyboard: false,
      isShowCodeModel: false
    }
  },
  components: {
    Msg
  },
  methods: {
    showKeyboard () {
      this.isShowKeyboard = true
    },
    hideKeyboard () {
      this.isShowKeyboard = false
    },
    showCodeModel () {
      let tel = this.telephoneNum
      if (this.started) {
        return
      }
      if (this.validatorMobile(tel)) {
        this.isShowCodeModel = true
      }
    },
    valid () {
      this.$refs.msg.show('验证通过')
      setTimeout(() => {
        this.hideCodeModel()
      }, 500)
    },
    hideCodeModel () {
      this.isShowCodeModel = false
    },
    countdown () {
      this.started = true
      let total = 60
      this.btnText = `${total}秒后重新获取`
      // 调用发送手机验证码
      this.sendAuthCode()
      let timer = setInterval(() => {
        total--
        if (total <= 0) {
          clearInterval(timer)
          this.btnText = '获取验证码'
          this.started = false
          return
        }
        this.btnText = `${total}秒后重新获取`
      }, 1000)
    }
  }
}
