const qs = require("querystring");
export const state = () => ({})
const {getReqCookies}=require('@/tool')
export const actions = {
  async nuxtServerInit({dispatch, commit}, {req}) {
    const token =  getReqCookies(req).token
    await dispatch('global/get')
    await dispatch('components/get')
    await commit("user/setToken",token)
  }
}
