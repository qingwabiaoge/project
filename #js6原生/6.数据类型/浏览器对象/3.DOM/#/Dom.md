# document对象(js模拟视图)

代表整个文档 

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

# document.location

```
document.location===window.location
```

# document.cookie

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

# 获得doument的节点对象

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

id注入到了window

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

##### 创建新的document的节点

###### 字面量创建(用于新建对象和控制台打印)

```
<div id='app'></div>
```

###### document.createElement创建节点

```
var el = document.createElement("A");
```



# doument的节点对象的状态

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


<main>
  <section id="app" onclick="go()" style="height: 310px">
    <p>
    </p>
  </section>
</main>
<script>


  function fn() {
    var el
    el = document.documentElement
    // el = document.body
    // el = document.getElementById('app')

    el.scrollTop = 200
    //高度---------------------------xxxHeight-----------------------
    //console.log('style.height:', el.style.height)

    console.log('clientHeight', el.clientHeight)// 父区域视口高度   (包括滚动条槽),
    console.log('scrollHeight', el.scrollHeight) //滚动区域的高度
    console.log('offsetHeight', el.offsetHeight)//控件自身的高度css高度        (height+border)



    //高度---------------------------xxxWidth-----------------------
    //console.log('style.width:', el.style.width)

    console.log('clientWidth', el.clientWidth)
    console.log('scrollWidth', el.scrollWidth)
    console.log('offsetWidth', el.offsetWidth)



    //局部顶部的高度-----------------xxxTop------------------------------------------------------
    console.log('clientTop', el.clientTop)//10 //控件的父区域(overflow)到上层区域的高度(就是边框)
    console.log('offsetTop', el.offsetTop)//它返回当前元素相对于其 offsetParent 元素的顶部的距离。
    console.log('el.scrollTop:', el.scrollTop)//控件顶端到垂直滚动条顶端的距离



    //局部顶部的高度--------------------------xxxLeft---------------------------------------------
    console.log('clientLeft', el.clientLeft)//10
    console.log('offsetLeft', el.offsetLeft)//50
    console.log('el.scrollLeft:', el.scrollLeft)

  }

  setTimeout(() => {
    fn()
  }, 10)
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

##### 例

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

# DOM节点事件



## HTML DOM 事件

>  HTML DOM 事件允许Javascript在HTML文档元素中注册不同事件处理程序。
>
> 事件通常与函数结合使用，函数不会在事件发生前被执行！ (如用户点击按钮)。
>
> **提示：** 在 W3C 2 级 DOM 事件中规范了事件模型。 

## 鼠标事件

