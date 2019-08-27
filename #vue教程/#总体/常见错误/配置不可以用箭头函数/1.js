
console.log(this)// undifined

export default {
  data() {
    return {msg: 'msg'}
  },
  methods: {
    fn() {
      console.log(this)
    },
    fn2: () => {
      console.log(this) //继承上级函数作用域的undifined
    }
  }

}
