import api from "@/api";
export default {
  state:{

  },
  mutations:{
    setComponentData(state,{componentData,id}) {
      state[id] =componentData
    }
  },
  actions:{
    async getComponentDataById({commit}, id) {
      const {componentData} = await  api.get(`getComponentDataById/${id}`)
      commit('setComponentData', {componentData,id})
    }

  }


}
