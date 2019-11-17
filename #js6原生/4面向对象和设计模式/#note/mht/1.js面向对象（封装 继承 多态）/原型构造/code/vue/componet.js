import app from './main'

export default {
    data: {
        name: '小黑',
        age: 2
    },
    computed: {
        com: function () {
            return this.name + this.age
        },

    },
    props: {hometownProp: app.hometownProp, callbackProp: app.callbackProp}
    ,
    methods: {
        $emit(n) {
            this.callbackProp(n)
        }
    },

    beforeCreate() {
        console.log('对象将要建立')
    },
    created() {
        console.log('对象建立了')
    },

}