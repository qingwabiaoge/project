import _pagination from './index.vue'

let pagination={
  install:function (Vue) {
    Vue.component('pagination',_pagination)
  }
}
export default pagination
