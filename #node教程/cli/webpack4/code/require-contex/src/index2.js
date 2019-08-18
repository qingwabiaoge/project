var r = require.context('.', true, /^\.\/dir\/.*\.js$/);


//对路径数组运行r回调函数(运行了#1代码)
const obj = {}
r.keys().forEach(item => {
  const arr = item.split('/')
  const file = arr[arr.length - 1]
  const key = file.split('.')[0]
  obj[key]=r(item)
})

console.log(obj)


