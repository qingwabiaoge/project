// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import btn from'./components/btn/index'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(btn)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
