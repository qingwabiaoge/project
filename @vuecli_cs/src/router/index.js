import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import _import from '@/pages/import.vue'

Vue.use(Router)
const router = new Router({
  //mode:'history', //网址带不带#号
  linkActiveClass: 'active',  //链接流加acitve,
  routes: [

    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/importAsyncRoute',
      name: 'importAsyncRoute',
      component: () => import('@/pages/importAsyncRoute.vue'),
    }
    ,
    {
      path: '/import',
      name: 'import',
      component: _import
    }
    ,
    {
      path: '/vue.static',
      name: 'vue.static',
      component: () => import('@/pages/vue.static.vue'),
    }
    , {
      path: '/process',
      component: () => import('@/pages/process.vue'),
    }

    ,
    {
      path: '/store',
      name: 'store',
      component: () => import('@/pages/store.vue'),
    }
    ,
    {
      path: '/store2',
      name: 'store2',
      component: () => import('@/pages/store2.vue'),
    }
    ,
    {
      path: '/vue.directive.global',
      name: 'vue.directive.global',
      component: () => import('@/pages/vue.directive.global.vue'),
    }
    ,
    {
      path: '/Vue.directive.local',
      name: 'Vue.directive.local',
      component: () => import('@/pages/Vue.directive.local.vue'),
    }

    ,
    {
      path: '/vue.component',
      name: 'vue.component',
      component: () => import('@/pages/vue.component.vue'),
    }
    ,
    {
      path: '/vue.prototype',
      name: 'vue.prototype',
      component: () => import('@/pages/vue.prototype.vue'),
    }
    ,
    {
      path: '/route-life',
      name: 'route-life',
      component: () => import('@/pages/route-life.vue'),
    }
    ,
    {
      path: '/svg',
      name: 'svg',
      component: () => import('@/pages/svg.vue'),
    }

    /*权限*/
    ,
    {
      meta: {auth: true},
      path: '/auth',
      name: 'auth',
      component: () => import('@/pages/auth.vue'),
    }
    ,
    {

      path: '/login',
      name: 'login',
      component: () => import('@/pages/login.vue'),
    }
    ,
    /*自定义插件*/
    {

      path: '/plus',
      name: 'plus',
      component: () => import('@/pages/plus.vue'),
    }

    /*window*/
    ,
    {

      path: '/global',
      name: 'global',
      component: () => import('../pages/global.vue'),
    }

    /*插件*/
    ,
    {

      path: '/i18n',
      name: 'i18n',
      component: () => import('@/pages/i18n.vue'),
    },
    /*filter*/
    {

      path: '/vue.filter',
      name: 'vue.filter',
      component: () => import('@/pages/vue.filter.vue'),
    }

    ,

    {

      path: '/vuex',
      name: 'vuex',
      component: () => import('@/pages/vuex'),
    }
    ,

    {

      path: '/styled-button',
      name: 'styled-button',
      component: () => import('@/pages/styled-button'),
    },
    {

      path: '/styled-extend',
      name: 'styled-extend',
      component: () => import('@/pages/styled-extend'),
    },
    {

      path: '/styled-div',
      name: 'styled-div',
      component: () => import('@/pages/styled-div'),
    },
    {

      path: '/img',
      name: 'img',
      component: () => import('@/pages/img'),
    },
    {

      path: '/VueTouchRipple',
      name: 'VueTouchRipple',
      component: () => import('@/pages/VueTouchRipple'),
    },
    {

      path: '/element-ui.vue',
      name: 'element-ui.vue',
      component: () => import('@/pages/element-ui.vue'),
    }


  ]
})


/*--
// 全局导航守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach全局路由守卫');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  //next可以做跳转

  const nextRoute = ['axios', 'productlist3'];
  let isLogin = global.isLogin;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      console.log('what fuck');
      router.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'home' });
    }
  }
  next();
});

--*/

//注册全局钩子用来拦截导航 在每一个路由进入前执行
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token;
  console.log('routebeforeEach钩子函数')
  // console.log('beforeEach-from')
  // console.log(from)
  // console.log('beforeEach-to')
  // console.log(to)
  //判断要去的路由有没有
  if (to.meta.auth) {

    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }

  } else {
    next();//如果无需token,那么随它去吧

  }
});


export default router
