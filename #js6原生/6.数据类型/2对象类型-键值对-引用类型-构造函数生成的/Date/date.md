# new  Date()

```js
const dataObj=new Date()//返回当前时间对象,字面量为Tue Sep 03 2019 20:30:41 GMT+0800 (香港标准时间)
```
```js
const dataObj=new Date('2017-05-03')//字面量为Wed May 03 2017 00:00:00 GMT+0800 (香港标准时间)
```
```js
const dataObj=new Data(ms数字时间戳)//Wed May 03 2017 00:00:00 GMT+0800 (香港标准时间)
const dataObj=new Data(s时间戳*1000)//Wed May 03 2017 00:00:00 GMT+0800 (香港标准时间)
```



#  实例键值对和表达式

![1566951214952](img/1566951214952.png)



## 时间对象转为字符串

### Object.prototype.toLocaleDateString()

```
dataObj.toLocaleDateString()  //2017-05-03
```

正则replace格式化时间字符串的格式



## Date对象转为时间戳(数字类型)

```
dateObj-0
dateObj.valueOf();
dateObj.getTime()；
Date.parse(dateObj);//精确到s最后三位为0
```


