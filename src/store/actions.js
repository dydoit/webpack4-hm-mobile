import * as api from '@/api'
export const getLocation = ({commit, disptach}, payload) => {
  try {
    if (localStorage.city) {
      commit('setCity', JSON.parse(localStorage.city))
    } else {
      api.getLocation().then(res => {
        if (res.code === 'success') {
          let { data } = res
          commit('setCity', data)
        }
      })
    }
  } catch (e) {}
}
