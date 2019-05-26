exports.i = 1
exports.fn =function (){
    this.i++
    console.log(`输出方的全局变量i:${this.i}`)
}

