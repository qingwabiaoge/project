const obj = {
    f: undefined,

}

module.exports = obj

setTimeout(function () {
    obj.f(1)
})