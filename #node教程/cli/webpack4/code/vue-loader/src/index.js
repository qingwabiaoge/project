import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import VueLazyLoad from 'vue-lazyload'

import leiui from '@/plugins/lei-ui'
leiui()

import elementUi from '@/plugins/element-ui'
elementUi()

import swiper from '@/plugins/swiper'
swiper()

import 'swiper/dist/css/swiper.css'



// 会和pictextHistory造成样式错误
// import vuetify from '@/plugins/vuetify'
// vuetify()
//  import 'vuetify/src/stylus/app.styl'


import {api} from '@/api'
Vue.prototype.$api = api;

import './assets/less/all/index.css'

Vue.use(VueLazyLoad, {
    error: require('./assets/images/pic.svg'),
    loading: require('./assets/images/loading.svg')
})

new Vue({
    el: "#root",
    router,
    store,
    render: h => h(App)
})