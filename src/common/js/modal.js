class modal {
  constructor (confirmId, cancelId) {
    this.confimButton = document.getElementById(confirmId)
    this.cancelButton = document.getElementById(cancelId)
  }
  confirm () {
    return new Promise((resolve, reject) => {
      this.confimButton.onClick = resolve
      this.cancelButton.onClick = reject
    })
  }
}
export const Modal = modal
