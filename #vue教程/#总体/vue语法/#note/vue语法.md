# 指令写法

指令的本质是函数,渲染dom的函数.

```html
<mark v-direct></mark>
<mark v-direct='value'></mark>
<mark v-direct:arg='value'></mark>
<mark v-direct.modifiers='value'></mark>
<mark v-direct:arg.modifiers='value'></mark>
```

```html
 <template v-slot="{xx}">     
 
<template v-slot:myname>xxx</template>    
<template v-slot:myname="scope">xxx</template>

<input v-model="msg">
<input v-model.trim="msg">
   
<button v-on:onlick.stop='fn'></button>
    
```

```html
{{}}

{{msg|myFilter(n)}}
```

# 组件

### 组件的key

组件本质是构造器函数,属性本质是函数调用的参数

##### 原始版

```html
<person :data='{...{name:'li',age:'12'},...{sex:'男'}}' 
        :class='[{red:true},'blue']'
        :style='{color:'red',backgroud:'white'}'> 
</person>
```

##### 进化版data

1. 是看起来不乱,

2. data被监听可以随着data改变,重新渲染dom

```html
<person :data='{...data,...other}' :class='class' :style="style"> </person>

<script>
data(){
    return{
        data:{name:'li',age:'12'},
        other:{sex:'男'},
        class:[{red:true},'blue'],
        style:{color:'red',backgroud:'white'}
        
    }
}
</script>
```

##### 再进化版 computed

```html
<person :data='computedData' :class='class' :style="style"> </person>

<script>
data(){
    return{
        data:{name:'li',age:'12'},
        other:{sex:'男'}
        class:[{red:true},'blue'],
        style:{color:'red',backgroud:'white'}
        
    }
}
    computed:{
        computedData(){
            return{...data,...other}
        }
        
    }
</script>

```

### 组件的v-on属性

##### 原始版

```html
<person @myevent='obj.age++'> </person>

<script>
data(){
    return{
        obj:{name:'li',age:'12',sex:'男'}
    }
}
</script>
```

##### method进化版

好处看起来不乱

```html
<person @myevent='addOneAge'> </person>

<script>
methods:{
    data(){
    return{
        obj:{name:'li',age:'12',sex:'男'}
    }
},
  addOneAge(){
      this.obj.age++
  }
}
</script>
```

# 属性值

![](./对象属性值.svg)

```js
Vue.component('my-component', {
  props: {
//1基本类型当属性值----------------------------------------
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
      
//2数组当属性值---------------------------------------------------    
    propB: [String, Number],
    // 必填的字符串
      
//3对象当属性值---------------------------------------------------    
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
      
             
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取      
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
        //4 函数做属性值------------------------------------------------------------------------
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

```js
//computed
data:{msg:1},
//----------------
data(){
   return{msg:1}
}

computed:{
//4 函数做属性值------------------------------------------------------------------------
    name(){
        
        return this.firstName+this.lastName
    }
    
    
}
```

```js
//路由解耦
<meta charset="utf-8">
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>

<div id="app">
    <h1>Route props</h1>
    <ul>
        <li>
            <router-link to="/">/</router-link>
        </li>
        <li>
            <router-link to="/hello/you">/hello/you</router-link>
        </li>
        <li>
            <router-link to="/static">/static</router-link>
        </li>
        <li>
            <router-link to="/dynamic/1">/dynamic/1</router-link>
        </li>

    </ul>

    <hr>

    <router-view class="red" attr="自定义属性"></router-view>
</div>


<script>


    function dynamicPropsFn(route) {
        const now = new Date()
        return {
            name: (now.getFullYear() + parseInt(route.params.years)) + '!'
        }
    }


    const Hello = {
        template: `<div>
                       <p>
                        name:<b>{{name}}</b> <br>
                        attrs: {{$attrs}}
                        </p>
                    </div>`,
        props: {
            name: {
                type: String,
                default: 'Vue!'
            }
        }
    }


    const router = new VueRouter({
        mode: 'history',

        routes: [
//1普通值做属性值-----------------------------------
            {path: '/', component: Hello}, // No props, no nothing        
            {path: '/hello/:name', component: Hello, props: true}, // Pass route.params to props
//2对象做属性值-----------------------------------               
            {path: '/static', component: Hello, props: {name: 'world'}}, // static values
//4函数当属性值--------------------------------------------------- 函数生成props作为router-view的属性--------------------------------------
            {path: '/dynamic/:years', component: Hello, props: dynamicPropsFn}, // custom logic for mapping between route and props
        ]
    })

    new Vue({
        router,


    }).$mount('#app')

</script>

<style>
    .hello {
        color: red
    }
</style>

```

```js
  //router嵌套
  const router = new VueRouter({
      mode:'history',
      routes: [{//配置最顶级的<route-view/>
        path: '/fa/',
        name: 'fa',
        component: fa, //默认值
        children: [ //每个children对应一个<route-view/>
          {
            path: '/cs',
            name: 'cs',
            component: cs,
          }
        ]
      },

      ]
    }
  )
```

