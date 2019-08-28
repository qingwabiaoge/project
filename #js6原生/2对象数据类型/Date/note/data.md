# Date对象

### 新建date对象

```
new Data()
new Date(parseInt(nS) * 1000)
```

### 赋值给变量

```js
const data=new Data()//变量地址ox001复制给变量data

```

### date对象扩展

```
data.a=1//弱类型可以扩展
```

#  全部属性(真实对象键值对)

![1566951214952](img/1566951214952.png)

```js
  const date = new Date()
  //表达式
  console.log(date)//:Wed Aug 28 2019 07:24:47 GMT+0800 (香港标准时间)
//原型属性
  console.log(Object.getPrototypeOf(date))//{constructor: ƒ, toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, …}
//own属性
  console.log(Object.getOwnPropertyNames(date))//[]
//可枚举属性
  console.log(Object.keys(date))//[]
```

# JavaScript 获取当前时间戳：

第一种方法：(这种方法只精确到秒)

```
Date.parse(new Date());
```

------

第二种方法：

```
(new Date()).valueOf();
```

------

第三种方法：

```
new Date().getTime()；
```

# JavaScript直接获得时间字符串

```
 var a=(new Date()).toLocaleDateString()//获取当前日期
     a =a.replace(/\//g,'-');//替换2017/05/03 为 2017-05-03

```

# 字符串<=>时间戳

### 字符串转时间戳

```
 const a=' 2017-05-03'
 var nowdate= (new Date(a))/1000;//把当前日期变成时间戳
```

### 时间戳怎么转成字符串

```
 //第一种
 function getLocalTime(nS) {     
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
 }     
 alert(getLocalTime(1293072805)); //结果是2010年12月23日 10:53

 //第二种    
 function getLocalTime(nS) {     
     return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17)
 }     
 alert(getLocalTime(1293072805));
 //第三种  
     function getLocalTime(nS) {     
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");      
    }     
     alert(getLocalTime(1177824835)); //格式为：2010-10-20 10:00:00
```

