import {params, postData} from '@/utils/config.js'
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
