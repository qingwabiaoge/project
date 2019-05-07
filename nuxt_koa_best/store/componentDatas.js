import api from "@/api";

export default {
  state: {
    // data:[],
  },
  mutations: {
    setComponentDatas(state, {componentName, componentDatas}) {
      state[componentName] = componentDatas
    },
  },
  actions: {
    async getComponentDatas({commit}, componentName) {

      const {componentDatas} = await  api.get('/getComponentDatas', {
        params: {
          componentName
        }
      })


      commit('setComponentDatas', {componentName, componentDatas})
    },
  }
}
