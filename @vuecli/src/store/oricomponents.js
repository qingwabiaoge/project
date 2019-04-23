import data from './data'
import axios from 'axios'

export default {
  namespaced: true,
  state: [],//state===components
  getters: {
    components(state,getters) {

      const _conponents = {}
      state.forEach((item, index, self) => {
        _conponents[item.key] = item
        console.log( _conponents)
      })
      return _conponents

    },
    categorys(state,getters) {
      const _categorys = state.filter(item => item.isCategory === true)
      console.log(_categorys)
      return _categorys
    },
    goodsCategory(state, getters) {
      return getters.components.goods.children

    },
    articleCategory(state, getters) {
      console.log('getters', getters)
      return getters.components.article.children
    }
  },
  mutations: {
    set(state, data) {
      Object.assign(state, data)
      console.log(state)
    }
  },
  actions: {
    async get({commit}) {
     const {data} = await axios.get('http://192.168.15.129:3000/')   //按照键值名分裂数组
      commit('set', data)

    },
    async put({commit, state}, data) {
      commit('set', data)
      this.$axios.put('components', data)
    }
  }

}
