import api from "@/api";

export default {
  state: {
    total: 0,

  },
  mutations: {
    //文章列表页
    setGoodss(state, {componentName, goodss, total}) {
      state[componentName] = goodss;
      state.total = total
    },
  },
  actions: {

    //文章页列表
    async getGoodss({commit}, {componentName, category, page, tilte}) {

      const {goodss, total} = await api.get('/getGoodss', {params: {category, page, tilte}})
      commit('setGoodss', {componentName, goodss, total})
    },
  }
}
