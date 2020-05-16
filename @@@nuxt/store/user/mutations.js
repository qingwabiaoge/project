export default {
  // 方便才如此
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
