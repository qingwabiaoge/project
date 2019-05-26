let i = 0


console.log('export.js运行的代码')
function fn(str) {
    i++
    console.log(`第${i}次:${str}`)
}
fn('export.js调用执行fn')
export {i, fn}
