export default function ({ store, error, redirect, req }) {
console.log(store)
  if (!store.state.token) {
    redirect('/login')
  }
}
