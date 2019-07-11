const obj = {
    f1: undefined,
    f2(n) {
        if (this.f1) {
            this.f1(n)
        }
    }

}

module.exports = obj

setTimeout(function () {
    obj.f2(1)
})