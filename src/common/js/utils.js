export function debounce (func, delay) {
  let timer; let firstTime = true
  return (...args) => {
    if (firstTime) {
      func.apply(this, args)
      firstTime = false
      return
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
