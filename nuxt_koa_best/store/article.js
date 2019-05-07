import api from "@/api";
export default {
  state:{

  },
  mutations:{
    setArticle(state, {article,id}) {
      state[id] = article
    }
  },
  actions:{
    async getArticleById({commit}, id) {
      const {article} = await  api.get(`getArticleById/${id}`)
      commit('setArticle', {article,id})
    }

  }


}