| 属性                                                         | 事件                        | 描述                                   | DOM  |
| ------------------------------------------------------------ | --------------------------- | -------------------------------------- | ---- |
| [onclick](https://www.runoob.com/jsref/event-onclick.html)   | 点击事件                    | 当用户点击某个对象时调用的事件句柄。   | 2    |
| [oncontextmenu](https://www.runoob.com/jsref/event-oncontextmenu.html) | 右键                        | 在用户点击鼠标右键打开上下文菜单时触发 |      |
| [ondblclick](https://www.runoob.com/jsref/event-ondblclick.html) | 双击                        | 当用户双击某个对象时调用的事件句柄。   | 2    |
| [onmousedown](https://www.runoob.com/jsref/event-onmousedown.html) | 按下鼠标                    | 鼠标按钮被按下。                       | 2    |
| [onmouseenter](https://www.runoob.com/jsref/event-onmouseenter.html) | 移动到元素上触发            | 当鼠标指针移动到元素上时触发。         | 2    |
| [onmouseleave](https://www.runoob.com/jsref/event-onmouseleave.html) | 移出元素触发                | 当鼠标指针移出元素时触发               | 2    |
| [onmousemove](https://www.runoob.com/jsref/event-onmousemove.html) | 鼠标移动                    | 鼠标被移动。                           | 2    |
| [onmouseover](https://www.runoob.com/jsref/event-onmouseover.html) | 鼠标移动某元素上---指定某个 | 鼠标移到某元素之上。                   | 2    |
| [onmouseout](https://www.runoob.com/jsref/event-onmouseout.html) | 鼠标从某元素移开            | 鼠标从某元素移开。                     | 2    |
| [onmouseup](https://www.runoob.com/jsref/event-onmouseup.html) | 松开                        | 鼠标按键被松开。                       |      |

## 键盘事件

| 属性                                                         | 描述                       | DOM  |
| ------------------------------------------------------------ | -------------------------- | ---- |
| [onkeydown](https://www.runoob.com/jsref/event-onkeydown.html) | 某个键盘按键被按下。       | 2    |
| [onkeypress](https://www.runoob.com/jsref/event-onkeypress.html) | 某个键盘按键被按下并松开。 | 2    |
| [onkeyup](https://www.runoob.com/jsref/event-onkeyup.html)   | 某个键盘按键被松开。       | 2    |

## 框架/对象（Frame/Object）事件

| 属性                                                         | 描述                                                         | DOM  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [onabort](https://www.runoob.com/jsref/event-onabort.html)   | 图像的加载被中断。 ( <object>)                               | 2    |
| [onbeforeunload](https://www.runoob.com/jsref/event-onbeforeunload.html) | 该事件在即将离开页面（刷新或关闭）时触发                     | 2    |
| [onerror](https://www.runoob.com/jsref/event-onerror.html)   | 在加载文档或图像时发生错误。 ( <object>, <body>和 <frameset>) |      |
| [onhashchange](https://www.runoob.com/jsref/event-onhashchange.html) | 该事件在当前 URL 的锚部分发生修改时触发。                    |      |
| [onload](https://www.runoob.com/jsref/event-onload.html)     | 一张页面或一幅图像完成加载。                                 | 2    |
| [onpageshow](https://www.runoob.com/jsref/event-onpageshow.html) | 该事件在用户访问页面时触发                                   |      |
| [onpagehide](https://www.runoob.com/jsref/event-onpagehide.html) | 该事件在用户离开当前网页跳转到另外一个页面时触发             |      |
| [onresize](https://www.runoob.com/jsref/event-onresize.html) | 窗口或框架被重新调整大小。                                   | 2    |
| [onscroll](https://www.runoob.com/jsref/event-onscroll.html) | 当文档被滚动时发生的事件。                                   | 2    |
| [onunload](https://www.runoob.com/jsref/event-onunload.html) | 用户退出页面。 ( <body> 和 <frameset>)                       | 2    |

## 表单事件

| 属性                                                         | 描述                                                         | DOM  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [onblur](https://www.runoob.com/jsref/event-onblur.html)     | 元素失去焦点时触发                                           | 2    |
| [onchange](https://www.runoob.com/jsref/event-onchange.html) | 该事件在表单元素的内容改变时触发( <input>, <keygen>, <select>, 和 <textarea>) | 2    |
| [onfocus](https://www.runoob.com/jsref/event-onfocus.html)   | 元素获取焦点时触发                                           | 2    |
| [onfocusin](https://www.runoob.com/jsref/event-onfocusin.html) | 元素即将获取焦点时触发                                       | 2    |
| [onfocusout](https://www.runoob.com/jsref/event-onfocusout.html) | 元素即将失去焦点时触发                                       | 2    |
| [oninput](https://www.runoob.com/jsref/event-oninput.html)   | 元素获取用户输入时触发                                       | 3    |
| [onreset](https://www.runoob.com/jsref/event-onreset.html)   | 表单重置时触发                                               | 2    |
| [onsearch](https://www.runoob.com/jsref/event-onsearch.html) | 用户向搜索域输入文本时触发 ( <input="search">)               |      |
| [onselect](https://www.runoob.com/jsref/event-onselect.html) | 用户选取文本时触发 ( <input> 和 <textarea>)                  | 2    |
| [onsubmit](https://www.runoob.com/jsref/event-onsubmit.html) | 表单提交时触发                                               | 2    |

## 剪贴板事件

| 属性                                                       | 描述                           | DOM  |
| ---------------------------------------------------------- | ------------------------------ | ---- |
| [oncopy](https://www.runoob.com/jsref/event-oncopy.html)   | 该事件在用户拷贝元素内容时触发 |      |
| [oncut](https://www.runoob.com/jsref/event-oncut.html)     | 该事件在用户剪切元素内容时触发 |      |
| [onpaste](https://www.runoob.com/jsref/event-onpaste.html) | 该事件在用户粘贴元素内容时触发 |      |

## 打印事件

| 属性                                                         | 描述                                                 | DOM  |
| ------------------------------------------------------------ | ---------------------------------------------------- | ---- |
| [onafterprint](https://www.runoob.com/jsref/event-onafterprint.html) | 该事件在页面已经开始打印，或者打印窗口已经关闭时触发 |      |
| [onbeforeprint](https://www.runoob.com/jsref/event-onbeforeprint.html) | 该事件在页面即将开始打印时触发                       |      |

## 拖动事件

| 事件                                                         | 描述                                 | DOM  |
| ------------------------------------------------------------ | ------------------------------------ | ---- |
| [ondrag](https://www.runoob.com/jsref/event-ondrag.html)     | 该事件在元素正在拖动时触发           |      |
| [ondragend](https://www.runoob.com/jsref/event-ondragend.html) | 该事件在用户完成元素的拖动时触发     |      |
| [ondragenter](https://www.runoob.com/jsref/event-ondragenter.html) | 该事件在拖动的元素进入放置目标时触发 |      |
| [ondragleave](https://www.runoob.com/jsref/event-ondragleave.html) | 该事件在拖动元素离开放置目标时触发   |      |
| [ondragover](https://www.runoob.com/jsref/event-ondragover.html) | 该事件在拖动元素在放置目标上时触发   |      |
| [ondragstart](https://www.runoob.com/jsref/event-ondragstart.html) | 该事件在用户开始拖动元素时触发       |      |
| [ondrop](https://www.runoob.com/jsref/event-ondrop.html)     | 该事件在拖动元素放置在目标区域时触发 |      |

## 多媒体（Media）事件

| 事件                                                         | 描述                                                         | DOM  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [onabort](https://www.runoob.com/jsref/event-onabort-media.html) | 事件在视频/音频（audio/video）终止加载时触发。               |      |
| [oncanplay](https://www.runoob.com/jsref/event-oncanplay.html) | 事件在用户可以开始播放视频/音频（audio/video）时触发。       |      |
| [oncanplaythrough](https://www.runoob.com/jsref/event-oncanplaythrough.html) | 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。 |      |
| [ondurationchange](https://www.runoob.com/jsref/event-ondurationchange.html) | 事件在视频/音频（audio/video）的时长发生变化时触发。         |      |
| onemptied                                                    | 当期播放列表为空时触发                                       |      |
| [onended](https://www.runoob.com/jsref/event-onended.html)   | 事件在视频/音频（audio/video）播放结束时触发。               |      |
| [onerror](https://www.runoob.com/jsref/event-onerror-media.html) | 事件在视频/音频（audio/video）数据加载期间发生错误时触发。   |      |
| [onloadeddata](https://www.runoob.com/jsref/event-onloadeddata.html) | 事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。   |      |
| [onloadedmetadata](https://www.runoob.com/jsref/event-onloadedmetadata.html) | 事件在指定视频/音频（audio/video）的元数据加载后触发。       |      |
| [onloadstart](https://www.runoob.com/jsref/event-onloadstart.html) | 事件在浏览器开始寻找指定视频/音频（audio/video）触发。       |      |
| [onpause](https://www.runoob.com/jsref/event-onpause.html)   | 事件在视频/音频（audio/video）暂停时触发。                   |      |
| [onplay](https://www.runoob.com/jsref/event-onplay.html)     | 事件在视频/音频（audio/video）开始播放时触发。               |      |
| [onplaying](https://www.runoob.com/jsref/event-onplaying.html) | 事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。 |      |
| [onprogress](https://www.runoob.com/jsref/event-onprogress.html) | 事件在浏览器下载指定的视频/音频（audio/video）时触发。       |      |
| [onratechange](https://www.runoob.com/jsref/event-onratechange.html) | 事件在视频/音频（audio/video）的播放速度发送改变时触发。     |      |
| [onseeked](https://www.runoob.com/jsref/event-onseeked.html) | 事件在用户重新定位视频/音频（audio/video）的播放位置后触发。 |      |
| [onseeking](https://www.runoob.com/jsref/event-onseeking.html) | 事件在用户开始重新定位视频/音频（audio/video）时触发。       |      |
| [onstalled](https://www.runoob.com/jsref/event-onstalled.html) | 事件在浏览器获取媒体数据，但媒体数据不可用时触发。           |      |
| [onsuspend](https://www.runoob.com/jsref/event-onsuspend.html) | 事件在浏览器读取媒体数据中止时触发。                         |      |
| [ontimeupdate](https://www.runoob.com/jsref/event-ontimeupdate.html) | 事件在当前的播放位置发送改变时触发。                         |      |
| [onvolumechange](https://www.runoob.com/jsref/event-onvolumechange.html) | 事件在音量发生改变时触发。                                   |      |
| [onwaiting](https://www.runoob.com/jsref/event-onwaiting.html) | 事件在视频由于要播放下一帧而需要缓冲时触发。                 |      |

## 动画事件

| 事件                                                         | 描述                            | DOM  |
| ------------------------------------------------------------ | ------------------------------- | ---- |
| [animationend](https://www.runoob.com/jsref/event-animationend.html) | 该事件在 CSS 动画结束播放时触发 |      |
| [animationiteration](https://www.runoob.com/jsref/event-animationiteration.html) | 该事件在 CSS 动画重复播放时触发 |      |
| [animationstart](https://www.runoob.com/jsref/event-animationstart.html) | 该事件在 CSS 动画开始播放时触发 |      |

## 过渡事件

| 事件                                                         | 描述                          | DOM  |
| ------------------------------------------------------------ | ----------------------------- | ---- |
| [transitionend](https://www.runoob.com/jsref/event-transitionend.html) | 该事件在 CSS 完成过渡后触发。 |      |

## 其他事件

| 事件                                                         | 描述                                                         | DOM  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| onmessage                                                    | 该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发 |      |
| onmousewheel                                                 | 已废弃。 使用 [onwheel](https://www.runoob.com/jsref/event-onwheel.html) 事件替代 |      |
| [ononline](https://www.runoob.com/jsref/event-ononline.html) | 该事件在浏览器开始在线工作时触发。                           |      |
| [onoffline](https://www.runoob.com/jsref/event-onoffline.html) | 该事件在浏览器开始离线工作时触发。                           |      |
| onpopstate                                                   | 该事件在窗口的浏览历史（history 对象）发生改变时触发。       |      |
| [onshow](https://www.runoob.com/jsref/event-onshow.html)     | 该事件当 <menu> 元素在上下文菜单显示时触发                   |      |
| onstorage                                                    | 该事件在 Web Storage(HTML 5 Web 存储)更新时触发              |      |
| [ontoggle](https://www.runoob.com/jsref/event-ontoggle.html) | 该事件在用户打开或关闭 <details> 元素时触发                  |      |
| [onwheel](https://www.runoob.com/jsref/event-onwheel.html)   | 该事件在鼠标滚轮在元素上下滚动时触发                         |      |

## 目标事件对象

### 方法

| 方法                  | 描述                                                    | DOM  |
| --------------------- | ------------------------------------------------------- | ---- |
| addEventListener()    | 允许在目标事件中注册监听事件(IE8 = attachEvent())       | 2    |
| dispatchEvent()       | 允许发送事件到监听器上 (IE8 = fireEvent())              | 2    |
| removeEventListener() | 运行一次注册在事件目标上的监听事件(IE8 = detachEvent()) | 2    |

## 事件监听对象

### 方法

| 方法          | 描述                         | DOM  |
| ------------- | ---------------------------- | ---- |
| handleEvent() | 把任意对象注册为事件处理程序 | 2    |

## 文档事件对象

### 方法

| 方法          | 描述 | DOM  |
| ------------- | ---- | ---- |
| createEvent() |      | 2    |

## 鼠标/键盘事件对象

### 属性

| 属性                                                         | 描述                                                         | DOM  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [altKey](https://www.runoob.com/jsref/event-altkey.html)     | 返回当事件被触发时，"ALT" 是否被按下。                       | 2    |
| [button](https://www.runoob.com/jsref/event-button.html)     | 返回当事件被触发时，哪个鼠标按钮被点击。                     | 2    |
| [clientX](https://www.runoob.com/jsref/event-clientx.html)   | 返回当事件被触发时，鼠标指针的水平坐标。                     | 2    |
| [clientY](https://www.runoob.com/jsref/event-clienty.html)   | 返回当事件被触发时，鼠标指针的垂直坐标。                     | 2    |
| [ctrlKey](https://www.runoob.com/jsref/event-ctrlkey.html)   | 返回当事件被触发时，"CTRL" 键是否被按下。                    | 2    |
| [Location](https://www.runoob.com/jsref/event-key-location.html) | 返回按键在设备上的位置                                       | 3    |
| [charCode](https://www.runoob.com/jsref/event-key-charcode.html) | 返回onkeypress事件触发键值的字母代码。                       | 2    |
| [key](https://www.runoob.com/jsref/event-key-key.html)       | 在按下按键时返回按键的标识符。                               | 3    |
| [keyCode](https://www.runoob.com/jsref/event-key-keycode.html) | 返回onkeypress事件触发的键的值的字符代码，或者 onkeydown 或 onkeyup 事件的键的代码。 | 2    |
| [which](https://www.runoob.com/jsref/event-key-which.html)   | 返回onkeypress事件触发的键的值的字符代码，或者 onkeydown 或 onkeyup 事件的键的代码。 | 2    |
| [metaKey](https://www.runoob.com/jsref/event-metakey.html)   | 返回当事件被触发时，"meta" 键是否被按下。                    | 2    |
| [relatedTarget](https://www.runoob.com/jsref/event-relatedtarget.html) | 返回与事件的目标节点相关的节点。                             | 2    |
| [screenX](https://www.runoob.com/jsref/event-screenx.html)   | 返回当某个事件被触发时，鼠标指针的水平坐标。                 | 2    |
| [screenY](https://www.runoob.com/jsref/event-screeny.html)   | 返回当某个事件被触发时，鼠标指针的垂直坐标。                 | 2    |
| [shiftKey](https://www.runoob.com/jsref/event-shiftkey.html) | 返回当事件被触发时，"SHIFT" 键是否被按下。                   | 2    |

### 方法

| 方法                | 描述                   | W3C  |
| ------------------- | ---------------------- | ---- |
| initMouseEvent()    | 初始化鼠标事件对象的值 | 2    |
| initKeyboardEvent() | 初始化键盘事件对象的值 | 3    |

 

1、路在何方？ 路在脚下 2、何去何从？ 每个人都在探索，未来的方向在何处。如果说某些方向是世人已经公认的，那么就先按照公认的去走吧（ps:站在巨人的肩膀上看世界会清晰）。 如果说方向，当今世人还不清晰准确。那么就大胆往前走吧，对与错并不重要。心中的方向更加重要。