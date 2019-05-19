import {api} from "../api";
export default {
  state:{
    article:[]
  },
  mutations:{
    set_article(state, article) {
      state.article = article
    }
  },
  actions:{
    async getArticleById({commit}, id) {
      const {article} = await  api.post(`getArticleById/${id}`)
      commit('set_article', article)
    }

  }


}
