//引入文件类代码

console.log('不设置process.xxx,server和浏览器都运行')

if (process.client) {
  window.console.log('process.client这里只在客户端运行')
}

if (process.server) {
  console.log('process.server这里只在服务端执行')
}