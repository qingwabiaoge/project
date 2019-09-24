// The Vue build version to load with the `import1` command1
// (runtime-only or standalone) has been set in webpack.base.conf w1ith an alias.
import Vue from 'vue'
import Vuex from 'vuex'

const {mapState, mapActions, mapMutations, mapGetters} = Vuex.createNamespacedHelpers('components')
import App from './App'
import router from './router'
import axios from '@/axios'
import store from './store'

Vue.config.productionTip = false


import uniform from '@/components/uniform'

Vue.component('uniform', uniform)


//element-ui---------------------------------------------------
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

//VueLazyload---------------------------------------------------
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)


import './assets/less/all/index.css'

if (process.env.NODE_ENV !== "development") {
  require('./assets/css/test.css')
}


function importPlugins(r) {
  r.keys().forEach(r);
}

/*importPlugins(require.context('./plugins', false, /\.js$/));*/

console.log(process.env)
Vue.prototype.$axios = axios;


store.$axios = axios
store.dispatch('global/get')
store.dispatch('components/get')
console.log(store)

//把mixin挂载在vue实例
Vue.mixin({
  // props: ['data'],
  methods: {
    // 必传 标题，描述。其他的 meta 标签通过 payload 注入，其中，每个 meta 的 hid 需要是唯一的。
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'content'
        }].concat(payload)
      }
    },

  },
  computed: {
    ...mapGetters([
      'components',
      'newsCategory',
      'categorys',
      'goodsCategory',
    ])
  },

})


new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})






