import Vue from 'vue'
/*
 * 全局注册
 *
 */
export default {
  install () {
    Vue.prototype.$confirm = (msg, title, options) => {
      let dom = `
      <div class="dy-mask">
      </div>
      <div class="dy-dialog">
        <div class="dy-dialog-content">
          <h4>${title}</h4>
          <p>
            <i class="iconfont icon-warning"></i>
            <span>${msg}</span>
          </p>
          <div class="btn-group">
            <button class="btn-cancel">${options.cancelText}</button>
            <button class="btn-confirm">${options.confirmText}</button>
          </div>
        </div>
      </div>
      `
      let div = document.createElement('div')
      div.id = 'dilogWrapper'
      div.innerHTML = dom
      document.body.appendChild(div)
      return new Promise((resolve, reject) => {
        document.getElementsByClassName('btn-confirm')[0].onclick = resolve
        document.getElementsByClassName('btn-cancel')[0].onclick = reject
      })
    }
  }
}
