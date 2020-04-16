
import App from './App'
import $axios from './$axios'
import Vue from 'vue'
import router from './router/'
import Meta from 'vue-meta'
Vue.use(Meta)

Vue.prototype.$axios = $axios


new Vue({
    el: "#app",
    router,
    render: h => h(App),

})

