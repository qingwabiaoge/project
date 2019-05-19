export default {

  state: {isLoading: false,},
  mutations: {
    set_loading(state) {

      state.isLoading = !state.isLoading
    }
  }

}
