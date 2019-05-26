import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import theme from '../styled/theme'


Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    token: true,
    counter:0,
    theme

  },
  getters,
  mutations,
  actions

})

export default store
