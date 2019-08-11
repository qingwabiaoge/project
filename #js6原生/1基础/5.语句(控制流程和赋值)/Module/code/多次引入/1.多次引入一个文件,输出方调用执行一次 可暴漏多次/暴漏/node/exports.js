//此代码运行一次
console.log('export.js代码运行')

module.exports = obj = {
    i: 0,
    //被调用的函数执行多次
    fn(str) {
        this.i++
        console.log(`第${this.i}次运行:${str}`)
    }
}

obj.fn('exprot.js调用fn')

