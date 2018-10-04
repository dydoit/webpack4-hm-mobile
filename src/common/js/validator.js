const strategies = {
  isNonEmpty (val, errorMsg) {
    if (val === '') {
      return errorMsg
    }
  },
  minLength (val, length, errorMsg) {
    if (val.length < length) {
      return errorMsg
    }
  },
  isMobile (val, errorMsg) {
    if (!(/^1[3|5|8][0-9]{9}$/).test(val)) {
      return errorMsg
    }
  }

}
export class Validator {
  constructor () {
    this.cache = []
  }
  add (dom, rules) {
    let self = this
    for (let i = 0, rule = rules[i]; i < rules.length; i++) {
      (function (rule) {
        let strategyAry = rule.strategy.split(':')
        let errorMsg = rule.errorMsg
        self.cache.push(() => {
          let strategy = strategyAry.shift()
          strategyAry.unshift(dom.value)
          strategyAry.push(errorMsg)
          return strategies[strategy].apply(dom, strategyAry)
        })
      })(rule)
    }
  }
  start () {
    for (let i = 0, validatorFunc = this.cache[i]; i < this.cache.length; i++) {
      let msg = validatorFunc()
      if (msg) {
        return msg
      }
    }
  }
}
