const _btn=require('./index.vue')

let btn={
  install:function (Vue) {
    Vue.component('btn',_btn)
  }
}
export default btn

