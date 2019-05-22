import _articleA from './index.vue'

let articleA={
  install:function (Vue) {
    Vue.component('articleA',_articleA)
  }
}
export default articleA

