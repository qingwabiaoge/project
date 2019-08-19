
# 封装组件(类的复用)

### 解藕:
组件化化是如表格和表单本来可以写在一起分开,tab和tab-pane本来可以写在一起的分开,

解藕的作用模块尽量小,越小的越方便复用

###  内聚封装:
模块化组件化标签化:__把一个逻辑的dom  css  js逻辑  数据状态 封装在一起,__简化__成标签,

# 组件===构造函数

###  组件属性===构造函数的参数


```javascript
父组件
fa={age:10,fn(){} ....}

子组件
<cl age='age' @fn='fn'></cl>
const cl = new VueComponent({props: {age,fn}})
```

### 组件属性的种类

```
<el-input-number 
                 v-model="num" 
                @change="handleChange" 
               :min="1" 
              :max="10" 
              label="描述文字"
             :label-width="formLabelWidth">
</el-input-number>

num变量随着fa.num的改变而改变,
label常量不可改变
:min="1" :max="10"也是常量,程序代码里不可改变
:label-width="formLabelWidth" 不用更改值的变量
```



 ##### props=['xxx'] 自定义属性

   ###### prop作用

   * 数据父传子  

   * 组件属性不可以给 slot用

   ```
   不要被父子组件的属性传递和v-for误导了
   ```

   

##### @change='handleChange'

   ######  作用: 

     数据子传父

##### class

##### style

##### attr 

 父传子 子组件通过$attr访问

##### ref其他组件 

  通过 this.$refs['xxx']访问



### 组件属性改变更新视图

组件属性改变=>l中的键值也会改变=>cl的钩子函数运行(render,v-direct,watch,update等)