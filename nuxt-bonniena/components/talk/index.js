import _talk from './index.vue'

let talk={
  install:function (Vue) {
    Vue.component('talk',_talk)
  }
}
export default talk
