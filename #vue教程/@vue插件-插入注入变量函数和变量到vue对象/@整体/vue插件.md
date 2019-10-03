# 全局插件和局部插件

```html

meta charset="UTF-8">
<body>
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<link href="https://cdn.bootcss.com/animate.css/3.7.0/animate.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>


<div id="app">
    <cl></cl>

    <div>{{msg|setLength(2)}}</div>
    <div>{{msg2}}</div>
    <input type="text" v-focus>
    <input type="tel" v-focus-global>
</div>

</body>
<script>

    Vue.myGlobalMethod = function () {
        console.log('Vue.myGlobalMethod静态函数运行图')
    };

    Vue.prototype.$fn = function () {

        console.log("Vue.prototype.$fn() / this.$fn运行")
    };

    Vue.mixin({
        mounted() {
            console.log('Vue.mixin运行')
        }
    });

    Vue.directive('focus', {
        inserted: function (el) {
            el.focus()
        }
    })

    Vue.component('cl', {template: '<div>cl</div>'})

    Vue.filter('setLength', function (value, num) {
        return value.slice(0, num)
    })
    //Vue的实例化对象app
    const vm = new Vue({
        el: "#app",
        data: {msg: '你好你好你好你好'},
        created() {
            Vue.myGlobalMethod()
            this.$fn()
        },
        methods: {},
        mixins: [{
            data: {msg2: 'msg - mixin'}
        }],
        components: {
            cl: {template: '<div>cl-local</div>'}
        },
        filters: {
            setLength(value, num) {
                return value.slice(0, num + 2)
            }
        },
        directives: {
            'focus-global': {
                inserted: function (el) {
                    el.focus()
                }
            }
        }

    });


</script>

```

### 全局插件: 

每个实例都可以使用的组件

```javascript

export default {
    install(Vue, options) {
        Vue.myGlobalMethod = function () {  // 1. 添加全局方法或属性，如:  vue-custom-element
            // 逻辑...
        }

        Vue.directive('my-directive', {  // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
            bind (el, binding, vnode, oldVnode) {
                // 逻辑...
            }
            ...
        })
    
        Vue.mixin({
            created: function () {  // 3. 通过全局 mixin方法添加一些组件选项，如: vuex
                // 逻辑...
            }
            ...
        })    
    
        Vue.prototype.$myMethod = function (options) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
            // 逻辑...
        }
    }
}



然后import 'xxx'

vue.use()
```

### 局部插件

局部插件是 router的作用引起的,写在组件构造器里,路由切换,触发构造函数才建立

# 插件种类(有全局和局部版本)

**作用**

插件的作用就是注入

每个vue组件都是一个对象 ,往对象里注入方法和变量就能在当前对象里使用

### 注入到Vue.prototype原型属性

 Vue.prototype适合常量以及常量函数

message实例

```js
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<button onclick="mseeage({msg: 'msg',isShow:true})">message</button>
<button onclick="mseeage({msg: 'msg2',isShow:true})">message</button>

<script>


  //1.建立vue对象
  const vm = new Vue({template: '<h1 v-if="isShow">{{msg}}</h1>', data: {msg: '', isShow: false}})
  const dom = vm.$mount().$el
  document.body.appendChild(dom)

  function mseeage(options) {
    Object.assign(vm, options)
    setTimeout(function () {
      vm.msg = null
    }, 3000)
  }
</script>

```

###  注入到own属性

**作用**

1. data/computed/slot/v-on/props/ 注入到实例

2. 局部mixin向某些组件注入可复用own属性
3.  全局mixin向某些组件注入可复用own属性

**原理**

 注入到到vue对象own属性,并覆盖同名键值,原理可能是Object.assign

**注**:computed和data不能交叉使用会报错

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
  <title>Mixins Option Demo</title>
</head>
<body>

<div id="app">
  {{a}}-{{b}}-{{c}}
</div>

<script type="text/javascript">
  //相当于每一个实例都加mixins:['']

  Vue.mixin({
    data() {
      return {a: 1}
    },
    computed: {
      b() {
        return 2
      },
      c() {
        return 3
      }
    },
    created() {
      console.log('全局混入')
    }
  })

  Vue.mixin({
    created() {
      console.log('全局混入2')
    }
  })

  var app = new Vue({
    el: '#app',
    //computed和data不能交叉使用会报错
    data: {a: 10, c: 3},
    computed: {
      b() {
        return 20
      }

    },
    created() {
      console.log('实例')
    }
  })

</script>
</body>
</html>

```

### 注入到模版资源:

##### 组件 component 

```
全局组件,添加全局组件构造器解析自定义标签:
 
全局组件构造器 Vue.use(Element);,

< Button >< /Button> 被解析时会查询是否有此组件的构造器运行构造函数
```

#####  指令directive 

  ```
自动运行的dom操作函数 

  ```

##### 过滤器filter

```
对binding数据进行处理的函数
```
##### 过渡transform

```
动画css class
```

### 不注入到对象直接import声明变量到当前作用域

```js
import tool from '@/tool'
```

### 注入静态函数和静态变量

适合常量以及常量函数

- 注入到nuxt的ctx
- 注入到Vue
- 注入到Store
- 注入到Store的ctx
- 提交到$store.state
- 注入到axios



# use()函数

vue统一安装四种插件的方式,开发者写出install,方便使用者安装

# 组件

### 异步路由组件的

 切换路由才下载这个组件的代码, 然后建立vue对象





