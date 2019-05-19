import _baseSlider from './index.vue'

let baseSlider={
  install:function (Vue) {
    Vue.component('baseSlider',_baseSlider)
  }
}
export default baseSlider

