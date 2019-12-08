
# 组件封装(类)

**解藕:**

组件化化是如表格和表单本来可以写在一起分开,tab和tab-pane本来可以写在一起的分开,

解藕的作用模块尽量小,越小的越方便复用

**内聚封装:**

模块化组件化标签化:把一个逻辑的dom  css  js逻辑  数据状态 封装在一起,简化成标签
# 本质

| vue                         | 函数                                                      |
| --------------------------- | --------------------------------------------------------- |
| 自定义标签                  | 构造函数                                                      |
| 标签的属性                  | 构造函数参数                                                  |
| props:{msg:{default:'msg'}} | 构造函数参数的默认值<br />`function(p1){p1=P1||defultValue }` |

## 组件标签===构造函数
```html
<cl age='age' @fn='fn'></cl>
```

```javascript
new Vue({el:'#app'})
new VueComponent({props: {age,fn}})
```

##  组件属性===构造函数的参数

### 父标签的自定义属性

##### 访问

子组件可以通过this.xxx或者this.$props.xxx访问

##### 作用:

   1. 数据父传子  

   2. 组件属性不可以给 slot用`不要被父子组件的属性传递和v-for误导了`

### 父标签自定义事件属性

##### 访问

子组件里通过 this.$listeners访问,不包含.native

子组件里通过$emit( )触发

不包含构造函数的回调参数类型的参数 

##### 作用:

子传父

### 父标签默认自带属性

1. class

2. style

3. attr

##### 访问

父标签添加会落在子组件最外层dom上, attr可以通过this.$attr访问
### 自定义组件dom嵌套

##### 访问

访问插槽的数据

```html
<!--父访问子数据-->
<!--子-->
<slot value='value'></slot>
<!--父-->
<template v-slot.xxx='{...value}'></template>

```

```js
//子访问父标签的数据
this.$slots.default
```

privide/inject访问上级dom的组件的数据

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



