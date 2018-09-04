// 模态框
class Modal {
  constructor (id) {
    this.id = id
  }
  confirm (msg, title, options) {
    let div = document.createElement('div')
    div.id = this.id
    div.innerHTML = `
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
    let parentDiv = document.getElementById(div.id)
    if (parentDiv) {

    } else {
      
    }

  }

}