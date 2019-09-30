import _produceA from './index.vue'

let produceA = {
  install: function (Vue) {
    Vue.component('produceA', _produceA)
  }
}
export default produceA
