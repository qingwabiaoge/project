import _picCard from './index.vue'

let picCard={
  install:function (Vue) {
    Vue.component('picCard',_picCard)
  }
}
export default picCard

