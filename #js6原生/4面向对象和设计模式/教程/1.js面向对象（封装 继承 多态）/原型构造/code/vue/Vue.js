import store from './store'

class Vue {
    constructor({data, methods, props, beforeCreate, created, computed, watch}) {
       if(beforeCreate){
           beforeCreate()

       }
       const obj={...data, ...props, ...methods}
        for (let item in obj) {
            this[item] = obj[item]
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