export default function ({ store, error, redirect, req }) {
console.log('路由钩子')
  if (!store.state.token) {
    redirect('/login')
  }
}
