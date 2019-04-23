import _search from './index.vue'

let search={
  install:function (Vue) {
    Vue.component('search',_search)
  }
}
export default search
