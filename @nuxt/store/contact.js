export default {

  state: {

  },
  actions: {
    async nuxtServerInit({commit}, {$axios}) {
      const {contact} = await $axios.get('/getContact')
      commit('setContact', contact)
    }
  },
  mutations: {
    setContact(state, contact) {
      Object.assign(state,contact)
      // for (let item in contact) {
      //   state[item] = contact[item]
      // }
    },
  }

}
