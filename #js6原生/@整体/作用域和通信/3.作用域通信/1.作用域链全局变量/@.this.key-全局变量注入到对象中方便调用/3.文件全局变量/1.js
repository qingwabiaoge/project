const store = require('./store')

const obj = {
    fn() {
        this.store.a = 10
    },
    store
}

obj.fn()
