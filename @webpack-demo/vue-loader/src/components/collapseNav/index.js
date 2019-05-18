import _collapseNav from './index.vue'

let collapseNav={
  install:function (Vue) {
    Vue.component('collapseNav',_collapseNav)
  }
}
export default collapseNav

