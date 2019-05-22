export default {
  install(Vue) {

    Vue.mixin({
      created() {
        console.log('全局mixin的消息:$route是切换到页面组件路由才created')
      },
      activated() {
        console.log('全局mixin消息: 激活 activated钩子函数运行<keep-live> 阻止了$route销毁页面组件')
      },
      deactivated() {
        console.log('全局mixin消息:失活 deactivated钩子函数运行<keep-live> 阻止了$route销毁页面组件')
      },
      destroyed() {
        console.log('全局mixin消息:$route使离开当前页面组件时间销毁')
      }
    })
  }
}
