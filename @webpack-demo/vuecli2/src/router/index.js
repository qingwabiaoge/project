import Vue from 'vue'
import Router from 'vue-router'
import cs from '@/pages/cs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cs',
      component: cs
    }
  ]
})
