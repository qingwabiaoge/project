import api from "@/api";

export default {
  state: {
    total: 0,

  },
  mutations: {
    //文章列表页
    setArticles(state, {componentName, articles, total}) {
      state[componentName] = articles;
      state.total = total
    },
  },
  actions: {
    async nuxtServerInit({commit}) {
      const {articles, total} = await api.get('/getArticles', {params: {category:'代理加盟'}})
      commit('setArticles', {componentName:'join',  articles})
    },
    //文章页列表
    async getArticles({commit}, {componentName, category, page, keyword}) {

      const {articles, total} = await api.get('/getArticles', {params: {category, page, keyword}})
      commit('setArticles', {componentName, articles, total})
    },
  }
}
