

/*
require.context('./test', false, /.test.js$/);
@arg1{string} "./test'遍历当前目录下的test文件夹的所有
@arg2{boolean} false不遍历子目录
@arg3{RegExp} /.test.js$/  表示以.test.js结尾的文件,
@return {funciton}
*/


var r = require.context('.', true, /^\.\/dir\/.*\.jpg$/);

//r是一个函数
console.log(r)


//列出r函数的所有静态函数
console.log({r})

//使用r的静态函數
console.log(r.keys()); // @return ["./dir/a.js", "./dir/b.js", "./dir/cs/c.js"]

//运行r函數// 返回export default的值// 引入的同时还运行了a.js的语句
console.log(r('./dir/a.js'))  //@return 1,







