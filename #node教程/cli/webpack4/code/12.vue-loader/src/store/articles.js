import {api} from "../api";

export default {
  state:{
    total: 0,

  },
  mutations:{
    //文章列表页
    setArticles(state, {componentName,articles,total}) {
      state[componentName] = articles;
      state.total=total
    },
  },
  actions:{
    //文章页列表
    async getArticle({commit}, {componentName,  category, page, keyword}) {

      const {articles, total} = await api.get('/getArticles', {params: {category, page, keyword}})
      commit('setArticles', {componentName,articles, total})
    },
  }
}
