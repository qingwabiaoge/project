import _card from './index.vue'

let card={
  install:function (Vue) {
    Vue.component('card',_card)
  }
}
export default card
