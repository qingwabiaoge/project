export default {
  namespaced: true,
  state: [],//state===components


  getters: {
    components(state, getters) {
      const _conponents = {}
      state.forEach((item, index, self) => {
        _conponents[item.key] = item
      })
      return _conponents
    },
    categorys(state, getters) {
      const _categorys = state.filter(item => item.isCategory === true)
      return _categorys
    },
    goodsCategory(state, getters) {
      return getters.components.goods.children
    },
    articleCategory(state, getters) {
      return getters.components.article.children
    }
  },


  mutations: {
    set(state, data) {
      Object.assign(state, data)
    }
  },


  actions: {
    async get({commit}) {
      const {components} = await this.$axios.get('/components')   //按照键值名分裂数组
      commit('set', components)
    },
    async put({commit, state}, data) {
      commit('set', data)
      this.$axios.put('components', data)
    }
  }

}
