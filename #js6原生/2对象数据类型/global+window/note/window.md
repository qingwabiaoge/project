### encodeURIComponent

```html
<script>
    var uri = "http://w3cschool.cc/my test.asp?name=ståle&car=saab";

    document.write(encodeURIComponent(uri)); //http%3A%2F%2Fw3cschool.cc%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab
    document.write("<br>");
    document.write(decodeURIComponent(uri_encode));//http://w3cschool.cc/my test.asp?name=ståle&car=saab
</script>

```

### onload

```js
  window.onload = function () {
    console.log('onload') //onload 事件会在页面或图像加载完成后立即发生
  }
```
### location 本窗口跳转

```js
  window.location.href = "http://www.baidu.com"

```
### open 新窗口打开链接

```js
  window.open("http://www.runoob.com");
```
### setTimeout执行一次

```js
let i=0
    setTimeout(() => {
        i++
        console.log(i)
    }, 1000)
//1
```
### setInterval 时钟频率执行

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

### 打开和关闭定时器

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
