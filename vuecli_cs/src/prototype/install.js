
export default {
  install(Vue, options) {

    Vue.prototype.$f=function () {
      console.log( "Vue.prototype.$f运行")
    }
  }

}
