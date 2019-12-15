## document(js模拟视图)

**document对象**

![1570967115231](img/1570967115231.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">

</div>


</body>

<script>
    //document对象,windown顶部对象,
    console.log(document)
    console.log({document})


    console.log(Object.getPrototypeOf(document)) //"HTMLDocument"
    console.log(Object.getOwnPropertyNames(document))//["location"]
    console.log(Object.keys(document))//["location"]
 


</script>
</html>
  
```

### ==document.ready==

ready 当标签节点加载完成以后执行，不会等待资源加载

```
document.ready = function(e){
}
```

### document.location

```
document.location===window.location
```

### document.cookie

> JavaScript 可以使用 **document.cookie** 属性来创建 、读取、及删除 cookie。

##### JavaScript 中，创建 cookie 如下所示：


```
document.cookie="username=John Doe";
```

##### 您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

```
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

##### 您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

1、服务器端每次访问的cookie是每次请求头中发送给服务器端的

2、客户端每次请求只发送当前路径下和“直系”关系的父路径的cookie（父路径的页面是不能访问子路径和兄弟路径的cookie的）

3、setcookie如果不设置路径，默认为当前页面的路径，父亲路径的页面是无法访问的

4 "/"这个根路径可以在任何路径下访问，求简单可以把cookie都放在这里。

```
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

#####  JavaScript 读取 Cookie的函数封装

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

### doument的节点对象

document节点是document的key

##### 获取已有节点对象

###### 获得html

```js
 var el = document.documentElement
```

###### 获得body

```
  var el = document.body
```

###### getElementById

```javascript
const el=document.getElementById("app") //返回dom节点对象
```

id绑定到了window

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

###### vue的ref

```
vue-$refs//返回dom节点对象和自定义组件对象
```

##### 通过属性访问当前节点的父、子和同胞

![](./img/6.png)

```html
<html xmlns="http://www.w3.org/1999/xhtml">
<head>


</head>
<body>
<span></span>
<div id="App">
  <li>1</li>
  <li>2</li>
  <a href="baidu">3</a>4
</div><p>
5
</p>
<script>
  const el = document.getElementById('App')

//列出下级节点 包含text和文档----------------------------------------------
  console.log('el.parentNode', el.parentNode)

  console.log('el.nextSibling',el.previousSibling)
  console.log('el.nextSibling',el.nextSibling)

  //列出下级的所有节点 包裹标签节点和文本节点(代码换行也算)  ie有兼容问题,-------------------------------
  //判断是否有子节点
  console.log('el.hasChildNodes', el.hasChildNodes())

  console.log('el.childNodes', el.childNodes)
  //第一个
  console.log(' el.firstChild', el.firstChild);
  //第二个
  console.log('el.firstChild.nextSibling', el.firstChild.nextSibling)
  //最后一个
  console.log(' el.lastChild', el.lastChild);
  //倒数第二个
  console.log('el.lastChild.previousSibling', el.lastChild.previousSibling);


  //列出下级标签节点----------------------------------------------------------------------------
  console.log(el.children)


  // 列出下级的li节点----------------------------------------------------------------------
  console.log(el.querySelectorAll('li'))


  //文本节点-------------------------------------------------------------------------------
  console.log(el.querySelectorAll('li')[0].childNodes)

</script>
</body>
</html>

```

##### 对子节点的操作的方法

```js
   function appendChild_() {
        persons.appendChild(wangjianlin);//添加

    }

    function replaceChild_() {
        persons.replaceChild(shilei, wangjianlin);//修改
    }

    function removeChild_() {
        persons.removeChild(shilei);//删除
    }
```

##### 创建新的document的节点

###### 字面量创建(用于新建对象和控制台打印)

```
<div id='app'></div>
```

###### document.createElement创建节点

```
var el = document.createElement("A");
```

##### el节点实例的所有属性(真实对象数据结构)

div是HTMLDivElement的实例,注意对比div的原型和document的原型是不同的

![1570966004249](img/1570966004249.png)



###### 节点的类型属性

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>index.html</title>

    <meta charset="utf-8">


</head>
<body>

<a href="www.baidu.com" data-src="baidu" id="app">百度</a>

</body>
</html>
<script type="text/javascript">
    function log(data) {
        console.log(data);
    }


    var el = document.getElementsByTagName("a")[0];


    log("----------A标签节点----------------");
    log({el})
    log(el.nodeName);//A
    log(el.nodeValue);//null
    log(el.nodeType);//1
    log(el.attributes) //{0: href, 1: name, 2: id, 3: data-src, href: href,  id: id, data-src: data-src, length: 3}
    log(el.dataset) //{src: "baidu"}




    log("----------text节点----------------");

    const textNode = el.firstChild
    console.log('textNode:', {textNode})
</script>

```

###### 节点的高度宽度属性

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>


<body>

<button onclick="go(200)">go</button>
<main>
  <section id="app" onclick="go()" style="height: 310px">
    <p>
    </p>
  </section>

</main>
<script>

//var el = document.documentElement
//var el = document.getElementById('app')
//var el = document.body
var el =window

//高度---------------------------xxxHeight-----------------------
//console.log('style.height:', el.style.height)

console.log('clientHeight', el.clientHeight)// 父区域视口高度   (包括滚动条槽),
console.log('scrollHeight', el.scrollHeight) //滚动区域的高度
console.log('offsetHeight', el.offsetHeight)//控件自身的高度css高度        (height+border)
//windows属性
console.log('win-innerHeight', el.innerHeight)
console.log('win-outerHeight', el.outerHeight)
console.log('-----------------------')


//高度---------------------------xxxWidth-----------------------
//console.log('style.width:', el.style.width)

console.log('clientWidth', el.clientWidth)
console.log('scrollWidth', el.scrollWidth)
console.log('offsetWidth', el.offsetWidth)
//windows属性
console.log('win-innerWidth', el.innerWidth)
console.log('win-outerWidth', el.outerWidth)
console.log('-----------------------')

//局部顶部的高度-----------------xxxTop------------------------------------------------------
console.log('clientTop', el.clientTop)//10 //控件的父区域(overflow)到上层区域的高度(就是边框)
console.log('offsetTop', el.offsetTop)//它返回当前元素相对于其 offsetParent 元素的顶部的距离。
console.log('el.scrollTop:', el.scrollTop)//控件顶端到垂直滚动条顶端的距离

//window属性
console.log('win-screenTop', screenTop)
console.log('-----------------------')

//局部顶部的高度--------------------------xxxLeft---------------------------------------------
console.log('clientLeft', el.clientLeft)//10
console.log('offsetLeft', el.offsetLeft)//50
console.log('el.scrollLeft:', el.scrollLeft)
//window属性
console.log('win-screenLeft', el.screenLeft)
console.log('-----------------------')


const scrollEl=window
//const scrollEl=document.documentElement
 //const scrollEl=document.body
//const scrollEl = document.getElementById('app')

scrollEl.onscroll = function () {
  console.log('el.scrollTop:', el.scrollTop)//控件顶端距离滚垂直动条顶端的距离
  console.log('el.scrollLeft:', el.scrollLeft)//控件左端距离水平滚动条左端的距离
}


function go (n) {
  el.scrollTop = n
  console.log(el.scrollTop)
}
</script>

<style>

  main {
    width: 130%;
    height: 2000px;
  }

  section {
    width: 300px;
    height: 300px;
    margin: 50px;
    padding: 20px;
    border: 10px solid gray;
    overflow: scroll;
  }

  p {
    height: 600px;
    width: 600px;
    background: red
  }


</style>

</body>
</html>

```

###### style属性

```html
<div id="app">

  1111111111111111

</div>

<script>
  app.style.color='white'
  //设置变量
  app.style.setProperty('--bg', 'red');
  //获得变量
  const color=app.style.getPropertyValue('--bg').trim();
  console.log(color)
  // 删除变量
  app.style.removeProperty('--primary');
</script>

<style>
  #app {
    background: var(--bg)
  }

</style>

```



##### el节点对象的使用场景

###### vue组件对象注入el对象

![](./img/2.png)




###### 指令的回调参数也是el对象

![](./img/3.png)

###### 全局对象event注入了el对象

```
event.target===el
```

## document.createElement插入新节点

```html
<body>


</body>

<meta charset="uft-8">
<script>
  function addElement() {
    //创建新节点对象
    var el = document.createElement("A");

    //通过 . 设置系统属性
    el.id = 'app'
    el.target = '_black'

    //设置和获取系统属性和自定义属性
    el.setAttribute('href', '#')
    el.getAttribute('href')//获得href
    el.setAttribute('someattr', '123')
    //移除系统属性和自定义属性
    el.removeAttribute('id')
    //在el节点下级插入文本
    var text = document.createTextNode("Hi there and greetings!");
    el.appendChild(text);

    //el插入到body
    document.body.appendChild(el)
  }

  addElement()
</script>

```

