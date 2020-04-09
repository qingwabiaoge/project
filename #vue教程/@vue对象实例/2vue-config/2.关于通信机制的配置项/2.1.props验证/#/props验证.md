```js
Vue.component('my-component', {
  props: {
    // 1.基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Boolean,
    //2. 多个基本值
    propB: [String, Number],
    //3. 不可缺省
    propC: {
      type: String,
      required: true
    },
    // 4.默认值的基本值
    propD: {
      type: Number,
      default: 100
    },
    // 5.默认值为对象类型
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },  
     //对象双类型
     propH: {
              msg: {type: [Object, Array], 
             default: () => ({a: 1})
        }
       ,
    // 6.自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
   
  }
})
```
