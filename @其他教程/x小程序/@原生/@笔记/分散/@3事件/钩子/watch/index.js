const { watch, computed } = require('./vuefy.js')

Page({
  data: {
    test: { a: 123 },
    test1: 'test1',
  },
  onLoad() {
    computed(this, {
      num:function(){
      return this.data.test1+this.data.test.a
      },
      test2: function() {
        return this.data.test.a + '2222222'
      },
      test3: function() {
        return this.data.test.a + '3333333'
      }
    })
    watch(this, {
      test: function(newVal) {
       
        console.log(newVal)
      }
    })
  },
  changeTest() {
    this.setData({ test: { a: Math.random().toFixed(5) } })
  },
})
