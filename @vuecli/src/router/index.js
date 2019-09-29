import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'


Vue.use(Router)

const router = new Router({
  //mode:'history', //网址带不带#号
  routes: [
    {
      path: '*',
      component: () => import('../pages/404')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login')
    },

    {

      path: '/',
      // redirect:'/produce',
      name: 'index',
      //因为有模版包含所以不能直接用login组件做跟目录
      component: () => import('../pages/index'),
      meta: {
        requiresAuth: true
      },

      children: [
        {
          path: 'produces/',
          name: 'produces',
          component: () => import('../pages/index/produces'),
          meta: {
            //requiresAuth: true
          }
        },

        {

          path: 'articles/:cid',
          name: 'articles',
          component: () => import('../pages/index/articles'),
          meta: {
            //requiresAuth: true
          }
        },


        {
          path: 'component',
          name: 'component',
          component: () => import('../pages/index/component'),
          meta: {
            //requiresAuth: true
          },
        },

        {

          path: 'message/',
          name: 'message',
          component: () => import('../pages/index/message'),
          meta: {
            //requiresAuth: true
          }
        },
        {
          path: 'global',
          name: 'global',
          component: () => import('../pages/index/global'),
          meta: {
            //requiresAuth: true
          },

        }
      ],

    },


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
  let token = store.state.token.token;
  // console.log('beforeEach-from')
  // console.log(from)
  // console.log('beforeEach-to')
  // console.log(to)
  // console.log(next)
  //判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {

    if (token) {
      next();
    } else {
      console.log(to.fullPath)
      next({
        path: '/login/',
        query: {redirect: to.fullPath || from.fullPath}  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }

  } else {
    next();//如果无需token,那么随它去吧

  }
});
export default router
