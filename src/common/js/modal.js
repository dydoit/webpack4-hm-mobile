class modal {
  constructor (confirmId, cancelId) {
    this.confimButton = document.getElementById(confirmId)
    this.cancelButton = document.getElementById(cancelId)
  }
  confirm () {
    return new Promise((resolve, reject) => {
      this.confimButton.onclick = resolve
      this.cancelButton.onclick = reject
    })
  }
}
export const Modal = modal
