import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import produce from '@/page/produce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/produce',
      name: 'produce',
      component: produce
    }
  ]
})
