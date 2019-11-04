export default function ({store, redirect}) {
  // console.log(store,'路由中间件运行')
  if (!store.state.user.token) {
    redirect('/login')
  }
}
