const obj = {

    fn: undefined,
    fn2: function () {
        this.fn(10)
    }

}

//异步数据 ,在异步队列 运行时间 import已经完成
setTimeout(function () {
    obj.fn2()
}, 0)
export default obj

