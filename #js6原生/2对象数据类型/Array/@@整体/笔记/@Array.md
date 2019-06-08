_split分裂,splice剪接 ,slice 一部分@名词_

# 创建数组

```
1. new Array(3); //new可省略, [null,null,null]`

2. new Array("Greg"); //  new可省略, ["Greg"]`

3. Array.of（1）  //[1]
   Array.of（1，2，3）//[1,2,3]
   
4. 类数组转数组
let ArrayLike = { 0 : "a", 1 : "b", 2 : "c" ,length:3};
Array.from(ArrayLike)


                                          
6,数组和字符串互转

[1, 2, 3, 4].join('-')
'1234'.split('')

```


# 判断是否数组类型

1. 检测是不是数组 Array.isArray(arr)

2. arr instanceof Array //操作符不用.和括号
  

# 数组的hasOwnrops属性


1. 有长度 arr.length
2. 有顺序arr[index]

         arr[arr.length-1]  //数组最后一项
         arr[arr.length]=           添加一项





# 栈方法修改数组(改变原数组)



##### 栈方法修改添加删除

push  pop  unshift shift


```
    const arr = [1, 2, 3, 4]
          arr2=arr.push(5)//arr2函数返回值 arr是被影响的值
    console.log(arr)// [1,2,3,4,5]
    console.log(arr2) // 5

```

##### 任意位置删除修改插入
```
    const arr = [1, 2, 3, 4]
          arr2=arr.splice(1,1,'a','b')
    console.log(arr)//[1,'a','b',3,4]
    console.log(arr2)//[2]

//在位置2开始删除1项插入'a','b',函数返回删除的1项[2]

```
# 截取不改变原数组)





```
instance.slice（1，4）\\截取数组2到5不包含5

instance.slice（-3，-1）\\倒数第4到倒数第2不包含4
```

# 数组合并

##### contact(不改变原数组)
```

//arr和类数组拥有
     const arr = [1, 2, 3], arr2 = [1,2,4, 5]
    allarry=arr.concat(arr2)
    console.log(arr) //[1,2,3]
    console.log(allarry) //[1,2,3,4,5]

```


##### Object.assign()(改变原数组)

# 填充数组(改变原数组)

     instance.fill(’qsl’,1,4) //填充qsl在位置2到5不包含5
     


# 数组迭代方法



### 判断所有项符合某条件 返回boolen
 instance.every
### 判断是否有符合某条件的项 返回boolen
 instance.some

###排序
````
arr.sort((a,b)=>b-a)

reverse()//反转
````



### 映射—>按照某条件返回数组
 map

### 过滤—>符合某条件的元素 返回数组


filter

```
  const arr = ["apple", "banner", "pear", "banner", "aaa"]
    const arr2 = arr.filter((item,index,self) => self.indexOf(item) === index)


```

### 相加
reduce

```
   let array = [
        {
            name: 'apple',
            price: 10
        }, {
            name: 'banana',
            price: 9
        }
    ];

    let sumprice = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sumprice += element.price;
    }
    console.log('for example sumprice',sumprice);

    /*
        reduce 语法实现
        total    必需。初始值, 或者计算结束后的返回值。
        currentValue    必需。当前元素
        currentIndex    可选。当前元素的索引
        arr    可选。当前元素所属的数组对象。
    */
    sumprice = array.reduce(function (total, currentValue, currentIndex, arr) {
        return total + currentValue.price;
    }, 0);
    console.log('for reduce sumprice',sumprice);

```


### 判断是否包含某基本类型数据

```
 arr.includes(1)  //判断arr是否包含1 返回boolen,

 arr.includes({a:1})  //不能判断深层次包含
```


### 返回数组中基本类型数据的索引


```
1. arr.indexOf(1)  //从前往后数第一个1的索引
2. arr.lastindexOf(1’) //从后往前数第一个1的索引


3. arr.indexOf({a: 10}) //无法使用,返回-1
```
### 数组搜索

```
3. arr.find(function(item, index, self) { return item>1 }) //查找第一个值
4. arr.findindex(function(item, index, self) { return item > 9 }) //查找第一个索引
```
例

```

arr=[{a:1,id:1},{b:2,id:2}]    已知id：2 可以删除{b:2,id:2}吗?
------------------------
arr=[{a:1,id:1},{b:2,id:2},{b:2,id:3}]
 const index =arr.findIndex((item,index,arr)=>{return item.id===3})
```


#  循环遍历（处理各个项）
```
for循环

for....of

forEach


```

# 错误

##### null,undefine 不能用数组方法的解决方法

数组的方法的主题必须是数组 若为null,undefine就不是数组会报错__ 

![](1.png)

解决方法1 先判断是否爲数组

```
if(Array.isArray(arr)){

arr.filter(..)
}

```


解决方法2 ,用三目先判断一下

```
const arr=undefine

const arr2=arr?arr:[]

```

解决方法3 , ||


```

const arr=null

const _arr=arr||[]

const arr2=_arr.filter(..)

```


##### err
```
try{}
catch(e){}
```


