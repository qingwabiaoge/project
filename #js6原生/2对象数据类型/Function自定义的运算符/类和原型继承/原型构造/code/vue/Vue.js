import store from './store'

class Vue {
    constructor({data, methods, props, beforeCreate, created, computed, watch}) {
        beforeCreate()

        for (let item in {...data, ...props, ...methods}) {

            this[item] = methods[item]
        }

        //计算属性和watch
        for (let item in {...computed, ...watch}) {
            Object.defineProperty(this, `${item}`, {
                get: computed.com,
                set: function () {
                    console.log('触发watch')
                }
            })
        }


        created()
    }

    get $store() {

        return store;
    }
}


export default Vue