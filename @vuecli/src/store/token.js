import router from '../router'

export default {
  namespaced: true,
  state: {token: window.sessionStorage.getItem('token') || ''},
  mutations: {
    set: (state, token) => {
      //更改token的值
      // state.token = data;
      state.token = token
      window.sessionStorage.setItem('token', token);
      // window.sessionStorage.setItem('user', JSON.stringify(user))

    },
    remove: (state) => {
      //登出的时候要清除token
      state.token = '';
      window.sessionStorage.removeItem('token');
      // window.sessionStorage.removeItem('user');
      router.push('/login')
    }
  },

  actions: {
    async get({commit}, para) {
      const {token} = await this.$axios.post('/adminLogin', para);
      commit('set', token);
      return token //为了login.vue中跳转redirectUrl的异步,形成promise链
    },
  }

}

