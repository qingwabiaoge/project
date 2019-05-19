//require.context是 闭包返回的一个函数地址

var r = require.context('.', true, /^\.\/dir\/.*\.js$/);

//r是一个函数
console.log(r)


//列出r函数的所有静态函数
console.log({r})


//運行r函數
console.log(r('./dir/a.js'))  //@return {a: 1}  文件名做key 输出模块做value



//使用r函數的靜態函數
console.log(r.keys()); // @return ["./dir/a.js", "./dir/b.js", "./dir/cs/c.js"]


console.log('--------------------------------------------')


//对路径数组运行r回调函数(运行了#1代码)
obj = {}
r.keys().forEach(item => {
    obj = Object.assign(obj, r(item))
})

console.log(obj)//{a: 1, m: 2, n: 3}





