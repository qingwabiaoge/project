# 概述

几乎每个人都已经听说过 V8 引擎，大多数人都知道 JavaScript 是单线程的，或者它使用的是回调队列。

在本文中，我们将详细介绍这些概念，并解释 JavaScrip 实际如何运行。通过了解这些细节，你将能够适当地利用所提供的 API 来编写更好的、非阻塞的应用程序。

如果您对JavaScript还比较陌生，那么本文将帮助您理解为什么JavaScript与其他语言相比如此“怪异”。

如果你是一个有经验的JavaScript开发人员，希望它能让您对每天使用的JavaScript运行时的实际工作方式有一些新的见解。

# JavaScript引擎

JavaScript引擎的一个流行示例是Google的V8引擎。例如，在Chrome和Node.js中使用V8引擎，下面是一个非常简化的视图：

![img](img/2019-0410-02.png)

V8引擎由两个主要部件组成:

- emory Heap(内存堆) — 内存分配地址的地方
- Call Stack(调用堆栈) — 代码执行的地方

# Runtime(运行时)

有些浏览器的 API 经常被使用到(比如说：setTimeout)，但是，这些 API 却不是引擎提供的。那么，他们是从哪儿来的呢？事实上这里面实际情况有点复杂。

![img](img/2019-0410-03.png)

![image-20200115225203530](img/image-20200115225203530.png)

所以说我们还有很多引擎之外的 API，我们把这些称为浏览器提供 API 称为 Web API，比如说 DOM、AJAX、setTimeout等等。

然后我们还拥有如此流行的事件循环和回调队列。

