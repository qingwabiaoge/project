![image-20200208231608963](img/Vue.component()/image-20200208231608963.png)

# 组件封装(类)

### 耦合

```html
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<div id="app">
    <!--点击改变value的值,value改变dom自动更新-->
    <ul>
        <li v-for="item in 4" @click="value=item" :class="value===item?'active':''">
           <button>{{item}}</button>
        </li>
    </ul>
    <br>
    {{value}}
</div>

<script>
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                value: 1
            }
        }
    })

</script>

<style>
    .active {
        color: red;
    }

</style>
```

### 组件解藕:

解藕的作用模块尽量小,越小的越方便复用

解耦后留下出口和入口通信(见作用域通信)

例如tab和tab-pane分开,

```html
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<div id="app">
    <!--点击改变value的值,value改变dom自动更新-->
    <cl v-model="value"></cl>
    <br>
    {{value}}
</div>

<script>
    const cl = {
        template: ` <ul>
                        <li v-for="item in 4"
                         @click="$emit('input',item)"
                         :class="item===value?'active':''">
                           <button> {{item}}</button>
                        </li>
                       </ul>`,
        props: ['value']
    }
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                value: 1
            }
        },
        components: {cl}
    })

</script>

<style>
    .active {
        color: red;
    }

</style>
```

### slot组件再解藕

slot嵌套更完全解耦,不相互依赖

```html
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<div id="app">
    <!--点击改变value的值,value改变dom自动更新-->
    <cl v-model="value"></cl>
    <br>
    {{value}}
</div>

<script>
    const cl = {
        template: ` <ul>
                        <li v-for="item in 4"
                         @click="$emit('input',item)"
                         :class="item===value?'active':''">
                           <button> {{item}}</button>
                        </li>
                       </ul>`,
        props: ['value']
    }
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                value: 1
            }
        },
        components: {cl}
    })

</script>

<style>
    .active {
        color: red;
    }

</style>
```

### filters再解耦(处理数据的过滤器)

```html
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<div id="app">
  <!--value是变量媒介,v-model参数-->
  <cl v-model="value" :data="10">

    <template scope="{item}">
      <button>
        {{item|mark(2)}}
      </button>
    </template>
  </cl>
  {{value}}
</div>

<script>
  const cl = {
    template: ` <ul>
                        <li v-for="item in data"
                         @click="$emit('input',item)"
                         :class="item===value?'active':''"
                       >
                     <!--    // item是变量媒介 scope是参数-->
                       <slot :item="item">


                      </slot>

                        </li>
                       </ul>`,
    props: ['value', 'data']
  }
  const vm = new Vue({
    el: '#app',
    data() {
      return {
        value: 1
      }
    },
    components: {cl},
    filters: {
      mark(value, n) {
        return `-${value}-`
      }
    }
  })

</script>

<style>
  .active {
    color: red;
  }

</style>

```

### 内聚封装:

模块化组件化标签化:把一个逻辑的dom  css  js逻辑  数据状态 封装在一起,简化成标签

```vue
<!--template被vueloader解析为js-->

<template>


</template>



<script>

    //  vue构造器的配置文件  es6-module输出
    export default {

      style: css`
    .title {
      /* You can access component's "this" via "vm" */
      color: ${vm => vm.$store.state.themeColor};
      font-size: ${modularScale(2)};
      margin: 0;
    }
  `
    }

</script>

<!--style被css-loader解析爲js-->
<style>



</style>

```



# 构造函数

### 组件和函数的联系

| dom                                        | Cl                                                           | 构造函数  Cl({prop,fn})                                      |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| HTMLDivElement是div的父类                  | Vue是Cl的父类                                                | function Cl(type){this.type=type}<br />Cl.prototype=Vue.prototype |
| <div></div>是构造函数div实例化             | <cl></cl>       构造函数Cl实例化                             | new Cl( )                                                    |
|                                            | props:{msg:{default:'msg'}}<br />构造函数Cl参数的默认值<br /> | function Cl(type="default"){this.type=type}                  |
|                                            | prop类型检测                                                 | 类似ts的函数参数类型检测                                     |
|                                            | Cl子组件里有局部注册的btn组件                                | function Cl(type){<br />this.type=type<br /><br />function Btn(){.......}<br /> Btn( )<br />} |
|                                            | Cl子组件里有全局注册的btn组件                                | global.Btn=funciont(){...}<br />function Cl(type){<br />this.type=type<br /> Btn( )<br />} |
|                                            | Cl组件有slot                                                 | function slot(data){<br />}<br />function Fa(slot){<br />let data={}<br />slot(data)<br /> }<br /><br />Fa(slot) |
|                                            | proviede/project                                             | <br />function Cl(enable){ <br />this.enable=enable<br />}<br /><br />function slot(enable){<br />Cl(enable)<br />}<br /><br />function Fa(enable,slot){<br />slot(enable)<br /> }<br /><br />Fa(true,slot) |
|                                            | CL子组件里的data变量                                         | function Cl(type){<br />this.type=type<br />var data=msg<br /> btn( )} |
| <div style=""/>的属性就是构造函数div的参数 | <cl type="primary"/>的属性是构造函数Cl的参数                 | new Cl("primary")                                            |
|                                            | 递归组件                                                     | 函数递归嵌套                                                 |
|                                            |                                                              | Vue.compoennt( )继承                                         |

