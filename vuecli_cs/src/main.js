// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
/*css-----------------------------------------------------------------*/
import './assets/css/index.css'

/*router-------------------------------------------------------------------*/
import router from './router/'

/*全局运行代码--------------------------------------------------------------*/
console.log('main全局引入文件,自动运行一次')

/*global注入---------------------------------------------------------------*/
window.myglobal = {
  a: '这是一个window全局变量,并不会想vuex一样响应式', setMyGlobal(value) {
    this.a += value
  }
}
/*Vue注入*/
Vue.fn = function () {
  console.log('Vue.fn运行')
}

/*store注入*/
import store from './store'

store.$fn = function () {
  console.log('vm.$store.$fn运行')
}


/*Vue.prototype.xxx------------------------------------------------------------*/
Vue.prototype.$fn = function () {
  console.log('Vue.prototype.$fn运行')
}

/*Vue.use install*/

import $f from './prototype/install'
Vue.use($f)

import Message from './plus/Message/index'
Vue.use(Message);


//component------------------------------------------------------------------------
Vue.component('mycomponent', {template: `<div>component</div>`})

import baseButton from './components/baseButton'

Vue.use(baseButton)

//mixin---------------------------------------------------------------------------------
Vue.mixin({
  mounted() {

    console.log('全局mixin的消息:mounted')
  }
})

import mixin from './mixin/mixin'
Vue.use(mixin)


//directive------------------------------------------------------------------------
Vue.directive('h', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {

    if (binding.value) {
      el.style.display = 'none'
    }

    console.log({el})//{el:el}

  }
})


import focus from './directive/focus'
Vue.use(focus)

//filter-----------------------------------------------------------------------------------------
import tocase from './filter/tocase'
Vue.use(tocase)




//成套插件----------------------------------------------------------------------------------------
/*vue-i18n*/

import './components'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja',
  //全局变量
  messages: {
    'zh': {
      hello: '你好'
    },
    "ja": {
      hello: "こんにち"
    },
    'en': {
      hello: 'hello'
    }
  }
});
//VueTouchRipple
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
Vue.use(VueTouchRipple,  {
  // default global options
  color: '#0f0',
  opacity: 0.3,
  speed: 1,
  transition: 'ease'
} )

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//----------------------------------------------------------------------------
console.log('process',process.env)

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {App},
  template: '<App/>',
  created(){
    console.log(this)
  }
})
