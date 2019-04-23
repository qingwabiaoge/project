//引入文件类代码

console.log('server和浏览器都运行')

if (process.client) {
  window.console.log('这里只在客户端运行')
}

if (process.server) {
  console.log('这里只在服务端执行')
}
