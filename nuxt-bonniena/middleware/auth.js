export default function ({ store, error, redirect, req }) {
 console.log(store,'路由中间件运行')
  if (!store.state.token) {
    redirect('/login')
  }
}
