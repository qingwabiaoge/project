export default {
  install(Vue) {
    Vue.filter(
      "tocase", function (value, add) {
        console.log('filter函数运行')
        return value.toString().toUpperCase() + add
      }
    )
  }
}
