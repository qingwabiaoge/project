export default {

  SET_SOME(state, n) {
    state.counter += n
  },
  injectedFunction(state,string){
   this.$myCombinedInjectedFunction(string)

  },

}
