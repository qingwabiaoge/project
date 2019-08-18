//require.context是 闭包返回的一个函数地址

var r = require.context('.', true, /^\.\/dir\/.*\.js$/);

//r是一个函数
console.log(r)


//列出r函数的所有静态函数
console.log({r})

//使用r的静态函數
console.log(r.keys()); // @return ["./dir/a.js", "./dir/b.js", "./dir/cs/c.js"]

//运行r函數
console.log(r('./dir/a.js'))  //@return 1,
                               // 返回export default的值,
                              // 引入的同时还运行了a.js的语句






