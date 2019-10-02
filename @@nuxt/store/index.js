const qs = require("querystring");
export const state = () => ({})

export const actions = {
  async nuxtServerInit({dispatch, commit}, {req}) {
    const obj = qs.parse(req.headers.cookie)
    const token = obj.token
    await dispatch('global/get')
    await dispatch('components/get')
    commit("user/setToken")
  }
}
