let i = 0

//这个代码运行
console.log('export.js运行的代码,只运行一次')

//函数运行一次调用一次
function fn(str) {
    i++
    console.log(`第${i}次:${str}`)
}


fn('export.js调用执行fn')


export {i, fn}
