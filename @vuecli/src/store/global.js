export default {
  namespaced: true,
  state: {},
  mutations: {

    set(state, global) {
      Object.assign(state, global)
    }

  }
  ,
  actions: {
    async get({commit}) {
      const {global} = await this.$axios.get('/global')
      commit('set', global)
    },
    async patch({commit, state}, data) {
      commit('set', data)
      this.$axios.patch('/global', state)
    }
  }
}
