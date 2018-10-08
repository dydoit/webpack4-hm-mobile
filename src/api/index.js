import {params, postData} from './config.js'
// 获取当前定位
export const getLocation = (payload = {}) => {
  return postData('/api/sys/city/location', {
    ...params(),
    data: payload
  })
}
// 获取所有城市列表
export const getCity = (payload = {}) => {
  return postData('/api/sys/city/tree', {
    ...params(),
    data: payload
  })
}
// 获取字典组
export const getRefund = (payload = {}) => {
  return postData('/api/sys/dictionary/list', {
    ...params(),
    data: payload
  })
}
// 获取首页banner图
export const getBannerList = (payload = {}) => {
  return postData('/api/sys/banner/list', {
    ...params(),
    data: payload
  })
}
// 获取推荐车系列表
export const getRecommendedCarList = (payload = {}) => {
  return postData('/api/product/car/carSeriesList', {
    ...params(),
    data: payload
  })
}
// 获取金融活动列表
export const getFinanicalList = (payload = {}) => {
  return postData('/api/sys/rec/recList', {
    ...params(),
    data: payload
  })
}
// 获取热门活动列表
export const getActivityList = (page, pageSize, payload = {}) => {
  return postData('/api/product/act/actList', {
    ...params(),
    page,
    pageSize,
    data: payload
  })
}
// 获取车用品列表
export const getProduct = (payload = {}) => {
  return postData('/api/sys/rec/recList', {
    ...params(),
    data: payload
  })
}
// 获取优秀经销商
export const getGoodDealers = (payload = {}) => {
  return postData('/api/user/dealer/excellentList', {
    ...params(),
    page: payload.page,
    pageSize: payload.pageSize,
    data: {
      city: payload.city
    }
  })
}
// 获取登录图形验证码
export const getCodeImg = (payload = {}) => {
  return postData('/api/sys/verification/generate', {
    ...params(),
    data: payload
  })
}
// 发送手机验证码
export const sendAuthCode = (payload = {}) => {
  return postData('/api/user/randomCode/send', {
    ...params(),
    data: payload
  })
}
// 检验手机验证码
export const checkAuthCode = (payload = {}) => {
  return postData('/api/user/randomCode/send', {
    ...params(),
    data: payload
  })
}
// 用户登录
export const login = (payload = {}) => {
  return postData('/api/user/account/login', {
    ...params(),
    data: payload
  })
}
