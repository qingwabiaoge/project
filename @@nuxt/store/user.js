export const state = () => ({ token: null })
export const mutations = {
  setToken (state, token) {
    // console.log(token)
    state.token = token
  },

  logout (state) {
    state.token = null
    this.$tool.cookie.clearItem('token')
    this.$router.push('/login')
  }
}

export const actions = {
  async login ({ commit }, para) {
    const { token } = await this.$axios.post('/login', para)
    commit('setToken', token)
    this.$tool.cookie.setItem('token', token, 0.5)
    return token // 为了login.vue中跳转redirectUrl的异步,形成promise链
  }
}
