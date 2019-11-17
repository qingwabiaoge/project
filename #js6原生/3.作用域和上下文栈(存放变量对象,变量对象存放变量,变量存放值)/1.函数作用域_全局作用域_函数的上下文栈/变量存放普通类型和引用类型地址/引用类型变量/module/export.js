let i=0

function f() {
    i++ //取的是函数定义时间的作用域
    console.log(i)
}

export default f
