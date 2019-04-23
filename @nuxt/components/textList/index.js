import _textList from './index.vue'

let textList={
  install:function (Vue) {
    Vue.component('textList',_textList)
  }
}
export default textList
