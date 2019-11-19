[^split]:分裂
[^splice]: 剪接 
[^slice]: 一部分@名词_

# Array的静态函数

###  Array.of静态函数创建数组

```javascript
 Array.of（1）  //[1]
 Array.of（1，2，3）//[1,2,3]
```

### Array.from类数组转数组

```javascript
let ArrayLike = { 0 : "a", 1 : "b", 2 : "c" ,length:3};
Array.from(ArrayLike)

```

###  Array.isArray( )判断是否数组类型

1. Array.isArray(arr)
2. arr instanceof Array //操作符不用.和括号
3. arr.instructor=Array
4. Array.protype.isprotypeof(arr)

# 实例的所有属性(真实数据结构) in

![](4.png)

### __ proto __:Array.prototype

##### 栈方法修改数组(只有此组改变原数组)

###### push  pop  unshift shift

```
    const arr = [1, 2, 3, 4]
          arr2=arr.push(5)//arr2函数返回值 arr是被影响的值
    console.log(arr)// [1,2,3,4,5]
    console.log(arr2) // 5

```

###### splice[^splice]任意位置增删改

```javascript
const arr = [1, 2, 3, 4]
arr2=arr.splice(1,1,'a','b')
console.log(arr)//[1,'a','b',3,4]
console.log(arr2)//[2]
//在位置2开始删除1项插入'a','b',函数返回删除的1项[2]

```

###### fill 填充数组(改变原数组)

```
 instance.fill(’qsl’,1,4) //填充qsl在位置2到5不包含5
```

##### 和string相同的方法(不改变原数组)

###### slice[^slice] 截取

```
instance.slice（1，4）\\截取数组2到5不包含5

instance.slice（-3，-1）\\倒数第4到倒数第2不包含4
```

###### contact(不改变原数组)

```
//arr和类数组拥有
     const arr = [1, 2, 3], arr2 = [1,2,4, 5]
    allarry=arr.concat(arr2)
    console.log(arr) //[1,2,3]
    console.log(allarry) //[1,2,3,4,5]

```

###### includes

```
 arr.includes(1)  //判断arr是否包含1 返回boolen,

 arr.includes({a:1})  //不能判断深层次包含
```

###### indexOf

```
1. arr.indexOf(1)  //从前往后数第一个值为1的索引
2. arr.lastindexOf(1’) //从后往前数第一个值为1的索引
3. arr.indexOf({a: 10}) //无法使用,返回-1
```

##### 数组和字符串互转

###### join转字符串

```
[1, 2, 3, 4].join('-')
[...'abc']
```
###### split[^split] 字符串转数组

```javascript
'1234'.split('')
```
##### 数组迭代方法(不改变原数组)

###### every判断所有项符合某条件 返回boolen

```
 Array.protype.every((item,index,self) => {})
```

###### some判断是否有符合某条件的项 返回boolen

```
 Array.protype.some((item,index,self) => {})
 
```

###### map映射—>按照某条件返回数组

```
  Array.protype.map((item,index,self) => {})
```

###### filter过滤—>符合某条件的元素 返回数组

```
 Array.protype.filter((item,index,self) => {})
```

数组去重

```
const arr=["apple","banner","pear","banner","aaa"]
arr = arr.filter((item,index,self)=>{
       return self.indexOf(item) === index
      })
```

###### forEach对每一项操作

```
 Array.protype.forEach((item,index,self) => {})
```

###### find数组搜索

```
3. arr.find(function(item, index, self) { return item>1 }) //查找第一个值
```
###### findindex搜索第一个符合条件的索引
```
4. arr.findindex(function(item, index, self) { return item > 9 }) //查找第一个索引
```

 已知id：2 可以删除{id:2,b:2}

```
arr=[{a:1,id:1},{b:2,id:2}]   
------------------------
arr=[{a:1,id:1},{b:2,id:2},{b:2,id:3}]
 const index =arr.findIndex((item,index,arr)=>{return item.id===3})
```

###### sort排序

```
 Array.protype.sort((a,b)=>b-a)
```
###### reverse反转
```
Array.protype.reverse()//反转
```

###### reduce

```
array.reduce((total, item, index, self) => res += item, initialValue)

total：上一次调用回调返回的值，或者是提供的初始值（initialValue）

item：数组中正在处理的元素

index：数据中正在处理的元素索引，如果提供了 initialValue ，从0开始；否则从1开始

self： 调用 reduce 的数组

initialValue：可选项，其值用于第一次调用 callback 的第一个参数。如果没有设置初始值，则将数组中的第一个元素作为初始值。空数组调用reduce时没有设置初始值将会报错。

```

### ownProperty

```javascript
['leng','0','1']
```

### keys(EnumerableProperty()

```javascript
['0','1']
```

# 错误

### null,undefine 报错的解决方法

数组的方法的主题必须是数组 若为null,undefine就不是数组会报错

![](1.png)

解决方法1 先判断是否爲数组

```
if(Array.isArray(arr)){

arr.filter(..)
}

```

解决方法2 ., ||

```
const arr=null

const _arr=arr||[]

const arr2=_arr.filter(..)

```