### 组件标签<=>new Cl( )

```html
<cl age='age' @fn='fn'></cl>
```

```html
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>

<div id="app">


</div>

<script>

    const VueComponent = Vue.component('cl', {
        template: `<div>{{prop}}</div>`,
        props: {prop: {default: 10}}
    })
    const vm = new Cl({props: {prop: {default: 100}}})

    const dom = vm.$mount().$el
    document.getElementById('app').appendChild(dom)
</script>

<style>
    .red {
        color: red;
    }
</style>

```



### `prop`父标签的自定义属性

##### 语法

```vue
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<div id="app">
<!--  驼峰变横杠要不会警告和不显示-->
  <c-l is-show></c-l>
</div>
<script>
  Vue.component('cL', {template: `<div v-show="isShow">1</div>`, props: {isShow: Boolean}})
  const vm = new Vue({
    el: '#app'
  })


</script>

```

##### 访问

子组件可以通过this.xxx或者this.$props.xxx访问

##### 作用:

   1. 数据父传子  

   2. 组件属性不可以给 slot用`不要被父子组件的属性传递和v-for误导了`

### `@click='fn'`父标签自定义事件

##### 访问

子组件里通过 this.$listeners访问,不包含.native

子组件里通过$emit( )触发

不包含构造函数的回调参数类型的参数 

##### 作用:

子传父

### 父标签的默认属性

```
1. class
2. style
3. attr
```

##### 访问

父标签添加会落在子组件最外层dom上, attr可以通过this.$attr访问
### 组件slot,本质也是回调函数做参数

父组件

```vue
<!--父-->
<cl>
  <!--Cl构造函数的参数-->
 <template v-slot.myname='{value:1}'>
 </template>

</cl>
```

子组件

```html

<!--子-->
<template>
    <div>
        <!--回调函数-->
      <slot value='value',name="myname"></slot>  
    </div>
</template>

<script>
//子访问父标签的数据
this.$slots.default
this.$slots.myname
</script>

```

### privide/inject访问上级dom的组件的数据

```html
<meta charset="utf-8">
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>

<style>
  form {
    border: 1px solid #0bb20c
  }
</style>
<div id="app">

  <!--  <input type="text" disabled>-->

  <l-input disabled>

  </l-input>

  <l-form >
    <l-form-item disabled>
      <l-input>

      </l-input>

    </l-form-item>

  </l-form>
</div>
<script>


  Vue.component('LInput', {
    template: '<input :disabled="_disable" :value="null"/>',
    inject: {
      lForm: {default: {}},
      lFormItem: {default: {}}
    }, //引入父级的父级的父级的变量
    props: {disabled: Boolean},
    computed:{
      _disable(){
        return this.disabled||this.lFormItem.disabled||this.lForm.disabled
      }

    }
  })

  Vue.component('LFormItem', {
    template: '<label for="name"> name: <slot></slot></label>',
    provide() {
      return {
        lFormItem: this
      };
    },
    props: {disabled: Boolean},
  })

  Vue.component('LForm', {
    template: '<form> <slot></slot></form>',
    provide() {
      return {
        lForm: this
      };
    },
    props: {disabled: Boolean}
  })


  const vm = new Vue({
    el: '#app',
    data: {},
  })
</script>

```

# 继承:

> vue.extend(config:Object) ,vue.extend(config:Object) 组件(子类)用于继承Vue的工具函数
>
> ==关系：vue构造->vue组件->vue实例==

在Vue.js中，Vue本身是一个constructor。

Vue.extend() 是一个继承于方法的 class，参数是一个包含组件选项的对象。它的目的是创建一个Vue的子类并且返回相应的 constructor。

而Vue.component()实际上是一个类似于Vue.directive() 和 Vue.filter()的注册方法，它的目的是给指定的一个constructor一个String类型的ID，

之后Vue.js可以把它用作模板，实际上当你直接传递选项给Vue.component()的时候，它会在背后调用Vue.extend()。

