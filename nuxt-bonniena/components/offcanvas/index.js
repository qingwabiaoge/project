import _offcanvas from './index.vue'

let offcanvas={
  install:function (Vue) {
    Vue.component('offcanvas',_offcanvas)
  }
}
export default offcanvas
