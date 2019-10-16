# 指令的作用

数据改变,自动触发模板指令函数,指令函数操作dom,视图更新


```javascript
    <input v-h="true" type="text">
    <input v-h="false" type="text">
    
    Vue.directive('h', {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el, binding) {

            if (binding.value) {
                el.style.display = 'none'
            }

            console.log({el})

        }
    })
    var app = new Vue({
        el: "#app",
        data: {msg: 1},

    });

```

# 常用指令

### v-bind:prop

传递字符串给子组件

```
<cl x="str">
</cl>
```

 传递任何类型数据给子组件


```
<cl :x="1" :y="{a:1}">
</cl>
```

###  v-if vs v-show


v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是**惰性**的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

### v-model  ,v-bind:prop. sync

*适合场景(子组件操作经常更新的父组件)*

1. 输入更新到父组件(表单类组件,自定义表单组件)

2. 类似表单

   1. 内部选中项更新到外部(导航类,tab类,折叠面板),类似表单元素中的select

   1. 内部关闭更新的外部(对话框,shadow),类似表单元素中的switch

##### v-model 修饰符

###### 原理

```html
 <input type="text" v-model="msg">
<!--上面等价于 -->
 <input type="text" :value="msg" @input="msg=$event.target.value"> 
   
```
###### 修饰符

>  .lazy

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转变为使用 `change` 事件进行同步：

```
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

> .number

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

>  .trim

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```
<input v-model.trim="msg">
```

###### 单向数据流

要在父组件修改prop的值

错误案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>

<div id="app">
    {{propx}} <br>
    <ch :propx.sync="propx"></ch>

    <!--
    等价于
    <ch :propx="propx" @update:foo="data => propx = data"></ch>
    -->
</div>

<script>
    var ch = {
        template: `<input type="text" v-model="propx"  @input="fn" >`,
        props: ['propx'],
        methods: {
            fn: function () {

                this.$emit('update:propx', this.propx)
            }
        }


    }
    vm = new Vue({
        el: '#app',
        components: {ch},
        data: {propx: 'some'}
    })

</script>

</body>
</html>

```

###### obj.a问题

```html
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>

<div id="app">
  <!--
        当item=1时
  v-model="1"  无法赋值

  -->
  <input type="text" v-for="item in arr" v-model="item"> <br>
  <!--
       当item=1时
     :value=1
     @input="arr[1]=data" 这里是给数组的键赋值,所以可行

  -->

  <input type="text" v-for="(item,index) in arr" v-model="arr[index]">
  {{arr}}
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      arr: ['1', '2']
    }
  })
</script>

```

##### :propx:sync

###### 原理

propx:sync不限于value input,但是不能用于原生组件

```javascript
    <ch :prop1.sync="prop1"></ch>
    <!--等价于下边-->
    <ch :prop1="prop1"
        @update:prop1="data => prop1 = data">

    </ch>
```

###### 单向数据流

要修改父组件的prop的值

错误案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>

</head>
<body>
<div id="app">
    <cl :msg.sync="msg">


    </cl>
    {{msg}}

</div>
<script>

    Vue.component('cl', {
        template: `<div> <input type="text" v-model="msg" ></div>`,         //不该在子组件设置prop,不用用v-model
        props: ['msg'],
        watch: {
            msg: function () {
                this.$emit('update:msg', this.msg)
            }

        }
    })
    var vm = new Vue(
        {
            el: '#app',
            data: {
                msg: 1,
            },


        }
    )
</script>


</body>
</html>

```