Vue.js支持两种不同的API模型：一种是基于类的，命令式的，Backbone 类型的API；另一种是基于标记语言的，声明式的，Web组件类型的API。

如果还是困惑的话，可以想象你是怎么创建通过new Image()或者 <img>标签创建 image元素的就知道了。

这两种方法都对指定的类型很有用，Vue.js提供这两者只是为了更好的灵活性。

vue构造、vue组件和vue实例这三个是不同的概念，它们的关系有点类似于Java的继承概念：

也就是说不同的vue组件可以共用同一个vue构造，不同的vue实例可以共用同一个vue组件。在大型项目中，用过java开发的都知道，继承是非常重要的，前端也一样。我们先看看他们之间的实现代码区别

```html
<script>
    //vue构造
    Vue.extend({
        props: [],
        data: function() {
            return {}
        },
        template: ""
  
    });
     
    //vue组件
    Vue.component("mycomponent", {
        props: [],
        data: function() {
            return {}
        },
        template: ""
    });
     
    //vue实例
    new Vue({
        el: "",
        data: {}
    });
</script>
```

　　

从上面的代码可以看出，vue构造和vue组件所需的部分初始化结构参数是一样的，这意味着vue实例可以直接跳过vue组件直接使用vue构造对自身组件初始化，也就是vue构造->vue实例，下面是三种API的区别：

### vue.extend(config:Object)

特点：

1.只能通过自身初始化结构

使用范围：

1.挂载在某元素下

2.被Vue实例的components引用

3.Vue.component组件引用

```html
<div id="app2"></div>
<script>
    var apple = Vue.extend({
        template: "<p>我是构造函数创建：自身参数：{{a}}|外部传参：{{b}}</p>",
        data: function() {
            return {
                a: "a"
            }
        },
        props: ["b"]
    });
  
    //挂载构造函数
    new apple({
        propsData: {
            b: 'Vue.extend'
        }
    }).$mount('#app2');
</script>
```

　　

运行结果：

```
我是构造函数创建：自身参数：a|外部传参：Vue.extend。
```

　　

### vue.component(componetName:String,config:Object)

特点：

1.可通过自身初始化组件结构

2.可通过引入Vue.extend初始化组件结构

3.可通过第三方模板temple.html初始化组件结构

使用范围：

任何已被vue初始化过的元素内

```html
<div id="app3">
    <applecomponent v-bind:b="vparam"></applecomponent>
    <mycomponent v-bind:b="vparam"></mycomponent>
    <templecomponent v-bind:b="vparam"></templecomponent>
</div>
  
<script>
    //方法1 【引入构造】
    Vue.component('applecomponent', apple);
    //方法2 【自身创建】
    Vue.component("mycomponent", {
        props: ["b"],
        data: function() {
            return {
                a: "a"
            }
        },
        template: "<p>我是vue.component创建 自身参数：{{a}}|外部传参：{{b}}</p>"
    });
    //方法3 第三方模板引入,可参照上一篇文章
    Vue.component('templecomponent', function(resolve, reject) {
        $.get("./../xtemplate/com.html").then(function(res) {
            resolve({
                template: res,
                props: ["b"],
                data: function() {
                    return {
                        a: "a"
                    }
                }
            })
        });
    });
    var app3 = new Vue({
        el: "#app3",
        data: {
            vparam: "Vue.component"
        }
    });
</script>
```

　　

运行结果：

```
我是构造函数创建：自身参数：a|外部传参：Vue.component
我是vue.component创建 自身参数：a|外部传参：Vue.component
我是导入模板 自身参数：a|外部入参：Vue.component
```

==Vue.component使用Vue.extend生成的构造函数：==

![image-20191222232746311](img/image-20191222232746311.png)

###  new Vue()

this.$options.key表示其自定义属性值,this.$??表示系统属性值,如this.$el

特点：

1.可以通过自身components引用Vue.extend构造,通过自身data向构造传参

2.可以通过自身components引用组件模板，通过自身data向组件传参

使用范围：

1.仅限于自身

 

```html
<div id="app1">
    <dt1></dt1>
    <vueapple v-bind:b="msg"></vueapple>
</div>
  
<script type="text/x-template" id="dt1">
    <div>这里是子组件1</div>
</script>
  
<script>
    new Vue({
        el: "#app1",
        data: {
            msg: "vue实例参数"
        },
        components: {
            dt1: {
                template: "#dt1"
            },
            vueapple: apple //【引入构造】
        }
    });
 
</script>
```

　　

运行结果：

```
这里是子组件1我是构造函数创建：自身参数：a|外部传参：vue实例参数
```


[^1]: 网上复制的并非我自己编写