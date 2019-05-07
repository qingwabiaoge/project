import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default () => {
  Vue.use(VueLazyload, {
    preLoad: 1.5,
    error: require('../assets/images/image.svg'),
   loading: require('../assets/images/loading.svg'),
    // attempt: 1
  })
}



