import api from "@/api";
import localConfig from '../config'
export default {
  state:{
    ...localConfig,


  },
  mutations:{
    setGlobal(state,global)
    {
      state.global=global
    },
  },
  actions:{
    async nuxtServerInit({commit}) {
      const {global} = await api.get('/getGlobal')
      commit('setGlobal',global)
    },
  }

}
