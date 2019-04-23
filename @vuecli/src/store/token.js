
import router from '../router'


//关于token的存放位置
//1.只用vuex存储：刷新页面vuex重新初始化，token消失导致需要重新登录
//2.window.sessionStorage: 初始化的时候用sessionStorage来赋值，刷新页面重新初始化，但因为sessionStorage里面存有token有值，
//那么state.token就有值了,vue-router就不会拦截，则无需重新登录。（这个demo用的是这种）
//3.window.localStorage: 初始化的时候用localStorage来赋值，这种情况跟sessionStorage差不多。后台配合给长时间有效的token比较好,
//如果token的有效期比较短，直接有sessionStorage比较好。

export default {
  state: {token: window.sessionStorage.getItem('token')||''},
  mutations: {
    setToken: (state, token) => {
      //更改token的值
      // state.token = data;
      state.token = token
      window.sessionStorage.setItem('token', token);
      // window.sessionStorage.setItem('user', JSON.stringify(user))

    },
    clearToken: (state) => {
      //登出的时候要清除token
      state.token = '';
      window.sessionStorage.removeItem('token');
      // window.sessionStorage.removeItem('user');
      router.push('/login')
    }
  },

  actions: {
    async getToken({commit}, para) {
      const {token} = await this.$axios.post('/adminLogin', para);
      commit('setToken', token);
      return token //为了login.vue中跳转redirectUrl的异步,形成promise链
    },
  }

}

