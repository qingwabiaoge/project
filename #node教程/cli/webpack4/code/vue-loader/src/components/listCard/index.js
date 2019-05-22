import _listCard from './index.vue'

let listCard={
  install:function (Vue) {
    Vue.component('listCard',_listCard)
  }
}
export default listCard

