// api通用参数
export const params = () => {
  let date = new Date()
  let year = String(date.getFullYear())
  // 年

  let month = String(date.getMonth() + 1).padStart(2, 0)
  // 月

  let day = String(date.getDate()).padStart(2, 0)
  // 日

  let hours = String(date.getHours()).padStart(2, 0)
  // 时

  let minutes = String(date.getMinutes()).padStart(2, 0)
  // 分

  let seconds = String(date.getSeconds()).padStart(2, 0)
  // 秒

  let milliseconds = String(date.getUTCMilliseconds()).padStart(3, 0)
  // 毫秒

  let randomNum = parseInt(Math.random() * 100000000) // 八位随机数
  return {
    serialNumber: year + month + day + hours + minutes + seconds + milliseconds + randomNum,
    data: {

    }
  }
}
export const postData = (url, data) => {
  return fetch(url, {
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
    method: 'POST'

  }).then(res => res.json())
}
