//引入文件类代码

console.log('server和浏览器都运行')

if (process.client) {
  window.console.log('process.client这里只在客户端运行')
}

if (process.server) {
  console.log('process.server这里只在服务端执行')
}

console.log('process.env.NODE_ENV:'+process.env.NODE_ENV)
