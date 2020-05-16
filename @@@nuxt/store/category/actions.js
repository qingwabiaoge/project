export default {
  async gets ({ commit }) {
    const { categorys } = await this.$axios.get('/categorys')
    commit('set', categorys)
  },
  async put ({ commit, state }, data) {
    commit('set', data)
    this.$axios.put('category', data)
  }
}
