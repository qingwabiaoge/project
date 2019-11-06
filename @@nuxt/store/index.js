const qs = require("querystring");
export const state = () => ({primary:'#0f0'})

export const actions = {
    //第一个参数为store的ctx,第二个参数为nuxt的ctx
    async nuxtServerInit({dispatch, commit}, {app,req}) {
        console.log(`nuxtSeverInit执行`)
        //$tool注入到了$store
        const token = app.$tool.getReqCookies(req).token
        await dispatch('global/get')
        await dispatch('components/get')
        await commit("user/setToken", token)
    }
}
