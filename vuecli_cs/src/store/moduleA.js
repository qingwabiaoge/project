import Vue from 'vue'

const vm = new Vue()
const moduleA = {
  state: {

  },

  mutations: {
    //无法响应更新到视图
    setObj: (state, data) => Object.assign(state, data)

  }


}
export default moduleA
