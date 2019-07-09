import _popover from './index.vue'

let popover={
  install:function (Vue) {
    Vue.component('popover',_popover)
  }
}
export default popover
