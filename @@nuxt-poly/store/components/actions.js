export default{
  async get({commit}) {
    const {components} = await this.$axios.get('/components')
    commit('set', components)
  }
  ,
  async put({commit, state}, data) {
    commit('set', data)
    this.$axios.put('components', data)
  }
}
