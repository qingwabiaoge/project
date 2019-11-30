export default {
  async login ({ commit }, para) {
    const { token } = await this.$axios.post('/login', para)
    commit('setToken', token)
    this.$tool.cookie.setItem('token', token, 0.5)
    return token // 为了login.vue中跳转redirectUrl的异步,形成promise链
  }
}
