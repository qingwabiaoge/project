import api from "@/api";

export default {
  state: {},
  mutations: {
    //文章列表页
    setCategory(state, categorys) {
      state.data = categorys;
    },
  },
  actions: {
    async nuxtServerInit({commit}) {
      const {categorys} = await api.get('/getCategorys')
      commit('setCategory', categorys)
    },

  }
}
