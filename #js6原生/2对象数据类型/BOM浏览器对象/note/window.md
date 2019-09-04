# Windows

### setTimeout()执行一次

```js
let i=0
    setTimeout(() => {
        i++
        console.log(i)
    }, 1000)
//1
```
### setInterval() 时钟频率执行

```js
    let i = 0
    setInterval(() => {

        i++;
        console.log(i);
    }, 1000)

/*
1,
2,
3,
4
*/
```

 打开和关闭定时器

```html
<body>
<button onclick="start()">start</button>
<button onclick="stop()">stop</button>
<script type="text/javascript">
    var interval = null;//全局变量

    var i = 0; //i全局变量
    function start() {
      //启动计时器赋值给全局变量,为了能够clearInterval取到值
        interval = setInterval(() => {
            i++;
            console.log(i);
        }, 1000);//启动计时器，调用overs函数，
    }


    function stop() {

        clearInterval(interval); //关闭计时器

    }

</script>
</body>


```


### open() 新窗口打开链接

```js
  window.open("http://www.runoob.com");
```

### location

##### location.href 本窗口跳转

```js
  window.location.href = "http://www.baidu.com"

```

### screen

##### screen.availWidth

  `console.log(screen.availWidth, screen.availHeight);`

### navigator

##### navigator.userAgent

```
navigator.userAgent
```

### history

##### history.pushState()

##### history.go()

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>测试</title>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
</head>

<body>
<button onclick="history.go(-1);render()">history.go(-1)</button>
<button onclick="history.go(1); render()">history.go(1)</button>


<br>
<!--路由meta 原理history.state-->
<button onclick='history.pushState({state: 1}, "newtitle","1.html?b=1"); render()'>pushState添加一条历史记录</button>

<button onclick='history.pushState({state: 2}, "newtitle","2.html?b=1"); render()'>pushState添加一条历史记录</button>
<div id="app">

</div>

<script>

    function render() {
        document.getElementById('app').innerText = history.state.state
        console.log(history)
    }


</script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div>
    <button onclick="history.go(-1)">history.go(-1)</button>
    <button onclick="history.go(1)">history.go(1)</button>

    <br>
    <button class="btn" onclick="btnFun();">点击新增一条历史记录</button>
</div>
<script>
    console.log('增加历史记录前 state的值：',history.state); // null
    function btnFun() {//点击事件
        // 增加一个历史记录
        history.pushState('a',null,'2.html?b=1');
        console.log('state的值',history.state); // a
    };
    window.addEventListener('popstate',function() {
        var state = history.state;//取出state值
        //注意：在此处时（点击后退按钮时），state的值已经为null
        // （因为返回时历史记录会被删除，浏览器动作）
        console.log('点击后退按钮后 state的值：',state); // null
        //判断，想要执行的操作

    });
</script>
</body>
</html>

```
