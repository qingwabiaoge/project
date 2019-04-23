export default {
  state: {},
  mutations: {

    setGlobal(state, global) {
      Object.assign(state, global)
    }

  }
  ,
  actions: {
    async getGlobal({commit}) {
      const {global} = await this.$axios.get('/global')
      commit('setGlobal', global)


    },
    async patchGlobal({commit, state}, data) {
      commit('setGlobal', data)
      this.$axios.patch('/global', state)
    }
  }
}
