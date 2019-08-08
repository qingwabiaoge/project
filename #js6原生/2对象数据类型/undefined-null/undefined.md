[[toc]]

<style>h3{font-weight:bolder}</style>

# 声明过没赋值的值都是undifined



### 声明变量

```javascript
let i

//i===undefine
```

### obj={}声明一组undefined
obj={}(构造函数this语法糖)，才能用obj.a,没赋值默认都是undefine


```javascript
   let obj = {}//要先定义obj

    console.log(obj.a)
    console.log(obj.b)
    console.log(obj.c)

```

### Array=[] 声明一组undefined

也是一种对象
声明数组变量arr 才能用arr[0],没赋值默认都是undefine

```javascript
  let arr=[]
  console.log( arr[0],arr[1])


let [a,b]=[1]

//b=== undefine
```

### 解构赋值

```javascript
 let {a,b}={a:1}   // let obj={a:1}, obj.b undefine

//b===undefine
```



### 函数默认返回值

函数没有返回值默认返回undefined

# 参数型变量也是如此

### 函数参数

函数参数也是变量的一种形参默认也是undefined


### 构造函数参数

构造函数也是函数的一种 


### vue标签本质也是函数


```javascript
< mybutton type="">< /mybuttion>

<!-- 
构造函数调用new button(),实参传值给形参未赋值的形参为undefine 
-->
```