
import App from './App'
import $axios from './$axios'
import Vue from 'vue'
import router from './router/'


Vue.prototype.$axios = $axios


new Vue({
    el: "#app",
    router,
    render: h => h(App),

})

