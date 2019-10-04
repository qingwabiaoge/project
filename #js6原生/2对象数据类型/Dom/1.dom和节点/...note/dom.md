# document

### doucment对象建立

浏览器链接页面时间会初始化这个document对象,然后注入在window上可以通过window.document访问

```
<html>
<body>
  <div id="app" class="cs" data-src="datasrc">
    <h1>h1标题</h1>
    <p>段落</p>
  </div>
</body>
</html>
```

### document对象的属性

```javascript
console.log(Object.getPrototypeOf(document))//HTMLDocument {Symbol(Symbol.toStringTag): "HTMLDocument", constructor: ƒ}
console.log(Object.getOwnPropertyNames(document))//["location"]
console.log(Object.keys(document))//["location"]
      
```

### document树节点结构

![1.gif](./1.gif)

通过 HTML DOM，树中的所有节点均可通过 JavaScript 进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。


# el节点对象

### 创建节点对象

##### 字面量创建(用于新建对象和控制台打印)

```
<div id='app'></div>
```

##### document.createElement创建节点

```
var el = document.createElement("A");
```

### 获取节点对象

节点对象赋值给变量变量存放内存地址0x0001

```javascript
const el=document.getElementById("app") //返回dom节点对象
```

id简写

```html
<img id="img"/>

<p id="text">
  hello
</p>
<script>
  console.log(img)
  console.log(text)
  img.src = 'http://img.hb.aicdn.com/ee9c62e8caf1b7907072b90b8058b87b2b92b237102ea-4LB0wq_sq320'
  text.style.fontSize = '100px'

</script>

```

ref

```
vue-$refs//返回dom节点对象和自定义组件对象
```

### el节点的所有属性(真实对象数据结构)

![](5.png)



访问当前节点的父、子和同胞

![](./6.png)

### el节点对象和vue对象比较

dom |vue组件
--------|-----------
dom标签在html渲染时间运行dom构造函数   |vue组件标签在模板渲染时间运行构造函数
dom属性就是构造函数的参数 |自定义标签的属性就是vue构造函数的属性   

### el节点对象的使用
##### vue组件对象注入el对象

![](./img/2.png)




##### 指令的回调参数也是el对象

![](./img/3.png)

##### 全局对象event注入了el对象

```
event.target
```
