import {cookie} from '@/tool'

export const state = () => ({token: undefined})
export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  logout(state) {
    state.token = undefined;
    cookie.clearItem("token");
    this.$router.push('/login')
  }
}

export const actions = {
  async login({commit}, para) {
    const {token} = await this.$axios.post('/login', para);
    commit('setToken', token);
    cookie.setItem('token', token, 0.5)
    return token //为了login.vue中跳转redirectUrl的异步,形成promise链
  }
}



