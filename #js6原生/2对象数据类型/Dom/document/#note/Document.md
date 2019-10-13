# 实例化对象:document

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

### document对象的属性和方法

![1570967115231](img/1570967115231.png)

```javascript
console.log(Object.getPrototypeOf(document))
console.log(Object.getOwnPropertyNames(document))//["location"]
console.log(Object.keys(document))//["location"]      
```

##### document.createElement

建立新节点

##### document.location

```
document.location===window.location
```

##### document.cookie

> JavaScript 可以使用 **document.cookie** 属性来创建 、读取、及删除 cookie。

###### JavaScript 中，创建 cookie 如下所示：

```
document.cookie="username=John Doe";
```

###### 您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

```
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

###### 您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

1、服务器端每次访问的cookie是每次请求头中发送给服务器端的

2、客户端每次请求只发送当前路径下和“直系”关系的父路径的cookie（父路径的页面是不能访问子路径和兄弟路径的cookie的）

3、setcookie如果不设置路径，默认为当前页面的路径，父亲路径的页面是无法访问的

4 "/"这个根路径可以在任何路径下访问，求简单可以把cookie都放在这里。

```
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

######  JavaScript 读取 Cookie的函数封装

```js
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
```



### document树节点结构

![1.gif](./1.gif)

通过 HTML DOM，树中的所有节点均可通过 JavaScript 进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。



# 实例化对象el节点对象

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

```javascript
const el=document.getElementById("app") //返回dom节点对象
```

##### id简写

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

##### ref

```
vue-$refs//返回dom节点对象和自定义组件对象
```

### el节点的实例的所有属性(真实对象数据结构)

![1570966004249](img/1570966004249.png)



访问当前节点的父、子和同胞

![](./6.png)

### el节点对象和vue对象比较

| dom                                  | vue组件                               |
| ------------------------------------ | ------------------------------------- |
| dom标签在html渲染时间运行dom构造函数 | vue组件标签在模板渲染时间运行构造函数 |
| dom属性就是构造函数的参数            | 自定义标签的属性就是vue构造函数的属性 |

### el节点对象的使用

##### vue组件对象注入el对象

![](./img/2.png)




##### 指令的回调参数也是el对象

![](./img/3.png)

##### 全局对象event注入了el对象

```
event.target===el
```
