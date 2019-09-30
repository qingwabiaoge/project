import _baseCarousel from './index.vue'

let baseCarousel={
  install:function (Vue) {
    Vue.component('baseCarousel',_baseCarousel)
  }
}
export default baseCarousel

