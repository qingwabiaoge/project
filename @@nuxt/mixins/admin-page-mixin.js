export default {
  layout: 'admin',
  async fetch ({ store, params ,redirect }) {
    if(!store.state.user.token){
      redirect('/login')
    }
  },
}
