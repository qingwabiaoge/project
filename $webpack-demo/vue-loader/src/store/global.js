import {api} from "../api";

export default {
  state:{
    data:{}
  },
  mutations:{
    set_global(state,data)
    {
      state.data=data
    },
  },
  actions:{
    async nuxtServerInit({commit}) {
      const {global} = await api.get('/getGlobal')
      commit('set_global',global)
    },
  }

}
