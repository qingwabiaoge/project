import _baseButton from './index.vue'

let baseButton={
  install:function (Vue) {
    Vue.component('baseButton',_baseButton)
  }
}
export default baseButton

