const obj = {
    fn: undefined,

}


export default obj



//在异步队列 运行时间 import已经完成
setTimeout(function () {
    obj.fn(10)
}, 0)

