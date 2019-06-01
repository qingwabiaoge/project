
export default {
    data: {
        name: 'app',
        age: 18,
        hometownProp: 'china',
        callbackProp: function (n) {
            console.log(this.age = n)
        },
    },

    beforeCreate() {
        this.$store.add(10)
        console.log('beforeCreateg钩子:对象将要建立')
    },
    created() {
        console.log('created钩子:对象建立了')
    },


}



