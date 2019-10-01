export const state = () => ({global:{}});//括号是为了防止=>{}引起编译器误会

export const mutations = {
  //方便才如此
  set(state, global) {
   state.global=global
  }
};
export const actions = {
  async get({commit}) {
    const {global} = await this.$axios.get('/global')
    commit('set', global)
  }
  ,
  async patch({commit, state}, data) {
    commit('set', data)
    this.$axios.patch('/global', state)
  }
}




