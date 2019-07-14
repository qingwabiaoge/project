//文件作用域1
const i = 1

function fn(n) {//函数作用域3引入了n

    console.log(n)
}

export {i, fn}