**代码部署后可能存在的BUG没法实时知道，事后为了解决这些BUG，花了大量的时间进行log 调试，这边顺便给大家推荐一个好用的BUG监控工具 [Fundebug](https://www.fundebug.com/)。**

# 调用栈

JavaScript是一种单线程编程语言，这意味着它只有一个调用堆栈。因此，它一次只能做一件事。

调用栈是一种数据结构，它记录了我们在程序中的位置。如果我们运行到一个函数，它就会将其放置到栈顶，当从这个函数返回的时候，就会将这个函数从栈顶弹出，这就是调用栈做的事情。

来个栗子：

![img](img/2019-0410-04.png)

当程序开始执行的时候，调用栈是空的，然后，步骤如下：

![img](img/2019-0410-05.png)

每一个进入调用栈的都称为调用帧。

这能清楚的知道当异常发生的时候堆栈追踪是怎么被构造的，堆栈的状态是如何的，让我们看一下下面的代码：

![img](img/2019-0410-06.png)

如果这发生在 Chrome 里(假设这段代码实在一个名为 foo.js 的文件中)，那么将会生成以下的堆栈追踪：

![img](img/2019-0410-10.png)

"堆栈溢出"，当你达到调用栈最大的大小的时候就会发生这种情况，而且这相当容易发生，特别是在你写递归的时候却没有全方位的测试它。我们来看看下面的代码：

![img](img/2019-0410-07.png)

当引擎开始执行这段代码时，它首先调用函数“foo”。然而，这个函数是递归的，并且在没有任何终止条件的情况下开始调用自己。因此，在执行的每一步中，相同的函数都会被一次又一次地添加到调用堆栈中，如下所示：

![img](img/2019-0410-08.png)

然而，在某些时候，调用堆栈中的函数调用数量超过了调用堆栈的实际大小，浏览器决定采取行动，抛出一个错误，它可能是这样的:

![img](img/2019-0410-11.png)

在单个线程上运行代码很容易，因为你不必处理在多线程环境中出现的复杂场景——例如死锁。
但是在一个线程上运行也非常有限制，由于 JavaScript 只有一个调用堆栈，当某段代码运行变慢时会发生什么?

# 并发与事件循环

当调用堆栈中的函数调用需要花费大量时间来处理时会发生什么情况? 例如，假设你希望在浏览器中使用JavaScript进行一些复杂的图像转换。

你可能会问-为什么这是一个问题?问题是，当调用堆栈有函数要执行时，浏览器实际上不能做任何其他事情——它被阻塞了，这意味着浏览器不能呈现，它不能运行任何其他代码，它只是卡住了，如果你想在应用中使用流畅的页面效果，这就会产生问题。

而且这不是唯一的问题，一旦你的浏览器开始处理调用栈中的众多任务，它可能会停止响应相当长一段时间。大多数浏览器都会这么做，报一个错误，询问你是否想终止 web 页面。

![img](img/2019-0410-09.jpeg)



# 同步和异步的场景

##  同步技术

单线程入栈出栈每次只运行一个软件

```
function fn(){}

fn( ) 
```

##### 



## 异步技术

### 1、回调函数

　　　　ajax典型的异步操作，利用XMLHttpRequest，回调函数获取服务器的数据传给前台　　

　　　　之前也分析过ajax（[飞机票](http://www.cnblogs.com/dirkhe/p/6947824.html)）

　　　　回调函数的含义就是耗时任务f1中执行f2，f1不会堵塞住，而是先执行f2，再延迟执行f1

### 2、事件监听

　　　　addEventListener

　　　　当监听事件发生时，先执行回调函数，再对监听事件进行改写

### 3、观察者模式，也叫订阅发布模式

　　　　多个观察者可以订阅同一个主题，主题对象改变时，主题对象就会通知这个观察者

　　　　其中步骤包括，订阅、发布、退订；先订阅(subscribe)一个主题对象，根据主题对象发布(publish)内容，期间也退订(unsubscribe)主题对象，一旦退订就无法再次发布

　　　　可以把订阅一个主题对象理解成监听一个事件

　　　　观察者模式的一个特点就是一旦主题事件一改变，就会通知整个观察者；观察者模式还可以计算出订阅事件的个数

### 4、promise

　　　　上面也提到了，promise是异步编程的解决方案，是一种容器，保存着异步操作的结果，可以把异步函数以同步函数的形式写出来

　　　　promise第一个特点：对象状态不受外界影响，有三个状态pending()，fulfilled()，rejected()，只有异步操作才会更改这个状态，其他操作无法改变这个状态

　　　　promise第二个特点：一旦状态改变，pending->fulfilled或pending->rejected，状态就会凝固住，称为resolve，通过promise的回调函数可以立即得到这个结果，与事件监听不同，一旦事件错误，就无法再次监听

　　　　promise第三个特点：避免了回调函数的层层嵌套，实际上写promise时，虽然没有回到函数的层层嵌套，但是又有then的嵌套，这个又有新的解决方法

　　　　promise第一个缺点：一旦promise建立，就会立即执行，无法中途停止

　　　　　　举个例子，假如去淘宝买东西，去看上一个东西，想要买，已经点击确定购买了，但是你又cancle了，突然你发现工资发了，你又发送一个请求说又要买了，服务器接收到了你的第一个异步请求，你又有异步请求，异步请求又不能停止，求服务器阴影面积？

　　　　promise的第二个缺点：promise不设置回调函数，抛出的错误无法在外部捕获

　　　　piomise的第三个缺点：处于pending状态，无法知道进展到哪个状态

　　　　下面一个经典的案例：用promise写出ajax，就体现了promise的特点

![复制代码](img/copycode.gif)

```
             function getJSON(url){
                var promise = new Promise(function(resolve,reject){
                var xhr =  new XMLHttpRequest();
                xhr.open("get",url);
                xhr.onreadystatechange=ajax;
                xhr.responseType = "json";
                xhr.setRequestHeader("Accept", "application/json");
                xhr.send();
                function ajax(response){
                    if (this.readyState !=4) {
                        return;
                    }
                    if (this.status ==200) {
                            resolve(this.response)
                    }else{
                        reject(new Error(this.status.responseText))
                    }
                    
                }
            })
            return promise;
        }
        getJSON("/new2").then(function(value){
            console.log(value);
        },function(error){
            console.log(error);
        })
```

 

### 5、es7语法糖async/await

　　　　　async异步函数是promise的完成状态，async函数直接then去获取状态改变值，catch来获取错误

　　　　　await只允许在async内部使用，就是async异步函数内部想要继续then，就可以采用await异步函数，await异步函数是内部的async异步函数

　　　　  async极大精简了promise的操作　　　



```
async  function asyncFn(){
        return 123;
    }
    asyncFn()
        .then(x => {console.log(x)})
        .catch(err => console.log(error))
```



　　　　这是未精简的promise操作，功能是把最终结果return最外层的promise，但是 用到了多层嵌套，比较复杂



```
    const fn = () => {
        return getJSON()
            .then(data =>{
                if(data.params){
                    return otherGetJSON(data).then(otherdata =>{
                        console.log(otherdata);
                        return otherdata;
                    })
                }else{
                    console.log(data)
                }
            })
    }
```



　　　　而async异步函数，直接去return出结果就行，这就是await是async内部async异步函数



```
    const fn = async () => {
        const data = await getJSON();
        if(data.params){
            const otherdata = await otherGetJSON(data);
            console.log(otherdata);
            return otherdata;
        }else{
            console.log(data)
            return data;
        }
    }
```

### 6、co库的generator函数

　　　　　　generator函数是一个异步函数，只有异步操作有结果才会交还执行权

　　　　　　generator用到了ES6的遍历Iterator的概念，创建一个指针对象，指向数据结构的起始位置，每次next指向下一个指针结构成员，直至指向的下一个结构成员为undefined

　　　　　　generator概念就是，每次遍历读用next方法，内部指针从结构头部指向下一个结构成员，直至下一个结构成员为undefined，遇到yield或return时会返回value和done参数，value表示yield或return的值，done表示是否结束　



```
function * gen(x){
      var y = yield x +2;      
      return y;  
}
var g = gen(1);
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: undefined, done: true }
```



　　　　　　yield是遍历的停止标志

　　　　　　而generator中的yield*表示 yield* 后面跟着一个可遍历的结构

# 异步的应用

### ajax

##### Ajax和form的局别

前端程序员常说的Ajax是 `Asynchronous JavaScript and XML`的缩写，意思是异步网络请求。区别于传统web开发中采用的同步方式。

Ajax带来的最大影响就是页面可以无刷新的请求数据。以往，页面表单提交数据，在用户点击完”submit“按钮后，页面会强制刷新一下，体验十分不友好。

##### 传统web请求方式：

页面跳转通信

form提交需要action到php页面和后端进行数据提交和拉取

![img](img/15527067382726.jpg)

##### 使用Ajax后请求：

另开异步进程  页面不跳转通信

![image-20200115225203530](img/image-20200115225203530.png)

网页不发生form提交,通过ajax后端进行数据提交和拉取

![img](img/Snip20190316_17.png)

##### ajax不能携带cookie,http请求可以携带cookie



### webpack按需加载



...

### vue异步组件

promise..

### Vue事件机制,dom通信机制

...