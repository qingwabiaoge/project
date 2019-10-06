# vue文件都是vue实例的配置文件

vue构造函数的选项

# 模板资源

> 本质:模板插件的本质都是解构过的函数,有全局和局部版本

### 组件-component 

```js
vue.component()
```

### 指令-directive 

> 本质 :自动运行的dom操作函数 

```
Vue.directive( )
```

### 过滤器-filter

> 本质:对binding数据进行处理的函数

### 过渡-transform

```
动画css class
```



# vue构造函数

### 引入第三方插件到vue文件

##### import对象到当前vue文件作用域

```js
import tool from '@/tool'
```

##### 变量和函数注入到global对象,import系统对象 到当前vue文件作用域

>  适合常量以及常量函数

- 注入到nuxt的ctx
- 注入到Vue
- 注入到Store
- 注入到Store的ctx
- 提交到$store.state
- 注入到axios



### 注入到Vue.prototype原型属性

> Vue.prototype适合常量以及常量函数

```js
//message实例
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

###  设置own属性

 ##### 1. 单个实例的vue构造函数选项

自由变量类: data/computed/

参数类: props/attr/slot/v-on 

模板类; components/ directive/ filter/

 ##### 2. 局部mixin向某些组件加入vue构造函数选项

```js
{
mixins:['构造函数选项']
}
```

 ##### 3. 全局mixin向所有组件加入vue构造函数选项

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

每个实例都可以使用的插件

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

# use()函数

vue统一安装四种插件的方式,开发者写出install,方便使用者安装

# 组件

### 异步路由组件的

 切换路由才下载这个组件的代码, 然后建立vue对象





