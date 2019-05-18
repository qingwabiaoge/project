export default {

  state: {

  },
  actions: {
    async nuxtServerInit({commit}, {$axios}) {
      const {global} = await $axios.get('/getGlobal')
      commit('setGlobal', global)
    }
  },
  mutations: {
    setGlobal(state, global) {
      Object.assign(state,global)
      // for (let item in global) {
      //   state[item] = global[item]
      // }
    },
  }

}
