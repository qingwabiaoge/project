
export default(ctx)=> {
//新建函数挂载在app上 app.fn
//   console.log(ctx)


  ctx.fn=function(){
  console.log('ctx.fn运行了')
  }
  ctx.store.fn=function (string) {
    console.log('ctx.store.fn'+string)
  }


}
