# 实例化对象的所有属性(真实对象键值对)

![1566952961137](img/1566952961137.png)



### own属性 

```js
  const str=new String('hello')
  console.log(Object.getOwnPropertyNames(str))//["0", "1", "2", "3", "4", "length"]

```
### key属性

```
  console.log(Object.keys(str))//["0", "1", "2", "3", "4"]
```
### __ proto __:String.prototype

```
  console.log(Object.getPrototypeOf(str)) //String.prototype
```

##### 和数组相同的公共方法

|公共方法|array|string（类数组）|Function|
|----|----|-----|-----|
|length|✓|✓|✓类数组参数|
|includes()|✓|✓||
|indexOf()|✓|✓||
|lastIndexOf()|✓|✓||
|concat()|✓|✓||
|截取|sclice <br />var str='abcdefg'; <br/>str.slice(1)   //bcdefg      <br/>str.slice(1,3)  // bc<br/>str.slice(3,1) // ""|1.slice;<br />2. substring(0,30) //参数2的值要比参数1大||
|填充|填充指定位置<br />fill(’qsl’,1,4))|填充开头结尾 <br /> padStart(7,'111111'),padEnd()||

##### 去除空格

```
str.trim('   123')
```

##### 判断是否以xxx开头结尾

endsWith()

startsWith()

##### 重复

```
repeat()
```






