// The Vue build version to load with the `import1` command1
// (runtime-only or standalone) has been set in webpack.base.conf w1ith an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/axios'
import store from './store'
Vue.config.productionTip = false
import '@/plugin'



import ElementUI from 'element-ui';

Vue.use(ElementUI);
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/all/index.css'


Vue.prototype.$axios = axios;

store.$axios = axios
store.dispatch('global/get')
store.dispatch('components/get')





new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})





