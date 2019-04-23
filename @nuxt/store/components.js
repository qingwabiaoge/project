export default {
  state: {},
  mutations: {
    setComponents(state, conponents) {
      Object.assign(state, conponents)
    }

  },
  actions: {
    async nuxtServerInit({commit}, {$axios}) {
      const {components} = await  $axios.get('/componentDatas')   //按照键值名分裂数组
      const _conponents = {}
      components.forEach((item, index, self) => {
        _conponents[item.mark] = item
      })
      commit('setComponents', _conponents)

    }
  },
  getters: {

    categorys(state) {
      const arr = Object.values(state)
      const _categorys = arr.filter(item => item.isCategory === true)
      return _categorys
      // commit('setCategorys', categorys)
    }
  }

}
