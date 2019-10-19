const qs = require("querystring");
export const state = () => ({})

export const actions = {
  async nuxtServerInit({dispatch, commit ,app}, {req}) {
    const token =  app.$tool.getReqCookies(req).token
    await dispatch('global/get')
    await dispatch('components/get')
    await commit("user/setToken",token)
  }
}
